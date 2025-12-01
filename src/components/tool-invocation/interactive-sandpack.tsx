"use client";

import { Sandpack } from "@codesandbox/sandpack-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type SandpackToolOutput = {
  title?: string;
  description?: string;
  template: string;
  files?: Record<string, { code: string; active?: boolean; hidden?: boolean }>;
  options?: {
    showTabs?: boolean;
    showLineNumbers?: boolean;
    readOnly?: boolean;
    wrapContent?: boolean;
  };
};

export function InteractiveSandpack({
  title,
  description,
  template,
  files,
  options = {
    showTabs: true,
    showLineNumbers: true,
    readOnly: false,
    wrapContent: false,
  },
}: SandpackToolOutput) {
  return (
    <div className="px-6">
      <Card className="w-full px-0">
        <CardHeader>
          <CardTitle>{title || "Interactive Sandpack"}</CardTitle>

          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </CardHeader>

        <CardContent className="px-0">
          <Sandpack
            theme="dark"
            template={template as any}
            files={files}
            options={options}
          />
        </CardContent>
      </Card>
    </div>
  );
}
