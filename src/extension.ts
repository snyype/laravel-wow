import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Extension "dd-wrapper" is now active!');

    let disposable = vscode.commands.registerCommand('extension.wrapInDD', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor && editor.selection.isEmpty === false) {
            const selectedText = editor.document.getText(editor.selection);
            editor.edit(editBuilder => {
                // Replace the selected text with dd() wrapped on a new line
                editBuilder.replace(editor.selection, `\n\ndd(${selectedText});\n`);
            });
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
