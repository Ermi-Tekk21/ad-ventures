# Ad Ventures

Ad Ventures is an innovative advertising platform that utilizes GPS-based targeting for effective advertising campaigns on taxis and billboards. Built with a powerful tech stack, the platform allows administrators, drivers, and advertisers to manage and engage with advertising content dynamically.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Contributing](#contributing)
- [License](#license)

## Overview
Ad Ventures enables targeted advertising by leveraging location data from GPS-enabled devices, providing advertisers with precision-targeted campaigns for maximum reach and engagement. With role-specific functionalities, the platform allows drivers to activate ads, administrators to manage content, and advertisers to deploy ads directly.

## Features
- **GPS-Based Advertising**: Advertisements can be displayed based on specific geographical locations.
- **Role-Based Access Control**: Separate functionalities for `admin`, `driver`, and `advertiser` roles.
- **Interactive Dashboard**: Real-time insights for administrators on ad performance.
- **Authentication**: Secure login and registration for drivers and advertisers.
- **Ad Management**: Tools for uploading, updating, and targeting ads.
  
## Tech Stack
- **Frontend**: [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), [Zustand](https://zustand.pmnd.rs/) for state management, [Tailwind CSS](https://tailwindcss.com/) for styling.
- **Deployment**: Hosted on [Vercel](https://vercel.com/) (frontend) and [Render](https://render.com/) (backend).

## Installation
To run the project locally, clone this repository and install dependencies:

```bash
git clone https://github.com/yourusername/ad-ventures.git
cd ad-ventures
npm install
```

```

## Usage

### Run the Development Server
To start the development server:

```bash
npm run dev
```

The frontend will be served at `http://localhost:3000` by default, and the backend at `http://localhost:8000`.

### Run Tests
To run tests for the project:

```bash
npm run test
```

```

## Routes
The application uses both public and protected routes. Here’s a breakdown:

### Public Routes
- **/auth/drivers/login** - Login page for drivers
- **/auth/drivers/signin** - Sign-up page for drivers
- **/auth/book-ad/login** - Login page for advertisers
- **/auth/book-ad/signin** - Sign-up page for advertisers

### Protected Routes
Accessible only to authenticated users:
- **/admin** - Admin dashboard
- **/driver** - Driver’s dashboard
- **/advertise** - Advertiser’s dashboard

## Contributing
We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push the branch: `git push origin feature-name`
5. Open a Pull Request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
