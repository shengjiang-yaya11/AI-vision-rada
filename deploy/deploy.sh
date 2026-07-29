#!/bin/bash
# AI-VisionRada Deployment Script
# Usage: ./deploy.sh

set -e

echo "🚀 AI-VisionRada Deployment"
echo "=========================="
echo ""

# Build frontend
echo "📦 Building frontend..."
cd "$(dirname "$0")/../frontend"
npm install --silent
npm run build

echo ""
echo "✅ Build complete! Output: frontend/dist/"
echo ""
echo "📋 To deploy to Cloudflare Pages:"
echo "   1. Run: wrangler login"
echo "   2. Run: wrangler pages deploy dist --project-name=ai-vision-rada"
echo ""
echo "   OR deploy via Cloudflare Dashboard:"
echo "   1. Go to https://dash.cloudflare.com/pages"
echo "   2. Connect GitHub: shengjiang-yaya11/AI-vision-rada"
echo "   3. Build command: cd frontend && npm install && npm run build"
echo "   4. Output directory: frontend/dist"
echo ""
