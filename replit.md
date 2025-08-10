# Agency Website Template

## Overview

This is a modern React-based agency website template built with a full-stack architecture. The project features a clean, responsive design showcasing agency services, portfolio, and company information. It's built with TypeScript, uses Vite for development, and includes a complete component library based on shadcn/ui. The backend is prepared for REST API development with Express.js and includes database integration capabilities through Drizzle ORM.

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