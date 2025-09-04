# MicroNET — Tech that works, Service that cares

A modern, animated website for MicroNET Maldives, featuring comprehensive IT solutions, Micro Moto Garage, and the new Micro Cool home appliance services.

## 🚀 Features

- **Modern Design**: Black + ice-blue theme with glassmorphism effects and smooth animations
- **Framer Motion**: Tasteful micro-interactions and scroll-triggered animations
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized images, dynamic imports, and edge-friendly APIs
- **Accessibility**: High contrast, focus rings, semantic HTML, and ARIA support
- **Contact Form**: reCAPTCHA protected with rate limiting and Telegram bot notifications
- **SEO Optimized**: Structured data, meta tags, and Open Graph support

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Form Validation**: react-google-recaptcha
- **Messaging**: Telegram Bot API
- **Analytics**: Vercel Analytics
- **Icons**: React Icons

## 📦 Installation & Setup

1. **Clone and Install**:
   ```bash
   git clone <repository-url>
   cd micronet-revamped
   npm install
   ```

2. **Environment Setup**:
   ```bash
   cp .env.example .env.local
   ```

   Fill in your environment variables:
   ```env
   # Telegram Bot Integration
   TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here
   TELEGRAM_CHAT_ID=your_telegram_chat_id_here

   # Google reCAPTCHA v2
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_public_recaptcha_site_key
   RECAPTCHA_SECRET_KEY=your_secret_recaptcha_key

   # Analytics (optional)
   NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id
   ```

3. **Development**:
   ```bash
   npm run dev
   ```

4. **Production Build**:
   ```bash
   npm run build
   npm start
   ```

## 🌐 External Services Configuration

### Telegram Bot Setup
1. Create a bot by messaging [@BotFather](https://t.me/BotFather) on Telegram
2. Send `/newbot` and follow the instructions to get your bot token
3. Get your chat ID by messaging [@userinfobot](https://t.me/userinfobot)
4. Update `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` in your environment
5. Start the bot by sending `/start` to ensure message delivery

### Google reCAPTCHA
1. Go to [Google reCAPTCHA](https://www.google.com/recaptcha)
2. Register your domain for reCAPTCHA v2 ("I'm not a robot" checkbox)
3. Get your site key and secret key
4. Update the environment variables

### Vercel Analytics (Optional)
1. Deploy to Vercel or add analytics to your project
2. Get your analytics ID from Vercel dashboard
3. Update `NEXT_PUBLIC_VERCEL_ANALYTICS_ID`

## 🎨 Design System

### Colors
- **Primary**: Ice blue (`sky-400` to `blue-500`)
- **Secondary**: Red for MMG (`red-600`)
- **Background**: Black (`#000000`)
- **Text**: White with gray variations

### Typography
- **Primary**: Geist Sans (Google Fonts)
- **Fallback**: System fonts

### Animations
- **Entrance**: Fade-in from bottom with stagger effects
- **Hover**: Magnetic hover effects on buttons
- **Scroll**: Reveal animations triggered by viewport intersection

## 📱 Sections

1. **Hero**: Animated particles with aurora effects
2. **About**: Company stats and information
3. **Services**: IT & Networking, Micro Cool (NEW), MMG
4. **Micro Cool**: Prominent highlight section for new service
5. **MMG Ad**: Promotional banner with red accent
6. **Shop Teaser**: Link to baazaar.mv
7. **Contact**: Form with reCAPTCHA and Google Maps
8. **Footer**: Links and business information

## 🔧 Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type checking
npm run type-check
```

## 📞 Contact Information

- **Primary**: 7779493
- **Secondary**: 9996210
- **WhatsApp**: https://wa.me/9607779493
- **Email**: moto@micronet.mv

## 📍 Business Hours

- Monday - Thursday: 8:00 AM - 10:00 PM
- Saturday - Sunday: 8:00 AM - 10:00 PM
- Friday: Closed

## 🚢 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms
- Ensure Node.js 18+ support
- Set environment variables
- Run `npm run build` and serve the `.next` folder

## 📄 License

© 2025 MicroNET Maldives. All rights reserved.

Built with ❤️ for the Maldivian community 🇲🇻
