# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

- **Start development server**: `npm run dev` (runs on http://localhost:3000)
- **Build production**: `npm run build`
- **Start production server**: `npm start`
- **Lint code**: `npm run lint`

## Project Architecture

### Framework & Stack
- **Next.js 15.4.4** with App Router (TypeScript)
- **React 19.1.0** with React DOM
- **Tailwind CSS 4** for styling
- **Supabase** for authentication and database
- **TypeScript** with strict mode enabled

### Key Configuration
- **Path aliases**: `@/*` maps to `src/*` (configured in tsconfig.json:5)
- **Server Actions**: Enabled in next.config.ts:4-6
- **Middleware**: Supabase auth middleware in middleware.ts handles session management
- **ESLint**: Uses Next.js core web vitals and TypeScript rules

### Application Structure

#### Main Application (`src/app/`)
- **Layout**: Root layout with Geist fonts and metadata
- **Home page**: Composed of modular components (Hero, About, Services, Promo, Footer)
- **Routes**: 
  - `/admin` - Admin functionality
  - `/login` - Authentication page  
  - `/mmg` - Micro Moto Garage section
  - `/track` - Tracking functionality

#### Components (`src/components/`)
Reusable UI components for the main landing page sections.

#### Navigation
- **MicroMotoNavbar.tsx**: Main navigation component with links to core sections
- Brand links to home, includes MMG, Tracking, and Login sections

#### Authentication & Database (`src/lib/`)
- **supabaseClient.ts**: Browser client configuration
- **superbase.ts**: Additional Supabase utilities
- Uses Supabase URL: `https://yaftkkqfgwuudvrnvrda.supabase.co`

### Business Context
This appears to be a website for "Micronet" which includes:
- **Micro Moto Garage**: Automotive service business
- **Online shop**: External link to shop.micronet.mv
- **Tracking system**: Internal tracking functionality
- **Admin panel**: Administrative interface

### Development Notes
- All components use Tailwind for styling with consistent color scheme (black/gray/red)
- TypeScript strict mode is enabled
- Components follow functional component pattern with modern React patterns