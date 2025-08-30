# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2024-08-31

### Added
- Initial release of Kotlin extension for Nova
- Complete Kotlin syntax highlighting for `.kt` and `.kts` files
- TextMate grammar support for Nova 11.10+
- Language Server Protocol (LSP) integration (manual install version)
- Support for kotlin-language-server
- Dual version approach:
  - Syntax-only version for Extension Library
  - Full LSP version for manual installation
- Multi-platform syntax support:
  - Keywords, operators, built-in types
  - String templates and interpolation
  - Comments and annotations
  - Function and class declarations  
  - Generics and lambda expressions
- Extension configuration options
- Proper Nova extension structure for submission

### Features
- **Syntax Highlighting**: Full Kotlin language support
- **LSP Integration**: Code completion, hover info, diagnostics
- **Cross-Version Support**: Compatible with Nova 11.10+
- **Future-Ready**: Modern extension structure prepared

### Technical
- TextMate grammar for syntax highlighting
- CommonJS module structure
- Nova extension manifest v1.0
- Proper entitlements and permissions
- Extension Library compatible structure