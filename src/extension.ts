import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Extension "laravel-wow" is now active!');

	let disposable = vscode.commands.registerCommand('extension.wrapInDD', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor && editor.selection.isEmpty === false) {
			const selectedText = editor.document.getText(editor.selection);
			const currentLine = editor.document.lineAt(editor.selection.start.line); // Get the current line of code
			const nextLinePosition = currentLine.range.end; // Get the end of the current line to move to the next line

			// Insert dd() on the next line
			editor.edit(editBuilder => {
				// First, restore the selected text to its original position
				editBuilder.replace(editor.selection, selectedText);

				// Then, insert dd() on the next line after the current line
				editBuilder.insert(nextLinePosition, `\ndd($${selectedText});`);
			});
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
