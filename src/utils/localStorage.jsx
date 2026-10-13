const employees = [
{
id: 1,
name: "Aarav",
email: "e@e.com",
password: "123",
taskCounts: {
active: 1,
newTask: 1,
completed: 1,
failed: 1
},
tasks: [
{
active: true,
newTask: false,
completed: false,
failed: false,
taskTitle: "Build Login Page",
description: "Create a responsive login page using React and Tailwind.",
category: "Frontend",
date: "2026-06-18"
},
{
active: false,
newTask: true,
completed: false,
failed: false,
taskTitle: "Add Notifications",
description: "Implement notification system.",
category: "Backend",
date: "2026-06-24"
},
{
active: false,
newTask: false,
completed: true,
failed: false,
taskTitle: "Fix Navbar",
description: "Resolve navbar alignment issues.",
category: "Frontend",
date: "2026-05-30"
},
{
active: false,
newTask: false,
completed: false,
failed: true,
taskTitle: "API Integration",
description: "Connect frontend with backend APIs.",
category: "Backend",
date: "2026-06-07"
}
]
},

{
id: 2,
name: "Vihaan",
email: "employee2@gmail.com",
password: "123",
taskCounts: {
active: 1,
newTask: 1,
completed: 2,
failed: 0
},
tasks: [
{
active: true,
newTask: false,
completed: false,
failed: false,
taskTitle: "Database Schema",
description: "Design database tables.",
category: "Database",
date: "2026-06-21"
},
{
active: false,
newTask: true,
completed: false,
failed: false,
taskTitle: "User Roles",
description: "Implement user role management.",
category: "Backend",
date: "2026-06-09"
},
{
active: false,
newTask: false,
completed: true,
failed: false,
taskTitle: "Landing Page",
description: "Complete landing page design.",
category: "Frontend",
date: "2026-05-27"
},
{
active: false,
newTask: false,
completed: true,
failed: false,
taskTitle: "Setup MySQL",
description: "Configure MySQL database.",
category: "Database",
date: "2026-06-14"
}
]
},

{
id: 3,
name: "Arjun",
email: "employee3@gmail.com",
password: "123",
taskCounts: {
active: 2,
newTask: 1,
completed: 1,
failed: 1
},
tasks: [
{
active: true,
newTask: false,
completed: false,
failed: false,
taskTitle: "Create Reports",
description: "Generate monthly reports.",
category: "Analytics",
date: "2026-06-03"
},
{
active: true,
newTask: false,
completed: false,
failed: false,
taskTitle: "Build Charts",
description: "Create dashboard charts.",
category: "Analytics",
date: "2026-06-17"
},
{
active: false,
newTask: true,
completed: false,
failed: false,
taskTitle: "Test Authentication",
description: "Perform authentication testing.",
category: "QA",
date: "2026-06-25"
},
{
active: false,
newTask: false,
completed: true,
failed: false,
taskTitle: "Setup Git",
description: "Configure Git repository.",
category: "DevOps",
date: "2026-05-29"
},
{
active: false,
newTask: false,
completed: false,
failed: true,
taskTitle: "Performance Audit",
description: "Optimize slow pages.",
category: "Frontend",
date: "2026-06-11"
}
]
},
{
id: 4,
name: "Kabir",
email: "employee4@gmail.com",
password: "123",
taskCounts: {
active: 1,
newTask: 1,
completed: 1,
failed: 1
},
tasks: [
{
active: true,
newTask: false,
completed: false,
failed: false,
taskTitle: "Optimize Queries",
description: "Improve SQL performance.",
category: "Database",
date: "2026-06-20"
},
{
active: false,
newTask: true,
completed: false,
failed: false,
taskTitle: "Write API Docs",
description: "Prepare API documentation.",
category: "Documentation",
date: "2026-06-08"
},
{
active: false,
newTask: false,
completed: true,
failed: false,
taskTitle: "Database Cleanup",
description: "Remove duplicate records.",
category: "Database",
date: "2026-05-31"
},
{
active: false,
newTask: false,
completed: false,
failed: true,
taskTitle: "Security Audit",
description: "Fix security vulnerabilities.",
category: "Security",
date: "2026-06-14"
}
]
},
{
id: 5,
name: "Ishaan",
email: "employee5@gmail.com",
password: "123",
taskCounts: {
active: 2,
newTask: 1,
completed: 2,
failed: 0
},
tasks: [
{
active: true,
newTask: false,
completed: false,
failed: false,
taskTitle: "Build Profile Page",
description: "Create employee profile page.",
category: "Frontend",
date: "2026-06-22"
},
{
active: true,
newTask: false,
completed: false,
failed: false,
taskTitle: "Theme Toggle",
description: "Implement dark mode.",
category: "Frontend",
date: "2026-06-10"
},
{
active: false,
newTask: true,
completed: false,
failed: false,
taskTitle: "Chat Feature",
description: "Research chat implementation.",
category: "Backend",
date: "2026-06-26"
},
{
active: false,
newTask: false,
completed: true,
failed: false,
taskTitle: "Responsive Layout",
description: "Improve responsiveness.",
category: "Frontend",
date: "2026-05-28"
},
{
active: false,
newTask: false,
completed: true,
failed: false,
taskTitle: "Testing",
description: "Test all pages.",
category: "QA",
date: "2026-06-16"
}
]
}
];

const admin= [{
  "id": 101,
  "email": "admin@gmail.com",
  "password": "123",
  "name": "Ishaan"
}]

export const setLocalStorage = () => {
  // Seed demo data only on first launch; never overwrite a user's saved changes.
  if (localStorage.getItem('employees') === null) {
    localStorage.setItem('employees', JSON.stringify(employees))
  }
  if (localStorage.getItem('admin') === null) {
    localStorage.setItem('admin', JSON.stringify(admin))
  }
}

export const getLocalStorage = () => {
  try {
    const savedEmployees = JSON.parse(localStorage.getItem('employees') || '[]')
    const savedAdmin = JSON.parse(localStorage.getItem('admin') || '[]')
    return {
      employees: Array.isArray(savedEmployees) ? savedEmployees : [],
      admin: Array.isArray(savedAdmin) ? savedAdmin : [],
    }
  } catch {
    return { employees: [], admin: [] }
  }
}