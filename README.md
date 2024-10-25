Here's the complete frontend README in markdown format:

---

### Frontend README (`frontend/README.md`)

```markdown
# Code Review Bot - Frontend

This is the frontend for the Code Review Bot, a web-based interface where users can view code reviews for their GitHub repositories in real-time. The frontend interacts with the backend APIs to display commit analysis, reviews, and ratings based on code quality.

## Tech Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Authentication**: GitHub OAuth
- **Data Handling**: Axios for API calls
- **Component Library**: Custom components, Shadcn UI for CLI utility

## Setup Instructions

### Prerequisites

- **Node.js** (v16 or higher)
- **GitHub OAuth App** (for GitHub login)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/code-review-bot.git
   cd code-review-bot/frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env.local` file in the root of the `frontend` directory with the following:

     ```plaintext
     NEXT_PUBLIC_API_URL=http://localhost:3000/api    # Backend URL
     NEXT_PUBLIC_GITHUB_CLIENT_ID=your_github_client_id
     NEXT_PUBLIC_GITHUB_REDIRECT_URI=http://localhost:3000/auth/callback
     ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open `http://localhost:3000` in your browser.

### Available Scripts

- **`npm run dev`**: Start development server
- **`npm run build`**: Build for production
- **`npm run start`**: Start the production server
- **`npm run lint`**: Lint the codebase

### Folder Structure

```
/frontend
├── components        # Reusable UI components
├── pages             # Next.js pages
├── public            # Static assets
├── styles            # Global and component-specific styles
└── utils             # Utility functions
```

## Usage

1. **Login**: Users can log in with GitHub to connect their repositories.
2. **Webhook Integration**: Set up a webhook from GitHub to trigger reviews on code commits.
3. **View Reviews**: Users can see commit reviews, ratings, and recommendations.

## Contributing

Feel free to contribute by submitting issues or pull requests. Make sure to follow the coding style and best practices.

## License

This project is licensed under the MIT License.
```

---

### Backend README (`backend/README.md`)

```markdown
# Code Review Bot - Backend

The backend for the Code Review Bot provides APIs to analyze GitHub commits and generate code reviews in real-time. It uses webhooks to receive commit data and a review service to evaluate and rate the code.

## Tech Stack

- **Framework**: FastAPI
- **Database**: Supabase (PostgreSQL)
- **Authentication**: GitHub OAuth
- **AI Model**: OpenAI's GPT-4 API
- **Migration Tool**: Alembic

## Setup Instructions

### Prerequisites

- **Python** (v3.8+)
- **Supabase** account
- **GitHub OAuth App** (for GitHub authentication)
- **OpenAI API Key** (for GPT-4 model)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/code-review-bot.git
   cd code-review-bot/backend
   ```

2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Set up environment variables:
   - Create a `.env` file in the root of the `backend` directory with the following:

     ```plaintext
     DATABASE_URL=postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}
     GITHUB_CLIENT_ID=your_github_client_id
     GITHUB_CLIENT_SECRET=your_github_client_secret
     OPENAI_API_KEY=your_openai_api_key
     ```

4. Set up the database with Alembic:

   ```bash
   alembic upgrade head
   ```

5. Run the FastAPI server:

   ```bash
   uvicorn api.index:app --host 0.0.0.0 --port 8000
   ```

6. Open `http://localhost:8000/docs` to access the FastAPI Swagger documentation.

### Folder Structure

```
/backend
├── alembic                   # Alembic migrations folder
├── api                       # API routes and serverless function handler
│   └── index.py              # Entry point for Vercel serverless deployment
├── models.py                 # SQLAlchemy database models
├── services                  # Core services (e.g., GitHub, webhook, review)
└── db.py                     # Database connection setup
```

### API Endpoints

| Method | Endpoint                     | Description                  |
|--------|-------------------------------|------------------------------|
| POST   | `/webhook`                    | Receive GitHub webhook events |
| GET    | `/reviews/{commit_id}`        | Get reviews for a specific commit |
| POST   | `/auth/login`                 | GitHub login endpoint         |

### Database Migrations

1. **Create a new migration**:

   ```bash
   alembic revision --autogenerate -m "Description of migration"
   ```

2. **Apply migrations**:

   ```bash
   alembic upgrade head
   ```

### Usage

- **Webhook**: Set up the webhook on GitHub to point to `/webhook` endpoint.
- **Commit Analysis**: The bot automatically generates reviews based on new commits.

### Deployment

1. Deploy the backend as a serverless function on Vercel.
2. Set environment variables on Vercel for database URL, GitHub credentials, and OpenAI API key.

## License

This project is licensed under the MIT License.
```

--- 

These markdown files should provide clear instructions and structure for both frontend and backend development and deployment.