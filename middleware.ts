import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";

  const blockedBots = [
    "curl",
    "wget",
    "python",
    "scrapy",
    "bot",
    "crawler"
  ];

  for (const bot of blockedBots) {
    if (userAgent.toLowerCase().includes(bot)) {
      return new NextResponse("Forbidden", { status: 403 });
    }
  }

  return NextResponse.next();
}