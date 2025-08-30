# Kotlin for Nova (Full LSP)

**Kotlin for Nova** provides complete Kotlin language support including syntax highlighting and Language Server Protocol (LSP) integration for [Nova](https://nova.app/) editor.

## Features

### Syntax Highlighting
- ✨ **Complete syntax highlighting** for `.kt` and `.kts` files
- 🎯 **Keywords, operators, and built-in types**
- 📝 **String templates and raw strings** 
- 💬 **Comments and annotations**
- 🏗️ **Function and class declarations**
- 🔧 **Generics and lambda expressions**

### Language Server Features
- 🔍 **Code completion** and IntelliSense
- 📖 **Hover information** and documentation
- ⚡ **Real-time diagnostics** and error reporting
- 🎯 **Go to definition** and navigation
- 📐 **Document formatting**

## Installation

### Prerequisites
First, install the Kotlin Language Server:

```bash
brew install kotlin-language-server
```

### Extension Setup
1. **Clone or download** this repository
2. **In Nova**: Go to **Extensions → Activate Local Extension…**
3. **Select** the `ScanFlow.novakotlin.novaextension` folder
4. **Open** any `.kt` or `.kts` file to activate

### Configuration (Optional)
- Go to **Nova → Preferences → Extensions → Kotlin**
- Set custom **Kotlin Language Server Path** if needed (defaults to `kotlin-language-server`)

## Language Support

This extension provides comprehensive Kotlin support including:

- **All syntax highlighting features** from the syntax-only version
- **Autocomplete** for classes, functions, and variables  
- **Error checking** and diagnostics as you type
- **Hover documentation** for symbols and APIs
- **Go-to-definition** navigation
- **Document formatting** and code style

## Troubleshooting

If the language server isn't working:

1. **Verify installation**: Run `kotlin-language-server --version` in Terminal
2. **Check preferences**: Ensure the path is correct in Nova preferences  
3. **Restart Nova** after making configuration changes
4. **Check Extension Console** for error messages

## Alternative: Syntax-Only Version

If you only need syntax highlighting without LSP features, consider the simpler [Kotlin Syntax](https://github.com/johncurley/nova-kotlin) extension available in the Nova Extension Library.

## Issues & Support

If you encounter any issues, please [open an issue](https://github.com/johncurley/nova-kotlin/issues) on GitHub.