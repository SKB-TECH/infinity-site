# Afrikanium Backend & Admin Dashboard

Complete REST API and admin dashboard management system for the Afrikanium website.

## 🚀 Features

- **REST API** for all website content
- **Admin Dashboard** with full CRUD operations
- **Authentication** with JWT tokens
- **Database** with PostgreSQL and Prisma ORM
- **Content Management** for:
  - Blog posts with comments
  - Services
  - Projects
  - Team members
  - Testimonials
  - Pricing plans
  - FAQs
  - Contact messages

## 📋 Prerequisites

- Node.js 18+ and npm/pnpm
- PostgreSQL 12+
- Git

## 🔧 Backend Setup

### 1. Install Dependencies

```bash
cd backend
npm install
# or
pnpm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and update values:

```bash
cp .env.example .env
```

Edit `.env`:

```
DATABASE_URL="postgresql://user:password@localhost:5432/afrikanium?schema=public"
PORT=5000
JWT_SECRET=your_secure_jwt_secret_here
FRONTEND_URL=http://localhost:3000
```

### 3. Setup PostgreSQL Database

```bash
# Create database
createdb afrikanium

# Or using psql:
psql -U postgres
CREATE DATABASE afrikanium;
```

### 4. Run Prisma Migrations

```bash
# Generate Prisma Client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# Open Prisma Studio to view/manage data
npm run prisma:studio
```

### 5. Create Admin User

You can either:

- Use Prisma Studio to manually create an admin user
- Call the registration endpoint: `POST /api/auth/register`

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@afrikanium.com",
    "password": "securepassword123",
    "name": "Admin User"
  }'
```

### 6. Start Backend Server

```bash
npm run dev
```

Server will run on `http://localhost:5000`

## 📱 Frontend Admin Dashboard Setup

### 1. Install Dependencies (Root Frontend)

The dashboard is already part of the Next.js frontend. Make sure you have the required dependencies:

```bash
npm install
# or
pnpm install
```

### 2. Configure API URL

Create or update `.env.local` in the frontend root:

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### 3. Wrap App with AuthProvider

The main `layout.jsx` should already import `AuthProvider`. If not, add:

```jsx
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
```

### 4. Access Admin Dashboard

1. Start frontend: `npm run dev`
2. Visit: `http://localhost:3000/admin/login`
3. Login with admin credentials
4. Access dashboard: `http://localhost:3000/admin/dashboard`

## 📚 API Endpoints

### Authentication

- `POST /api/auth/register` - Register new admin
- `POST /api/auth/login` - Login admin
- `GET /api/auth/profile` - Get admin profile (requires token)

### Blogs

- `GET /api/blogs` - Get all blogs (public)
- `GET /api/blogs/:id` - Get single blog
- `POST /api/blogs` - Create blog (admin)
- `PUT /api/blogs/:id` - Update blog (admin)
- `DELETE /api/blogs/:id` - Delete blog (admin)
- `POST /api/blogs/:id/view` - Increment view count

### Services

- `GET /api/services` - Get all services
- `POST /api/services` - Create service (admin)
- `PUT /api/services/:id` - Update service (admin)
- `DELETE /api/services/:id` - Delete service (admin)

### Projects

- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create project (admin)
- `PUT /api/projects/:id` - Update project (admin)
- `DELETE /api/projects/:id` - Delete project (admin)

### Team, Testimonials, Pricing, FAQs

- Similar CRUD endpoints under `/api/manage/`

### Contact Messages

- `GET /api/manage/contact` - Get all messages (admin)
- `POST /api/manage/contact` - Submit contact form (public)
- `PUT /api/manage/contact/:id/read` - Mark as read (admin)
- `DELETE /api/manage/contact/:id` - Delete message (admin)

## 🔐 Authentication Flow

1. Admin logs in via `/admin/login`
2. Backend validates credentials and returns JWT token
3. Token is stored in localStorage
4. Token is sent in Authorization header for protected routes
5. Backend verifies token before allowing access

## 📊 Database Schema

See `backend/prisma/schema.prisma` for complete schema definition.

Main models:

- **Admin** - Admin users
- **Blog** - Blog posts
- **Comment** - Blog comments
- **Service** - Services offered
- **Project** - Portfolio projects
- **TeamMember** - Team profiles
- **Testimonial** - Client testimonials
- **PricingPlan** - Pricing options
- **FAQ** - Frequently asked questions
- **ContactMessage** - Contact form submissions
- **Settings** - Global settings

## 🛠️ Development

### File Structure

```
backend/
├── src/
│   ├── controllers/     # Business logic
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   ├── utils/           # Helper functions
│   └── index.js         # Server entry point
├── prisma/
│   └── schema.prisma    # Database schema
└── package.json
```

### Running in Development

```bash
npm run dev
```

The server watches for file changes and automatically restarts.

## 📦 Deployment

### Backend (Vercel, Render, etc.)

1. Set environment variables on hosting platform
2. Ensure database is accessible
3. Deploy using platform's deployment method

### Frontend

Standard Next.js deployment on Vercel:

```bash
vercel
```

## 🐛 Troubleshooting

### Database Connection Error

```bash
# Check PostgreSQL is running
psql -U postgres

# Verify DATABASE_URL in .env
# Format: postgresql://user:password@host:port/dbname?schema=public
```

### Migration Issues

```bash
# Reset database (⚠️ WARNING: Deletes all data)
npx prisma migrate reset

# Or manually drop and recreate
psql -U postgres -c "DROP DATABASE afrikanium;"
psql -U postgres -c "CREATE DATABASE afrikanium;"
```

### Frontend Can't Connect to API

1. Check backend is running on correct port
2. Verify `NEXT_PUBLIC_API_URL` in `.env.local`
3. Check CORS is enabled in backend
4. Check browser console for network errors

## 📝 License

All rights reserved © Afrikanium

## 🤝 Support

For issues or questions, contact the development team.
