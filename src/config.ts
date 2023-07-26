// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Utku's blog";
export const SITE_DESCRIPTION = "Utku's mid takes on tech world";
export const TWITTER_HANDLE = "@utkuenes";
export const MY_NAME = "Utku Enes GURSEL";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
