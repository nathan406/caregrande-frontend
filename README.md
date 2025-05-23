# CareGrande - Doctor Appointment Web App

CareGrande is a responsive frontend-only doctor appointment web application built with React, React Router, and Tailwind CSS.

## Features

- Browse doctors by category
- View doctor profiles and details
- Schedule appointments
- Responsive design for mobile and desktop

## Tech Stack

- React
- React Router for navigation
- Tailwind CSS for styling
- Vite for build tooling

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/caregrande.git
cd caregrande
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
# or
yarn build
```

This will create a `dist` folder with the production build.

## Deployment on Netlify

### Method 1: Netlify CLI

1. Install Netlify CLI
```bash
npm install -g netlify-cli
```

2. Build the project
```bash
npm run build
```

3. Deploy to Netlify
```bash
netlify deploy
```

4. Follow the prompts to complete the deployment

### Method 2: Netlify UI

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to Netlify
3. Click "New site from Git"
4. Select your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

## License

This project is licensed under the MIT License.
