# URL Shortener

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16.1.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0.0-13AA52?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

A modern, full-stack URL shortener built with **Next.js** and **MongoDB**, featuring custom short links, instant redirects, and a beautiful dark-mode UI.

[Live Demo](#demo) • [Features](#features) • [Quick Start](#quick-start) • [Documentation](#documentation) • [Contributing](#contributing)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Documentation](#documentation)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Usage](#usage)
  - [API Reference](#api-reference)
  - [Project Structure](#project-structure)
- [Database Schema](#database-schema)
- [Architecture](#architecture)
- [Development](#development)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

---

## Overview

**URL Shortener** is a full-stack web application that transforms long, unwieldy URLs into compact, shareable short links. Perfect for social media, marketing campaigns, and anywhere you need clean, memorable links.

Built as a production-ready demonstration of modern full-stack development with **Next.js**, **React**, and **MongoDB**, this project combines scalability with user experience.

### Why This Project?

- 🎓 **Learn Full-Stack Development** - Understand how modern web apps work end-to-end
- ⚡ **Production-Ready Code** - Best practices in real-world scenarios
- 🚀 **Scalable Architecture** - Easily extends to handle high traffic
- 🔧 **Modern Stack** - Latest versions of Next.js, React, and MongoDB

---

## Features

<table>
  <tr>
    <td width="50%">
      <h3>🔗 Core Features</h3>
      <ul>
        <li><strong>Auto-Generated Links</strong> - 6-character alphanumeric short codes</li>
        <li><strong>Custom Short URLs</strong> - Create memorable branded links</li>
        <li><strong>Instant Redirects</strong> - Lightning-fast URL resolution</li>
        <li><strong>Collision Detection</strong> - Automatic duplicate prevention</li>
      </ul>
    </td>
    <td width="50%">
      <h3>🎨 User Experience</h3>
      <ul>
        <li><strong>Dark Mode</strong> - Light/dark theme toggle with persistence</li>
        <li><strong>Responsive Design</strong> - Optimized for desktop, tablet, mobile</li>
        <li><strong>Modern UI</strong> - Built with Tailwind CSS & Lucide icons</li>
        <li><strong>Touch-Friendly</strong> - Perfect mobile navigation</li>
      </ul>
    </td>
  </tr>
</table>

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Frontend Framework** | Next.js | 16.1.3 |
| **UI Library** | React | 19.2.3 |
| **Styling** | Tailwind CSS | 4 |
| **Database** | MongoDB | 7.0.0 |
| **Icons** | Lucide React | 0.562.0 |
| **Linting** | ESLint | 9 |

---

## Quick Start

### Prerequisites

- **Node.js** 18.17+
- **MongoDB** (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/Muzzu8421/url_shortener.git
cd url_shortener

# Install dependencies
npm install

# Set up environment variables
echo 'MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_SITE_URL=http://localhost:3000' > .env.local

# Start the development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Documentation

### Installation

<details>
<summary><b>Full Installation Guide</b></summary>

#### 1. Clone Repository
```bash
git clone https://github.com/Muzzu8421/url_shortener.git
cd url_shortener
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Environment Setup
Create `.env.local` in the project root:
```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/url_shortener

# Public Site URL (for generating shareable links)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**MongoDB Atlas Setup:**
1. Create account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get connection string from "Connect" button
4. Replace `username` and `password` with your credentials

#### 4. Run Locally
```bash
npm run dev
```

#### 5. Production Build
```bash
npm run build
npm start
```

</details>

### Configuration

**Environment Variables:**

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `MONGODB_URI` | ✅ | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `NEXT_PUBLIC_SITE_URL` | ✅ | Public URL for short link generation | `https://yourdomain.com` |

### Usage

#### Creating a Short URL

1. Navigate to **Shorten** page (`/shorten`)
2. Enter your long URL
3. (Optional) Set a custom short code
4. Click "Generate"
5. Copy and share!

```
Input:  https://example.com/very/long/url/with/parameters?id=123
Output: https://yoursite.com/aBc123
```

#### Using a Short Link

Simply visit your short URL - automatic redirect to original:
```
https://yourdomain.com/abc123 → https://example.com/very/long/url
```

### API Reference

#### Generate Short URL

**Endpoint:** `POST /api/generate`

**Request:**
```json
{
  "url": "https://example.com/long/url",
  "shortUrl": "custom"  // optional
}
```

**Response (Success - 201):**
```json
{
  "success": true,
  "error": false,
  "shortUrl": "https://yourdomain.com/abc123",
  "message": "URL generated successfully"
}
```

**Response (Error - 409 - Duplicate Custom):**
```json
{
  "message": "Custom URL already exists",
  "status": 409
}
```

### Project Structure

```
url_shortener/
├── src/
│   ├── app/
│   │   ├── layout.js                 # Root layout wrapper
│   │   ├── page.js                   # Home page
│   │   ├── about/
│   │   │   └── page.js               # About page
│   │   ├── shorten/
│   │   │   └── page.js               # URL shortening interface
│   │   ├── api/
│   │   │   └── generate/
│   │   │       └── route.js          # POST /api/generate endpoint
│   │   └── [shorturl]/
│   │       └── page.js               # Dynamic redirect route
│   ├── components/
│   │   ├── Navbar.js                 # Navigation with theme toggle
│   │   ├── Hero.js                   # Hero section component
│   │   └── Footer.js                 # Footer component
│   └── lib/
│       └── mongodb.js                # MongoDB client configuration
├── public/                            # Static assets
├── .env.local                         # Environment variables (not in git)
├── jsconfig.json                      # JavaScript config
├── next.config.js                     # Next.js configuration
├── tailwind.config.js                 # Tailwind CSS config
└── package.json                       # Dependencies
```

---

## Database Schema

### Collection: `urls`

```javascript
{
  _id: ObjectId,
  url: String,           // Original long URL
  shortUrl: String,      // 6-char short code (unique indexed)
  date: Date            // Creation timestamp
}
```

**Indexes:**
```javascript
db.urls.createIndex({ shortUrl: 1 }, { unique: true })
```

---

## Architecture

```
┌─────────────────────────────────────────────┐
│           User Browser                      │
├─────────────────────────────────────────────┤
│  Next.js Frontend (React Components)        │
│  ├─ Navbar (theme toggle, navigation)      │
│  ├─ Hero (landing page)                     │
│  ├─ Shorten Form (URL input)                │
│  └─ Theme Manager (localStorage)            │
├─────────────────────────────────────────────┤
│     Next.js API Routes (Backend)            │
│  └─ POST /api/generate (URL generation)    │
├─────────────────────────────────────────────┤
│        MongoDB Database                      │
│  └─ urls collection (URLs + metadata)      │
└─────────────────────────────────────────────┘
```

**Data Flow:**
1. User enters URL on Shorten page
2. Frontend sends POST to `/api/generate`
3. Backend generates/validates short code
4. MongoDB stores mapping
5. Backend returns short URL
6. User visits short link → dynamic route fetches from DB → redirects to original

---

## Development

### Available Scripts

```bash
npm run dev       # Start dev server (http://localhost:3000)
npm run build     # Production build
npm start         # Run production build
npm run lint      # Run ESLint
```

### Pages Reference

| Route | Purpose | Status |
|-------|---------|--------|
| `/` | Home/landing page | ✅ Active |
| `/shorten` | URL shortening interface | ✅ Active |
| `/about` | About the application | ✅ Active |
| `/[shorturl]` | Redirect handler | ✅ Active |

---

## Roadmap

### Phase 1: Foundation ✅
- [x] Core URL shortening
- [x] Custom short codes
- [x] Dark mode
- [x] Responsive design

### Phase 2: Analytics
- [ ] Click tracking per link
- [ ] Time-series analytics dashboard
- [ ] Geographic insights

### Phase 3: Advanced Features
- [ ] User authentication & account management
- [ ] Link expiry dates
- [ ] QR code generation
- [ ] Link management dashboard
- [ ] Bulk URL shortening
- [ ] API keys for programmatic access

### Phase 4: Scale
- [ ] Rate limiting
- [ ] Caching layer (Redis)
- [ ] CDN integration
- [ ] Monitoring & alerts

---

## Contributing

Contributions make the open source community amazing! We welcome:

- **Bug Reports** - Issues with code or features
- **Feature Requests** - New functionality ideas
- **Pull Requests** - Code improvements
- **Documentation** - README, guides, examples

### Getting Started with Development

```bash
# Fork the repo on GitHub
# Clone your fork
git clone https://github.com/YOUR_USERNAME/url_shortener.git
cd url_shortener

# Create a feature branch
git checkout -b feature/amazing-feature

# Make changes and commit
git add .
git commit -m "feat: Add amazing feature"

# Push to your fork
git push origin feature/amazing-feature

# Open Pull Request on GitHub
```

### Code Style

- Use ESLint: `npm run lint`
- Follow React & Next.js best practices
- Write meaningful commit messages
- Add comments for complex logic

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License - You are free to use this project for personal or commercial purposes.
```

---

## Support

### Getting Help

- 📖 **Documentation** - Read the [full guide](#documentation)
- 🐛 **Bug Reports** - [Open an issue](https://github.com/Muzzu8421/url_shortener/issues)
- 💬 **Discussions** - [GitHub Discussions](https://github.com/Muzzu8421/url_shortener/discussions)
- 📧 **Email** - [Create an issue](https://github.com/Muzzu8421/url_shortener/issues) with details

### Troubleshooting

<details>
<summary><b>MongoDB connection fails</b></summary>

1. Verify `MONGODB_URI` in `.env.local`
2. Check MongoDB Atlas IP whitelist (add your IP)
3. Ensure database name matches: `url_shortener`
4. Test connection: `node -e "require('mongodb').MongoClient.connect(process.env.MONGODB_URI)"`

</details>

<details>
<summary><b>Short links not redirecting</b></summary>

1. Check that MongoDB has `urls` collection
2. Verify `NEXT_PUBLIC_SITE_URL` matches your domain
3. Test API: `curl -X POST http://localhost:3000/api/generate -H "Content-Type: application/json" -d '{"url":"https://example.com"}'`

</details>

<details>
<summary><b>Styling not working</b></summary>

1. Run `npm install` to ensure Tailwind is installed
2. Restart dev server: `npm run dev`
3. Clear browser cache (Ctrl+Shift+Delete)

</details>

---

<div align="center">

### Made with ❤️ by [Muzzu8421](https://github.com/Muzzu8421)

[⬆ Back to Top](#url-shortener)

</div>
