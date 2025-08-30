# Kotlin for Nova

Kotlin language support for [Nova](https://nova.app/) editor on macOS.

## 📦 What's Available

### Syntax-Only Version (Nova Extension Library)
- ✅ **Syntax highlighting** for `.kt` and `.kts` files
- ✅ **Compatible** with Nova 11.10+
- ✅ **Easy installation** from Extension Library

### Full LSP Version (Manual Install)
- ✅ **Everything from syntax version**
- ✅ **Language Server integration** (autocomplete, hover, diagnostics)
- ✅ **Go-to-definition** and advanced features
- ⚠️ **Requires** manual kotlin-language-server installation

## 🚀 Installation

### Option 1: Syntax-Only (Extension Library)
1. Open Nova
2. Go to **Extensions → Extension Library...**
3. Search for "Kotlin Syntax"
4. Click **Install**
5. Open any `.kt` or `.kts` file - syntax highlighting works immediately!

### Option 2: Full LSP Version (Manual)
1. **Install kotlin-language-server**:
   ```sh
   brew install kotlin-language-server
   ```
2. **Get the extension**:
   - Clone this repository
   - Use the `ScanFlow.novakotlin.novaextension` folder
3. **Activate in Nova**:
   - Go to **Extensions → Activate Local Extension…**
   - Select the extension folder
4. **Configure (optional)**:
   - **Nova → Preferences → Extensions → Kotlin**
   - Set custom **Kotlin Language Server Path** if needed

## ✨ Features

### Syntax Highlighting (Both Versions)
- Keywords, operators, and built-in types
- String templates and raw strings  
- Comments and annotations
- Function and class declarations
- Generics and lambda expressions

### Language Server Features (Manual Install Only)
- Code completion and IntelliSense
- Hover information and documentation
- Real-time diagnostics and error reporting
- Go to definition and navigation
- Document formatting

## 📁 Repository Structure

```
nova-kotlin/
├── ScanFlow.novakotlin.novaextension/        # Full LSP version
├── ScanFlow.novakotlin-syntax.novaextension/  # Syntax-only (submitted)
├── extensions/
│   ├── legacy/                               # Nova 11.10+ compatible
│   └── modern/                               # Future Nova versions
└── shared/                                   # Shared assets
```

## 🐛 Issues & Support

If you encounter any issues or have feature requests, please [open an issue](https://github.com/johncurley/nova-kotlin/issues) on GitHub.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- Built on top of the excellent [kotlin-language-server](https://github.com/fwcd/kotlin-language-server)
- Syntax highlighting based on Kotlin's official TextMate grammar
