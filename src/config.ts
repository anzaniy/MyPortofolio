// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Muhammad Ega Putra Anzani | Portfolio';
export const SITE_DESCRIPTION = 'Portofolio Muhammad Ega Putra Anzani, Sarjana Ilmu Komputer Universitas Lampung. Web developer dan game developer dengan pengalaman di bidang backend, frontend, dan pengembangan game edukasi.';
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