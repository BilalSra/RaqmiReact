# Raqmi Agency Landing Page

## Overview

This is a modern React-based landing page for Raqmi, a MENA-focused growth marketing agency. The project features a clean, responsive design showcasing Raqmi's data-driven growth strategies, client success stories, and innovative solutions. Built with TypeScript and Vite, the landing page includes authentic content sourced from raqmi.io and maintains the original template's design aesthetics with cropped corners and dot patterns. The backend is prepared for REST API development with Express.js and includes database integration capabilities through Drizzle ORM.

## Recent Changes

- **January 2025**: Updated all landing page content with authentic data from raqmi.io
- **Content Sections Updated**: Hero, About, Services, Portfolio, Footer, and Navigation now reflect Raqmi's actual business offerings
- **Added Insights Section**: New blog/insights section showcasing Raqmi's thought leadership content
- **Brand Integration**: Updated logos, company names, and color schemes to match Raqmi branding
- **Client Portfolio**: Replaced generic portfolio items with real Raqmi client success stories (HTUx, Lisan, ExecuteX)
- **Services Alignment**: Updated service offerings to match Raqmi's actual solutions (Growth Strategies, ROI-Focused Marketing, GSO, etc.)

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with custom design system and CSS variables
- **Component Library**: shadcn/ui providing a comprehensive set of accessible UI components
- **Form Handling**: React Hook Form with validation capabilities

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript throughout the entire stack
- **API Pattern**: RESTful API design with /api prefix routing
- **Middleware**: Custom logging middleware for request/response tracking
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Development**: Hot reload support with Vite integration in development mode

### Data Storage Solutions
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon Database serverless configuration
- **Schema**: Centralized schema definition in shared directory
- **Migrations**: Drizzle Kit for database schema migrations
- **In-Memory Storage**: Fallback memory storage implementation for development

### Authentication and Authorization
- **Session Management**: Ready for implementation with connect-pg-simple for PostgreSQL session store
- **User Schema**: Basic user model with username/password fields
- **Security**: Prepared for secure session handling and user authentication

### External Dependencies
- **Database Provider**: Neon Database (@neondatabase/serverless) for serverless PostgreSQL
- **UI Components**: Radix UI primitives for accessible component foundations
- **Icons**: Font Awesome and Lucide React for comprehensive icon sets
- **Fonts**: Google Fonts (Inter) for modern typography
- **Development Tools**: Replit integration for cloud development environment
- **Styling Utilities**: clsx and tailwind-merge for conditional styling
- **Date Handling**: date-fns for date manipulation and formatting
- **Carousel**: Embla Carousel for image/content carousels
- **Validation**: Zod for runtime type validation and schema validation

The architecture follows a monorepo structure with shared types and schemas, enabling type safety across the full stack. The frontend is component-driven with a focus on reusability and accessibility, while the backend provides a clean API foundation ready for expansion.