# Kotlin for Nova (Legacy - Nova 11.10+)

**Legacy Kotlin Extension** provides Kotlin language support for older Nova versions (11.10+).

⚠️ **Note**: This is a legacy version for compatibility with older Nova releases. For the latest features and improvements, use the main extension versions in the root directory.

## Features

- ✨ **Syntax highlighting** for `.kt` and `.kts` files
- 🔍 **Language Server Protocol** integration
- 📖 **Code completion** and diagnostics
- 🎯 **Go-to-definition** support

## Installation

### Prerequisites
Install the Kotlin Language Server:

```bash
brew install kotlin-language-server
```

### Extension Setup
1. **Clone or download** this repository
2. **In Nova**: Go to **Extensions → Activate Local Extension…**
3. **Select** the `extensions/legacy/ScanFlow.novakotlin.novaextension` folder
4. **Open** any `.kt` or `.kts` file to activate

## Compatibility

- **Nova 11.10+** - This legacy version
- **Nova 12.0+** - Use the main extension versions in the root directory

## Migration

If you're using a newer version of Nova, consider upgrading to:
- **Main LSP version**: Better performance and features
- **Syntax-only version**: Available in Nova Extension Library

## Issues & Support

If you encounter any issues, please [open an issue](https://github.com/johncurley/nova-kotlin/issues) on GitHub.