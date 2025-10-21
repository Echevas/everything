import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest({
  manifest_version: 3,
  version: "0.0.1",
  name: "Name Pending",
  icons: {
    "16": "merit.png",
    "48": "merit.png",
    "128": "merit.png",
  },
  description:
    "Template to start an echo chrome extension with the proper auth to use AI resources like OpenAI, Anthropic, and more.",
  host_permissions: ["<all_urls>"],
  key: "piebpggjkfeekhamnnmmlkckahbjnchi",
  background: {
    service_worker: "src/background.ts",
    type: "module",
  },
  action: {
    default_popup: "src/echo-popup/index.html",
  },
  side_panel: {
    default_path: "src/side-panel-chat-example/index.html",
  },
  permissions: ["identity", "storage", "sidePanel"],
  commands: {
    "open-side-panel": {
      suggested_key: {
        default: "Ctrl+K",
        mac: "Command+K",
      },
      description: "Open the side panel",
    },
  },
});
