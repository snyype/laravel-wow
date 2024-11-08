# Laravel Wow - VSCode Extension

Laravel Wow is a Visual Studio Code extension that makes debugging Laravel applications quicker and easier by allowing you to wrap selected variables in `dd()`.

## Usage

### Wrapping Variables in `dd()`

To use the extension, simply select the text or variable in your code, and then either run the command or use the keybinding to wrap it in `dd()`.

#### Command

1. **Select the text or variable** you want to wrap in `dd()`.
2. Open the **Command Palette** (`Ctrl+Shift+P` on Windows/Linux or `Cmd+Shift+P` on Mac).
3. Search for and select **"Wrap in dd()"**.
4. The selected text will be replaced with `dd(selectedText);`.

#### Keybinding

You can also use the default keybinding to wrap selected text in `dd()`.

- **Windows/Linux**: `Ctrl+Alt+D`
- **Mac**: `Cmd+Alt+D`

### Example

#### Before:
```php
$variable;


