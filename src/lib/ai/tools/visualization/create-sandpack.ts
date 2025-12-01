import { tool as createTool } from "ai";
import { z } from "zod";

export const createSandpackTool = createTool({
  description:
    "Creates an interactive Sandpack code sandbox (live code editor) inside the chat. " +
    "Use this when the user wants to write, run, preview, or share front-end code. " +
    "Supports React, Vue, HTML/CSS/JS, and custom file structures. " +
    "The tool does not execute code on the server — it returns a configuration that the UI renders as a Sandpack instance.",

  inputSchema: z.object({
    template: z
      .enum([
        "react",
        "react-ts",
        "vanilla",
        "vanilla-ts",
        "vue",
        "vue-ts",
        "nextjs",
        "astro",
      ])
      .default("react"),

    files: z
      .record(
        z.string(),
        z.object({
          code: z.string(),
          active: z.boolean().optional(),
          hidden: z.boolean().optional(),
        }),
      )
      .optional(),

    options: z.object({
      showTabs: z.boolean().default(true),
      showLineNumbers: z.boolean().default(true),
      readOnly: z.boolean().default(false),
      wrapContent: z.boolean().default(false),
    }),

    title: z.string().optional(),
  }),

  execute: async ({ template, files, options, title }) => {
    return {
      status: "success",
      type: "sandpack",
      title: title ?? "Interactive Code Editor",
      template,
      files,
      options,
    };
  },
});
