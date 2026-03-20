#!/usr/bin/env python3
"""
Generate DALL-E 3 images for blog posts and social cards.

Usage:
  python3 scripts/generate-image.py \
    --topic "How to give feedback your team will actually hear" \
    --type blog \
    --slug "how-to-give-feedback" \
    --output public/images/blog/
"""

import argparse
import os
import sys
import urllib.request
import json

# ─── Prompts by type ─────────────────────────────────────────────────────────

PROMPTS = {
    "blog": (
        "Editorial illustration for a business management blog. "
        "Warm cream background #F5F0E8. Amber #C8782A and teal #3A7D7B geometric accents. "
        "Mid-century modern aesthetic. Abstract shapes and forms suggesting {topic}. "
        "No people, no text rendered in image. Clean, cinematic composition. High quality."
    ),
    "x": (
        "Minimalist social media card. Dark background (#1C2B3A navy). "
        "Amber (#C8782A) accent bars and geometric shapes. Space for text overlay. "
        "Clean modern layout, no text rendered in image, brand colors only. "
        "Topic concept: {topic}."
    ),
    "linkedin": (
        "Professional editorial illustration. Warm cream background. "
        "Amber and sage green geometric accents. Thought leadership aesthetic. "
        "Abstract concept art suggesting {topic}. Polished, LinkedIn-appropriate. "
        "No people, no text rendered in image."
    ),
}

SIZE_MAP = {
    "blog": "1792x1024",
    "x": "1792x1024",
    "linkedin": "1792x1024",
}


def read_api_key():
    """Read OPENAI_API_KEY from ~/.openclaw/.env"""
    env_path = os.path.expanduser("~/.openclaw/.env")
    if not os.path.exists(env_path):
        raise FileNotFoundError(f"No .env file at {env_path}")
    with open(env_path) as f:
        for line in f:
            line = line.strip()
            if line.startswith("OPENAI_API_KEY="):
                return line.split("=", 1)[1].strip().strip('"').strip("'")
    raise ValueError("OPENAI_API_KEY not found in ~/.openclaw/.env")


def generate_image(api_key: str, prompt: str, size: str) -> str:
    """Call DALL-E 3 API and return the image URL."""
    url = "https://api.openai.com/v1/images/generations"
    payload = json.dumps({
        "model": "dall-e-3",
        "prompt": prompt,
        "n": 1,
        "size": size,
        "quality": "hd",
        "response_format": "url",
    }).encode("utf-8")

    req = urllib.request.Request(
        url,
        data=payload,
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=120) as resp:
        data = json.loads(resp.read().decode("utf-8"))
    return data["data"][0]["url"]


def download_image(image_url: str, output_path: str):
    """Download image from URL to output_path."""
    urllib.request.urlretrieve(image_url, output_path)


def main():
    parser = argparse.ArgumentParser(description="Generate DALL-E 3 images for Cadence content")
    parser.add_argument("--topic", required=True, help="Topic/concept for the image")
    parser.add_argument("--type", default="blog", choices=["blog", "x", "linkedin"],
                        help="Image type (blog, x, linkedin)")
    parser.add_argument("--slug", required=True, help="Post slug (used for filename)")
    parser.add_argument("--output", required=True, help="Output directory path")
    args = parser.parse_args()

    # Read API key
    try:
        api_key = read_api_key()
    except (FileNotFoundError, ValueError) as e:
        print(f"ERROR: {e}", file=sys.stderr)
        sys.exit(1)

    # Build prompt
    template = PROMPTS[args.type]
    prompt = template.format(topic=args.topic)
    size = SIZE_MAP[args.type]

    # Ensure output directory exists
    os.makedirs(args.output, exist_ok=True)

    output_path = os.path.join(args.output, f"{args.slug}.jpg")

    print(f"Generating {args.type} image for: {args.slug}")
    print(f"  Prompt: {prompt[:80]}...")
    print(f"  Size: {size}")

    try:
        image_url = generate_image(api_key, prompt, size)
        print(f"  Got URL: {image_url[:60]}...")
        download_image(image_url, output_path)
        print(f"  Saved to: {output_path}")
    except Exception as e:
        print(f"ERROR generating image: {e}", file=sys.stderr)
        sys.exit(1)

    print(f"Done: {output_path}")
    return output_path


if __name__ == "__main__":
    main()
