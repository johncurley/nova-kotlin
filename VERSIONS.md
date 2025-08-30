# Nova Kotlin Extension - Version Support

This repository supports multiple versions of Nova with different feature sets.

## Directory Structure

```
nova-kotlin/
├── extensions/
│   ├── legacy/                           # Nova 11.10+ support
│   │   └── ScanFlow.novakotlin.novaextension/
│   └── modern/                           # Nova 12+ support (future)
│       └── ScanFlow.novakotlin.novaextension/
├── shared/                               # Shared assets
│   ├── images/
│   └── syntaxes/
└── [development files]
```

## Version Compatibility

### Legacy Version (v1.x) - Nova 11.10+
**Location**: `extensions/legacy/ScanFlow.novakotlin.novaextension/`

**Features**:
- TextMate grammar syntax highlighting
- Basic LSP integration
- Simple extension structure
- Compatible with older Nova versions

**Use this version for**:
- Nova 11.10 through current
- Submission to Extension Library
- Maximum compatibility

### Modern Version (v2.x) - Future Nova 12+
**Location**: `extensions/modern/ScanFlow.novakotlin.novaextension/`

**Features** (when Nova supports them):
- Tree-sitter queries for advanced highlighting
- Nova XML syntax definitions
- Enhanced LSP integration
- Code folding and symbol navigation
- Modern Nova APIs

**Use this version for**:
- Future Nova versions
- Advanced features
- Development with newer Macs

## Development Workflow

1. **Current development**: Use legacy version for submissions
2. **Future development**: Enhance modern version when upgrading Nova
3. **Testing**: Both versions can be tested independently
4. **Shared assets**: Icons and base syntax files are symlinked

## Switching Versions

To use legacy version (current):
```bash
open extensions/legacy/ScanFlow.novakotlin.novaextension
```

To use modern version (future):
```bash
open extensions/modern/ScanFlow.novakotlin.novaextension
```