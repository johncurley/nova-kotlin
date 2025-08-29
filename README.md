# Kotlin for Nova

Kotlin language support for [Nova](https://nova.app/), including:

- Syntax highlighting for `.kt` and `.kts` files
- Kotlin Language Server (LSP) integration
- Autocomplete, hover docs, diagnostics, go-to-definition, and more
- Multi-language support (English, Chinese, French, German, Japanese)

## 🚀 Installation

### From Nova Extension Library (Recommended)
1. Open Nova
2. Go to **Extensions → Extension Library...**
3. Search for "Kotlin"
4. Click **Install**

### Manual Installation
1. Clone or download this repository
2. In Nova, go to **Extensions → Activate Local Extension…** and select this folder
3. Open a `.kt` or `.kts` file to test

## 🔧 Kotlin Language Server

This extension requires [`kotlin-language-server`](https://github.com/fwcd/kotlin-language-server) for full language support.

### Installation

```sh
brew install kotlin-language-server
```

### Configuration

You can customize the language server path in Nova's preferences:

1. Go to **Nova → Preferences → Extensions → Kotlin**
2. Set **Kotlin Language Server Path** to your custom path (optional)

## ✨ Features

- **Syntax Highlighting**: Full Kotlin syntax support including:
  - Keywords, operators, and built-in types
  - String templates and raw strings
  - Comments and annotations
  - Function and class declarations
  - Generics and lambda expressions

- **Language Server Integration**:
  - Code completion
  - Hover information
  - Diagnostics and error reporting
  - Go to definition
  - Document formatting

## 🌍 Localization

The extension supports multiple languages:
- English
- Chinese (Simplified)
- French
- German
- Japanese

## 🐛 Issues & Support

If you encounter any issues or have feature requests, please [open an issue](https://github.com/johncurley/nova-kotlin/issues) on GitHub.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- Built on top of the excellent [kotlin-language-server](https://github.com/fwcd/kotlin-language-server)
- Syntax highlighting based on Kotlin's official TextMate grammar
