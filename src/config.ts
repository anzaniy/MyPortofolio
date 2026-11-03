// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Muhammad Ega Putra Anzani | Portfolio';
export const SITE_DESCRIPTION = 'Portfolio of Muhammad Ega Putra Anzani, Computer Science graduate from Lampung University. Web and game developer with experience in backend, frontend, and educational game development.';
export const GENERATE_SLUG_FROM_TITLE = true
export const TRANSITION_API = true

/**
 * Prefix path internal dengan base URL situs.
 * Diperlukan karena GitHub Pages menyajikan situs dari sub-folder (/MyPortofolio).
 */
const baseUrl = import.meta.env.BASE_URL.replace(/\/+$/, '');

export const withBase = (path = '/') => {
    const cleanPath = path.replace(/^\/+/, '');
    return cleanPath ? `${baseUrl}/${cleanPath}` : `${baseUrl}/`;
};