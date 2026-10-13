# Employee Management System

A React + Vite employee task-management demo with separate admin and employee views. The app uses React Context for shared state and `localStorage` for demo persistence.

## Features
- Admin and employee demo login
- Assign tasks to employees
- Accept, complete, or mark tasks as failed
- Task counts derived from task statuses
- Task data persists across refreshes in the same browser
- Basic required-field validation

## Run locally
```bash
npm install
npm run dev
```

## Demo accounts
- Admin: `admin@gmail.com` / `123`
- Employee: `e@e.com` / `123`

This is a frontend demo. Credentials and data are stored in the browser and are not suitable for production authentication.

### Admin profile name
The admin can update the displayed name from the dashboard using **Edit name**. The new name is saved to `localStorage` and remains after refreshing the page. This is a frontend demo; it is not a substitute for server-side profile management in production.
