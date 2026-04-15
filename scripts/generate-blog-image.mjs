#!/usr/bin/env node
/**
 * Cadence Blog Cover Image Generator
 * Uses Recraft V4 via fal.ai
 *
 * Usage:
 *   node scripts/generate-blog-image.mjs <slug> "<prompt>"
 *
 * Example:
 *   node scripts/generate-blog-image.mjs performance-review-ceiling "A manager and employee sitting across a clean desk..."
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

// Load API key from .env.local
function loadEnv() {
  try {
    const env = readFileSync(resolve(ROOT, ".env.local"), "utf8");
    for (const line of env.split("\n")) {
      const [key, ...rest] = line.split("=");
      if (key && rest.length) process.env[key.trim()] = rest.join("=").trim();
    }
  } catch {
    // fall through — key may already be in environment
  }
}

async function generateImage(slug, prompt) {
  loadEnv();

  const apiKey = process.env.FAL_KEY;
  if (!apiKey) {
    console.error("FAL_KEY not found. Check .env.local");
    process.exit(1);
  }

  const outputDir = resolve(ROOT, "public/images/blog");
  const outputPath = resolve(outputDir, `${slug}.jpg`);

  console.log(`Generating image for: ${slug}`);
  console.log(`Prompt: ${prompt}\n`);

  // Submit request to fal.ai Recraft V4
  const response = await fetch("https://fal.run/fal-ai/recraft/v4/text-to-image", {
    method: "POST",
    headers: {
      "Authorization": `Key ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      style: "any",
      image_size: "landscape_16_9",
      output_format: "jpeg",
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error(`API error ${response.status}:`, error);
    process.exit(1);
  }

  const result = await response.json();
  const imageUrl = result?.images?.[0]?.url;

  if (!imageUrl) {
    console.error("No image URL in response:", JSON.stringify(result, null, 2));
    process.exit(1);
  }

  console.log(`Image generated. Downloading...`);

  // Download the image
  const imageResponse = await fetch(imageUrl);
  if (!imageResponse.ok) {
    console.error("Failed to download image");
    process.exit(1);
  }

  const buffer = Buffer.from(await imageResponse.arrayBuffer());

  // Save to public/images/blog/
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputPath, buffer);

  console.log(`Saved to: public/images/blog/${slug}.jpg`);
}

// Parse args
const [, , slug, ...promptParts] = process.argv;
const prompt = promptParts.join(" ");

if (!slug || !prompt) {
  console.error("Usage: node scripts/generate-blog-image.mjs <slug> \"<prompt>\"");
  process.exit(1);
}

generateImage(slug, prompt).catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
