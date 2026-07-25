import { afterEach, describe, expect, it, vi } from "vitest";

const originalSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

afterEach(() => {
  if (originalSiteUrl === undefined) {
    delete process.env.NEXT_PUBLIC_SITE_URL;
  } else {
    process.env.NEXT_PUBLIC_SITE_URL = originalSiteUrl;
  }
  vi.resetModules();
});

describe("canonical site URLs", () => {
  it("uses the www host under the default configuration", async () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    vi.resetModules();

    const { SITE_URL, absoluteUrl } = await import("@/lib/seo");

    expect(SITE_URL).toBe("https://www.biteclub.ca");
    expect(absoluteUrl("/fishing")).toBe("https://www.biteclub.ca/fishing");
    expect(absoluteUrl("/fishing")).not.toMatch(/^https:\/\/biteclub\.ca(?:\/|$)/);
  });

  it("normalizes path slashes and preserves the environment override", async () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://preview.example.com/";
    vi.resetModules();

    const { SITE_URL, absoluteUrl } = await import("@/lib/seo");

    expect(SITE_URL).toBe("https://preview.example.com");
    expect(absoluteUrl()).toBe("https://preview.example.com/");
    expect(absoluteUrl("fishing/")).toBe("https://preview.example.com/fishing");
    expect(absoluteUrl("/fishing///")).toBe("https://preview.example.com/fishing");
  });
});
