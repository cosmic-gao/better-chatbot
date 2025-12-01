import { tool as createTool } from "ai";
import { z } from "zod";

export const createSandpackTool = createTool({
  description:
    "Used to create an interactive Sandpack code sandbox (live code editor) within the chat interface. This tool should be used when the user wants to write, run, or share front-end code (such as React, Vue, or plain JavaScript/HTML/CSS). This tool does not execute the code itself, but provides an embeddable editor environment.",
  inputSchema: z.object(),
  execute: async () => {
    return "Success";
  },
});
