/**
 * An array of routes that are accessible for logged users
 * These routes require authentication
 * @type {string[]}
 */
export const protectedRoutes = ["/settings"];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged users to /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/login",
  "/register",
  "/error",
  "/reset",
  "/new-password",
];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api";

/**
 * The default redirect path after loggging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/";
