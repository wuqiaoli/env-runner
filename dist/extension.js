(()=>{"use strict";var e={265:function(e,t,r){var n,o=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||(n=function(e){return n=Object.getOwnPropertyNames||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[t.length]=r);return t},n(e)},function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r=n(e),a=0;a<r.length;a++)"default"!==r[a]&&o(t,e,r[a]);return i(t,e),t});Object.defineProperty(t,"__esModule",{value:!0}),t.deactivate=t.activate=void 0;const s=a(r(398)),u=s.workspace.getConfiguration("envRunner").commands;let c=null;t.activate=e=>{const t=new l;s.window.registerTreeDataProvider("customEnvironmentView",t),u.forEach((t=>{e.subscriptions.push(s.commands.registerCommand(t.id,(()=>async function(e){c&&void 0===c.exitStatus||(c=s.window.createTerminal("项目启动")),c.show(),c.sendText(""),await new Promise((e=>setTimeout(e,300))),c.sendText(e)}(t.command))))})),s.window.onDidCloseTerminal((e=>{e===c&&(c=null)}))};class l{getTreeItem(e){return e}getChildren(){return u.map((e=>{const t=new s.TreeItem(e.label,s.TreeItemCollapsibleState.None);return t.command={command:e.id,title:e.label},t}))}}t.deactivate=()=>{c&&(c.dispose(),c=null)}},398:e=>{e.exports=require("vscode")}},t={},r=function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}(265);module.exports=r})();