# 🚀 Afrikanium Backend & Admin Dashboard - Complete Setup Guide

This guide will walk you through setting up the complete backend REST API and admin dashboard for the Afrikanium website.

## 📋 System Requirements

- **Node.js**: 18.x or higher
- **npm**: 9.x or higher (or pnpm 8.x+)
- **PostgreSQL**: 12 or higher
- **Windows/Mac/Linux** with command line access

---

## Step 1: PostgreSQL Database Setup

### On Windows:

1. **Download PostgreSQL**
   - Visit https://www.postgresql.org/download/windows/
   - Download the latest version (15.x or 16.x recommended)
   - Run the installer

2. **During Installation**
   - Remember the password you set for the `postgres` user
   - Keep the default port (5432)
   - Let it install as a service

3. **Create Database**
   - Open pgAdmin (installed with PostgreSQL) or use command line
   - Create a new database named `afrikanium`

### Command Line Method:

```bash
# Open PostgreSQL command prompt
psql -U postgres

# Create database
CREATE DATABASE afrikanium;

# Verify
\l
```

---

## Step 2: Backend Setup

### 1. Navigate to Backend Directory

```bash
cd backend
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Create Environment File

```bash
# Copy the example file
cp .env.example .env
```

### 4. Configure .env File

Open `backend/.env` and update:

```ini
# Database Connection String
# Format: postgresql://username:password@host:port/database
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/afrikanium?schema=public"

# Server Port
PORT=5000

# Node Environment
NODE_ENV=development

# JWT Secret (change this to a random string)
JWT_SECRET=your_super_secret_jwt_key_change_in_production_12345

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000

# File Upload Configuration
UPLOAD_DIR=./uploads
MAX_FILE_SIZE=5242880

# Admin User (initial login)
ADMIN_EMAIL=admin@afrikanium.com
ADMIN_PASSWORD=admin@123
```

### 5. Setup Prisma & Database

```bash
# Generate Prisma Client
npm run prisma:generate

# Create/migrate database
npm run prisma:migrate

# You'll be prompted to name the migration - enter: "init"
```

This will:

- Create all database tables
- Set up relationships between models
- Generate Prisma client for database access

### 6. Create Admin User (Option A: Manual)

```bash
# Open Prisma Studio to manage data
npm run prisma:studio
```

Then:

1. Click on "Admin" table
2. Click "Add record"
3. Fill in:
   - email: `admin@afrikanium.com`
   - password: Hash with bcryptjs or use plain password for testing
   - name: `Admin`
   - role: `admin`

### 6. Create Admin User (Option B: Via API)

Start the backend first, then in another terminal:

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@afrikanium.com",
    "password": "admin@123",
    "name": "Admin User"
  }'
```

### 7. Start Backend Server

```bash
npm run dev
```

You should see:

```
🚀 Server is running on http://localhost:5000
```

---

## Step 3: Frontend Admin Dashboard Setup

### 1. In Root Project Directory

Make sure you have `.env.local` file with:

```bash
# Create .env.local in root directory
echo 'NEXT_PUBLIC_API_URL=http://localhost:5000/api' > .env.local
```

### 2. Install Frontend Dependencies (if not already done)

```bash
npm install
# or
pnpm install
```

### 3. Update Layout (if needed)

Make sure `app/layout.jsx` imports AuthProvider:

```jsx
"use client";
import { AuthProvider } from "@/context/AuthContext";
import "../public/assets/scss/styles.scss";
// ... other imports

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AuthProvider>
          {/* other components */}
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
```

### 4. Start Frontend Server

```bash
npm run dev
```

Frontend runs on: `http://localhost:3000`

---

## Step 4: Access Admin Dashboard

1. **Open Admin Login**
   - Navigate to: http://localhost:3000/admin/login
2. **Login with Credentials**
   - Email: `admin@afrikanium.com`
   - Password: `admin@123`

3. **Access Dashboard**
   - After successful login: http://localhost:3000/admin/dashboard

4. **Dashboard Features**
   - 📊 View statistics
   - 📝 Create/Edit/Delete blog posts
   - ⚙️ Manage services
   - 🎨 Manage projects
   - 👥 Manage team members
   - ⭐ Manage testimonials
   - 💰 Manage pricing
   - ❓ Manage FAQs
   - 💬 View contact messages

---

## 📚 Project Structure

```
afrikanium/
├── app/
│   ├── (admin)/
│   │   └── dashboard/           # Admin dashboard routes
│   │       ├── page.jsx         # Dashboard home
│   │       ├── layout.jsx       # Dashboard layout
│   │       ├── blogs/           # Blog management
│   │       ├── services/        # Service management
│   │       ├── projects/        # Project management
│   │       ├── team/            # Team management
│   │       ├── testimonials/    # Testimonial management
│   │       ├── pricing/         # Pricing management
│   │       ├── faqs/            # FAQ management
│   │       └── contact/         # Contact messages
│   ├── admin/
│   │   └── login/               # Admin login page
│   └── ...
├── backend/
│   ├── src/
│   │   ├── controllers/         # Business logic
│   │   │   ├── authController.js
│   │   │   ├── blogController.js
│   │   │   └── ...
│   │   ├── routes/              # API routes
│   │   │   ├── auth.js
│   │   │   ├── blogs.js
│   │   │   └── ...
│   │   ├── middleware/
│   │   │   └── auth.js          # JWT authentication
│   │   ├── utils/
│   │   │   ├── jwt.js           # JWT utilities
│   │   │   ├── errors.js        # Error handling
│   │   │   └── prisma.js        # Prisma client
│   │   └── index.js             # Server entry point
│   ├── prisma/
│   │   └── schema.prisma        # Database schema
│   ├── .env.example
│   ├── package.json
│   └── README.md
├── context/
│   ├── LocaleContext.jsx
│   └── AuthContext.jsx          # Authentication context
├── lib/
│   └── api.js                   # API client utilities
└── ...
```

---

## 🔗 API Endpoints Reference

### Authentication

```
POST   /api/auth/register     - Register new admin
POST   /api/auth/login        - Login admin
GET    /api/auth/profile      - Get admin profile (requires auth)
```

### Blogs

```
GET    /api/blogs             - Get all blogs
GET    /api/blogs/:id         - Get single blog
POST   /api/blogs             - Create blog (admin)
PUT    /api/blogs/:id         - Update blog (admin)
DELETE /api/blogs/:id         - Delete blog (admin)
POST   /api/blogs/:id/view    - Increment views
```

### Services

```
GET    /api/services          - Get all services
POST   /api/services          - Create service (admin)
PUT    /api/services/:id      - Update service (admin)
DELETE /api/services/:id      - Delete service (admin)
```

### Projects

```
GET    /api/projects          - Get all projects
POST   /api/projects          - Create project (admin)
PUT    /api/projects/:id      - Update project (admin)
DELETE /api/projects/:id      - Delete project (admin)
```

### Team

```
GET    /api/manage/team       - Get team members
POST   /api/manage/team       - Create member (admin)
PUT    /api/manage/team/:id   - Update member (admin)
DELETE /api/manage/team/:id   - Delete member (admin)
```

### Contact Messages

```
GET    /api/manage/contact    - Get messages (admin)
GET    /api/manage/contact/:id - Get single message (admin)
POST   /api/manage/contact    - Submit contact form (public)
PUT    /api/manage/contact/:id/read - Mark as read (admin)
DELETE /api/manage/contact/:id - Delete message (admin)
```

---

## 🔐 Authentication

The system uses JWT (JSON Web Tokens) for authentication:

1. **Login** → Receive JWT token
2. **Store** → Token saved in localStorage
3. **Send** → Token sent in `Authorization: Bearer <token>` header
4. **Validate** → Backend verifies token on protected routes

Token expires in **7 days** by default.

---

## 📊 Database Models

### Admin

- id, email (unique), password (hashed), name, role, timestamps

### Blog

- id, title, slug (unique), content, excerpt, featuredImage, author, category, tags, views, published, timestamps

### Comment

- id, name, email, content, approved, blog (FK), timestamps

### Service

- id, title, slug, description, icon, image, features[], order, published, timestamps

### Project

- id, title, slug, description, shortDesc, image, category, technologies[], link, published, timestamps

### TeamMember

- id, name, position, image, bio, email, phone, socials (JSON), order, timestamps

### Testimonial

- id, name, company, title, image, content, rating, order, timestamps

### PricingPlan

- id, name, price, description, features[], highlighted, order, timestamps

### FAQ

- id, question, answer, category, order, timestamps

### ContactMessage

- id, name, email, phone, subject, message, read, timestamps

---

## 🛠️ Common Tasks

### Add a New Blog Post

1. Go to `/admin/dashboard/blogs`
2. Click "Add New Blog"
3. Fill in form details
4. Click "Save Blog"

### Edit a Blog Post

1. Go to `/admin/dashboard/blogs`
2. Find the blog and click "Edit"
3. Update content
4. Click "Save Blog"

### Delete a Blog Post

1. Go to `/admin/dashboard/blogs`
2. Click "Delete" next to the post
3. Confirm deletion

### View Contact Messages

1. Go to `/admin/dashboard/contact`
2. Messages appear in a table
3. Click "View" to read full message
4. Mark as read or delete

### Manage Team Members

1. Go to `/admin/dashboard/team`
2. Create, edit, or delete team members
3. Set display order

---

## 🐛 Troubleshooting

### Backend Won't Start - "Cannot connect to database"

**Solution:**

```bash
# Check PostgreSQL is running
# Windows: Check Services (services.msc) for PostgreSQL
# Mac: brew services list
# Linux: sudo systemctl status postgresql

# Verify connection string in .env
# Format should be:
# postgresql://postgres:password@localhost:5432/afrikanium?schema=public

# Test connection:
psql -U postgres -h localhost -d afrikanium
```

### Migrations Fail

```bash
# Reset database (WARNING: deletes all data)
npm run prisma:migrate reset

# Or manually:
psql -U postgres
DROP DATABASE afrikanium;
CREATE DATABASE afrikanium;
# Then run migrations again
```

### Frontend Can't Connect to API

```bash
# Check .env.local in root:
cat .env.local
# Should contain: NEXT_PUBLIC_API_URL=http://localhost:5000/api

# Check backend is running on port 5000
# Check CORS error in browser console

# In backend/src/index.js, verify CORS config:
cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
})
```

### Login Page Not Working

1. Check backend is running: http://localhost:5000/health
2. Check admin user exists in database via Prisma Studio
3. Verify `.env.local` has correct API URL
4. Check browser console for errors

### "Invalid token" on Dashboard

1. Clear localStorage: Open DevTools → Application → Storage → localStorage → Delete token
2. Login again
3. If still fails, check JWT_SECRET in backend .env matches

---

## 🚀 Deployment

### Deploy Backend (Render, Heroku, Vercel, etc.)

1. Push code to GitHub
2. Create account on hosting platform
3. Set environment variables:
   - `DATABASE_URL` (use production database)
   - `JWT_SECRET` (strong random string)
   - `FRONTEND_URL` (your deployed frontend URL)
   - `PORT` (usually auto-assigned)
4. Deploy

### Deploy Frontend (Vercel)

1. Push code to GitHub
2. Connect to Vercel
3. Set environment variable:
   - `NEXT_PUBLIC_API_URL` (your deployed backend URL)
4. Deploy

---

## 📝 Next Steps

1. ✅ Set up backend and admin dashboard
2. 📝 Create initial blog posts
3. 👥 Add team members
4. ⚙️ Configure services and pricing
5. 🎨 Add portfolio projects
6. 🌐 Deploy to production

---

## 📞 Support

For issues:

1. Check the troubleshooting section above
2. Review error messages in terminal/console
3. Check backend logs: `npm run dev`
4. Review Prisma Studio: `npm run prisma:studio`

---

## 🎉 You're All Set!

Your Afrikanium website now has:

- ✅ Full REST API backend
- ✅ Admin dashboard for content management
- ✅ PostgreSQL database
- ✅ JWT authentication
- ✅ CRUD operations for all content types

Start managing your content today!

🔗 **Admin Dashboard**: http://localhost:3000/admin/login
