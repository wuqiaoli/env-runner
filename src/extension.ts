import * as vscode from "vscode";

const environments = vscode.workspace.getConfiguration("envRunner").commands;

let terminal: vscode.Terminal | null = null;

// 激活插件
export const activate = (context: vscode.ExtensionContext) => {
  const provider = new EnvironmentProvider();
  vscode.window.registerTreeDataProvider("customEnvironmentView", provider);

  environments.forEach((i: { id: string; command: string }) => {
    context.subscriptions.push(
      vscode.commands.registerCommand(i.id, () => runCommand(i.command))
    );
  });
  vscode.window.onDidCloseTerminal((closedTerminal) => {
    if (closedTerminal === terminal) {
      terminal = null;
    }
  });
};
// 运行命令
async function runCommand(command: string) {
  if (!terminal || terminal.exitStatus !== undefined) {
    terminal = vscode.window.createTerminal("项目启动");
  }
  terminal.show();

  terminal.sendText("\x03"); // Ctrl + C
  await new Promise((resolve) => setTimeout(resolve, 300));

  terminal.sendText(command);
}

class EnvironmentProvider implements vscode.TreeDataProvider<vscode.TreeItem> {
  getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
    return element;
  }
  getChildren(): vscode.TreeItem[] {
    return environments.map((i: { label: string; id: string }) => {
      const item = new vscode.TreeItem(
        i.label,
        vscode.TreeItemCollapsibleState.None
      );
      item.command = {
        command: i.id,
        title: i.label,
      };
      return item;
    });
  }
}

export const deactivate = () => {
  if (terminal) {
    terminal.dispose();
    terminal = null;
  }
};
