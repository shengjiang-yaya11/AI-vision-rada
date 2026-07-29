# AI-VisionRada

**Intelligent Visual Recognition Platform** by Shenzhen Nuolan Yilu Technology Co., Ltd. (深圳诺澜一路科技有限公司)

Next-generation AI computer vision platform for real-time object detection, facial recognition, and intelligent video analytics.

## 🌐 Live Website

**[https://shengjiang-yaya11.github.io/AI-vision-rada/](https://shengjiang-yaya11.github.io/AI-vision-rada/)**

> 🚧 Cloudflare Pages deployment pending — connect via [Cloudflare Dashboard](https://dash.cloudflare.com/pages)

## 🚀 Tech Stack

- **Frontend:** React 19 + Vite + Tailwind CSS + i18next
- **Backend:** FastAPI + Python 3.11+
- **AI Engine:** PyTorch, TensorRT, OpenCV, YOLOv8
- **Deployment:** GitHub Pages, Cloudflare Pages (pending), Docker

## 🌍 Supported Languages

| Language | Code |
|----------|------|
| 🇺🇸 English | `en` |
| 🇨🇳 中文 (Chinese) | `zh` |
| 🇯🇵 日本語 (Japanese) | `ja` |
| 🇫🇷 Français (French) | `fr` |
| 🇪🇸 Español (Spanish) | `es` |

## 📁 Project Structure

```
AI-vision-rada/
├── frontend/        ← React website (multi-language)
├── backend/         ← FastAPI backend
├── deploy/          ← Deployment scripts
├── docs/            ← Documentation
└── dist-packages/   ← Distribution packages
```

## 🔧 Local Development

```bash
cd frontend
npm install
npm run dev
```

## 🚢 Deployment

### GitHub Pages (Auto-deployed)
Push to `main` branch, then run:
```bash
cd frontend && npm run build
# Copy dist/ to gh-pages branch and push
```

### Cloudflare Pages (Recommended)
```bash
# 1. Login
wrangler login

# 2. Deploy
cd frontend
wrangler pages deploy dist --project-name=ai-vision-rada
```

Or connect via Dashboard:
1. Go to [Cloudflare Pages](https://dash.cloudflare.com/pages)
2. Connect GitHub: `shengjiang-yaya11/AI-vision-rada`
3. Build command: `cd frontend && npm install && npm run build`
4. Output directory: `frontend/dist`

## 📧 Contact

- **Company:** Shenzhen Nuolan Yilu Technology Co., Ltd. (深圳诺澜一路科技有限公司)
- **Email:** 2212085042@qq.com
- **Location:** Shenzhen, Guangdong, China

## 📄 License

All rights reserved © 2026 Shenzhen Nuolan Yilu Technology Co., Ltd.
