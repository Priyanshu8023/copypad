# CopyPad

# 🚀 Overview
CopyPad is a fast, minimalistic, and real-time pastepad application built to seamlessly create, share, and collaborate on text snippets. By solving the problem of bloated and overly complex text-sharing tools, CopyPad provides a clean interface where users can instantly generate a unique URL for their text and share it with others. Whether it's code snippets, quick notes, or collaborative scratchpads, CopyPad makes text sharing effortless.

# 🧠 Features
- **Instant Pad Creation**: Generate a new text pad with a unique identifier instantly.
- **Real-Time Data Access**: View and edit pad content seamlessly.
- **Persistent Storage**: All pads are securely saved with timestamped creation and update tracking.
- **Modern Minimalist UI**: Clean and intuitive user interface optimized for readability.
- **Fast Performance**: Next.js App Router for optimal Server-Side Rendering (SSR) and Edge API performance.
- **Database Safety**: Built with Prisma ORM seamlessly executing operations over PostgreSQL.

# 🛠️ Tech Stack
- **Frontend:** Next.js 15 (App Router), React 19, Tailwind CSS v4
- **Backend:** Next.js Serverless API Routes
- **Database:** PostgreSQL
- **ORM:** Prisma Client with `@prisma/adapter-pg`
- **Language:** TypeScript
- **Tooling:** ESLint, PostCSS

# 📂 Project Structure
- `app/`: Next.js App Router root directory containing pages, layouts, and API routes.
  - `api/pad/`: Backend serverless API endpoints for pad CRUD operations.
  - `pad/[id]/`: Dynamic route for viewing and editing a specific text pad.
- `components/`: Reusable React components (UI elements, buttons, inputs).
- `hook/`: Custom React hooks for encapsulating client-side logic and state management.
- `lib/`: Utility functions and shared library code.
- `prisma/`: Database schema definitions (`schema.prisma`) and migration files.
- `public/`: Static assets like favicons and images.

# 🔐 Environment Variables
Create a `.env` file in the root directory and configure the following required variables:

- `DATABASE_URL`: Your PostgreSQL connection string (e.g., `postgresql://user:password@localhost:5432/copypad_db`)

# 🧩 System Architecture
The application follows a modern full-stack serverless architecture powered by Next.js.
1. **Client Layer:** User requests are handled by React components styled with Tailwind CSS. Pages are statically or dynamically rendered using the Next.js App Router.
2. **API Layer:** The client communicates with Next.js API routes (`/api/pad`) to create or retrieve text pads.
3. **Data Access Layer:** API routes utilize the Prisma Client to securely run typed queries against the database.
4. **Storage Layer:** A PostgreSQL database serves as the persistent storage tracking the `Pad` ID, its `content`, and associated timestamps (`created_at`, `updated_at`).

# 🖼️ Architecture Diagram

```mermaid
flowchart TD
    subgraph Client_Tier [👩‍💻 Client Tier]
        Browser["🌐 User Browser"]
    end

    subgraph App_Tier [⚡ Next.js Application Tier]
        UI["⚛️ React Components (UI)"]
        API["📡 Next.js API Routes"]
    end

    subgraph Data_Tier [💾 Data Tier]
        ORM{"🛡️ Prisma ORM"}
        DB[("🐘 PostgreSQL")]
    end

    %% Data Flow
    Browser <==>|User Interaction / Page Load| UI
    Browser <==>|REST API / JSON| API
    API <==>|Execute Queries| ORM
    UI -.->|Optional Server Fetch| ORM
    ORM <==>|TCP Connection| DB

    %% Styling
    classDef client fill:#f3f4f6,stroke:#374151,stroke-width:2px,color:#111827;
    classDef app fill:#eff6ff,stroke:#2563eb,stroke-width:2px,color:#111827;
    classDef data fill:#f0fdf4,stroke:#16a34a,stroke-width:2px,color:#111827;

    class Browser client;
    class UI,API app;
    class ORM,DB data;
```

# 📡 API Endpoints 
- **`GET /api/pad/[id]`**
  - Retrieves the content and metadata of a specific pad by its unique `id`.
- **`POST /api/pad`**
  - Creates a new text pad and returns the generated `id` along with its initial data.
- **`PUT /api/pad/[id]`**
  - Updates the `content` of an existing pad and modifies the `updated_at` timestamp.

# ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <your-github-repo-url>
   cd copypad
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Duplicate the `.env.example` file and rename it to `.env`:
   ```bash
   cp .env.example .env
   ```
   Fill in your actual database credentials.

4. **Run Database Migrations:**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Start the Development Server:**
   ```bash
   npm run dev
   ```

6. **Open in Browser:**
   Navigate to `http://localhost:3000` to see the application running.
