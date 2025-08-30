const LanguageClient = require("nova-language-client");
const { execFile } = require("child_process");

let client;
let clientStarting = false;

exports.activate = function() {
  nova.workspace.onDidAddTextEditor((editor) => {
    if (editor.document.syntax === "kotlin") {
      startClient();
    }
  });
};

exports.deactivate = function() {
  if (client) {
    client.stop();
    client = null;
  }
  clientStarting = false;
};

function checkServerInstalled(serverPath) {
  return new Promise((resolve, reject) => {
    execFile(serverPath, ["--version"], (err, stdout) => {
      if (err) {
        reject(err);
      } else {
        resolve(stdout);
      }
    });
  });
}

async function startClient() {
  if (client || clientStarting) return;
  
  clientStarting = true;

  let serverPath = nova.config.get("kotlin.languageServerPath") || "kotlin-language-server";

  try {
    await checkServerInstalled(serverPath);
  } catch (err) {
    console.log("Kotlin Language Server not found:", err.message);
    showInstallHelp();
    clientStarting = false;
    return;
  }

  try {
    client = new LanguageClient.LanguageClient(
      "kotlin-lsp",
      "Kotlin Language Server",
      { path: serverPath, args: ["-stdio"] },
      { syntaxes: ["kotlin"] }
    );

    client.onDidStop((err) => {
      if (err) console.error("Kotlin LSP crashed:", err);
      client = null;
      clientStarting = false;
    });

    await client.start();
    console.log("Kotlin Language Server started successfully");
  } catch (err) {
    console.error("Failed to start Kotlin LSP:", err);
    client = null;
  }
  
  clientStarting = false;
}

function showInstallHelp() {
  const serverNotFound = nova.localize("server_not_found", "Kotlin Language Server not found.");
  const installInstructions = nova.localize("install_instructions", "Install via Homebrew:");
  const installCommand = nova.localize("install_command", "brew install kotlin-language-server");
  const customPathOption = nova.localize("custom_path_option", "Or set a custom path in Preferences → Extensions → Kotlin.");

  const message = `${serverNotFound}\n\n👉 ${installInstructions}\n\n    ${installCommand}\n\n${customPathOption}`;

  nova.workspace.showErrorMessage(message);
}
