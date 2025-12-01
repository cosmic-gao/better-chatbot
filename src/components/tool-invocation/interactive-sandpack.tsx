"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface InteractiveSandpackProps {
  title: string;
  description?: string;
}

export function InteractiveSandpack() {
  return (
    <div className="px-6">
      <Card className="w-full px-0">
        <CardHeader>
          <div className="flex flex-col">
            <CardTitle className="w-full flex items-center gap-2 justify-between">
              Interactive Sandpack
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="px-0 relative">11</CardContent>
      </Card>
    </div>
  );
}
