# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nova editor extension for Kotlin language support. Nova is a macOS code editor by Panic Inc., and this extension provides syntax highlighting and Language Server Protocol (LSP) integration for Kotlin files.

## Key Components

### Extension Structure
- `extension.json` - Extension manifest with configuration schema
- `extension.js` - Main extension logic handling LSP client lifecycle
- `syntaxes/Kotlin.tmLanguage.json` - TextMate grammar for syntax highlighting
- `locale/` - Localization files (currently empty)
- `Images/Kotlin.png` - Extension icon

### Architecture
The extension follows Nova's standard pattern:
- **Activation**: Triggers when a Kotlin file (`.kt` or `.kts`) is opened
- **LSP Integration**: Uses `nova-language-client` to communicate with `kotlin-language-server`
- **Server Management**: Automatically checks for server installation and shows helpful error messages
- **Configuration**: Allows custom language server path via Nova preferences

## Development Commands

### Validation (CI Pipeline)
```bash
# Validate JSON files
cat extension.json | jq empty
cat syntaxes/Kotlin.tmLanguage.json | jq empty

# Lint JavaScript
npm install -g eslint
eslint extension.js
```

### Testing the Extension
1. In Nova: **Extensions → Activate Local Extension…** and select this folder
2. Open a `.kt` or `.kts` file to trigger activation
3. Check the extension console for any errors

## Extension Configuration

The extension accepts one configuration parameter:
- `kotlin.languageServerPath` - Path to kotlin-language-server executable (defaults to "kotlin-language-server")

## Language Server Requirements

This extension requires `kotlin-language-server` to be installed:
- macOS: `brew install kotlin-language-server`
- Other platforms: Download from https://github.com/fwcd/kotlin-language-server

The extension will automatically detect if the server is missing and show platform-specific installation instructions.

## Syntax Highlighting Features

The TextMate grammar supports:
- Comments (line and block)
- Strings (regular, raw, and character literals with template expressions)
- Numbers (integers, floats, hex, binary)
- Keywords (Kotlin-specific language constructs)
- Types and class declarations
- Function declarations and calls
- Annotations
- Generics
- Package and import statements
- Operators (null-safety, ranges, etc.)
- Lambda expressions

## File Structure
```
nova-kotlin/
├── extension.json          # Extension manifest
├── extension.js           # Main extension logic
├── syntaxes/
│   └── Kotlin.tmLanguage.json  # Syntax highlighting rules
├── Images/
│   └── Kotlin.png         # Extension icon
└── locale/               # Localization (empty)
```