import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "extension.githubZen",
    () => {
      vscode.window.showInformationMessage("zen");
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
