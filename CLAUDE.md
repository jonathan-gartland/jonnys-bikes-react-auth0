# Project Documentation: Jonny's Bikes React Auth0

## Project Overview

This is a React Single Page Application (SPA) that implements user authentication using Auth0. The project uses:
- React 18.2.0
- React Router 6.3.0
- Auth0 React SDK (@auth0/auth0-react)
- Create React App (via react-scripts)
- ECharts for data visualization
- Vercel for deployment

## Critical Build Issue Identified

**Primary Issue**: The `package.json` file had `react-scripts` set to `^0.0.0`, which is invalid. According to the NOTICE file, it should be version `5.0.1`. This was causing the Vercel build to fail because:
1. Version 0.0.0 doesn't exist in npm
2. The build script `react-scripts build` cannot execute without a valid react-scripts package

**Status**: ✅ Fixed - Updated to `react-scripts: ^5.0.1`

## Project Structure

```
/
├── public/
│   ├── index.html          # Main HTML entry point
│   └── [image assets]      # Various bike images and logos
├── src/
│   ├── index.js            # React app entry point
│   ├── app.js              # Main App component with routes
│   ├── auth0-provider-with-navigate.js  # Auth0 provider wrapper
│   ├── components/         # React components
│   │   ├── buttons/        # Login, logout, signup buttons
│   │   ├── navigation/     # Desktop and mobile nav components
│   │   └── [other components]
│   ├── pages/              # Page components
│   │   ├── home-page.js
│   │   ├── protected-page.js
│   │   ├── admin-page.js
│   │   ├── callback-page.js
│   │   └── not-found-page.js
│   ├── services/           # API services
│   ├── data/               # Static data (bikes.js)
│   └── styles/             # CSS files
├── package.json
├── vercel.json             # Vercel configuration for SPA routing
├── .vercelignore
└── README.md
```

## Dependencies

### Production Dependencies
- `@auth0/auth0-react`: ^1.12.0
- `axios`: ^1.13.2
- `echarts`: ^5.6.0
- `echarts-for-react`: ^3.0.2
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-router-dom`: ^6.3.0
- `react-scripts`: ^5.0.1 ✅

### Dev Dependencies
- `cross-env`: ^7.0.3
- `eslint-config-prettier`: ^8.5.0
- `eslint-plugin-prettier`: ^4.1.0
- `prettier`: ^2.8.8
- `vercel`: ^25.2.0

## Environment Variables Required

The application requires the following environment variables (must be prefixed with `REACT_APP_` for Create React App):

1. **REACT_APP_AUTH0_DOMAIN** (Required)
   - Auth0 domain from Auth0 Dashboard
   - Example: `your-tenant.auth0.com`

2. **REACT_APP_AUTH0_CLIENT_ID** (Required)
   - Auth0 Client ID from Auth0 Dashboard

3. **REACT_APP_AUTH0_CALLBACK_URL** (Required for non-production)
   - Callback URL for Auth0 redirect
   - Used when `REACT_APP_VERCEL_ENV !== 'production'`
   - Example: `http://localhost:4040/callback`

4. **REACT_APP_VERCEL_ENV** (Optional, but used for production detection)
   - When set to `'production'`, the app constructs callback URL from `window.location.hostname`
   - Vercel automatically sets this in production

## Application Routes

- `/` - Home page (public)
- `/bikes` - Protected page (requires authentication)
- `/graphs` - Admin page (requires authentication)
- `/callback` - Auth0 callback handler
- `*` - 404 Not Found page

## Vercel Deployment Configuration

### vercel.json
The project includes a `vercel.json` file that:
1. Configures SPA routing by rewriting all routes to `/index.html` (required for React Router)
2. Explicitly sets the build command and output directory

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "buildCommand": "npm run build",
  "outputDirectory": "build"
}
```

### Environment Variables Setup
Environment variables must be configured in Vercel dashboard:
1. Go to Project Settings → Environment Variables
2. Add all `REACT_APP_*` variables
3. Ensure they're set for Production, Preview, and Development environments

## Build Scripts

- `npm start` - Development server on port 4040
- `npm run build` - Production build (outputs to `build/`)
- `npm test` - Run tests
- `npm run lint` - Lint code
- `npm run format` - Format code with Prettier

## Fixes Applied

1. ✅ **Fixed react-scripts version** in `package.json`:
   - Changed from `^0.0.0` to `^5.0.1`

2. ✅ **Created `vercel.json`** for SPA routing:
   - Added rewrite rules for React Router
   - Set explicit build command and output directory

3. ✅ **Created CLAUDE.md** documentation:
   - Comprehensive project documentation
   - Build issues and solutions
   - Deployment requirements

## Testing the Build Locally

Before deploying to Vercel, test the build locally:

```bash
npm install
npm run build
```

This will:
1. Install all dependencies (including the corrected react-scripts)
2. Build the production bundle in the `build/` directory
3. Verify that the build completes without errors

## Additional Notes

- The project uses React Router 6 with BrowserRouter
- Auth0 authentication is implemented with protected routes
- The app includes both desktop and mobile navigation components
- ECharts is used for data visualization (likely in the admin/graphs page)
- There's a duplicate `pages/pages/` directory structure that may need cleanup in the future

## Next Steps

1. ✅ Fix react-scripts version - DONE
2. ✅ Create vercel.json - DONE
3. ⏳ Set environment variables in Vercel dashboard
4. ⏳ Test deployment on Vercel
5. ⏳ Verify Auth0 callback URLs are configured correctly
