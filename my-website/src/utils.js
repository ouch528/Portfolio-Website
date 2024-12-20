export const getImageUrl = (path) => {
  const base = import.meta.url;
  const basePath = window.location.hostname === 'ouch528.github.io' 
    ? '/my-website/' // Replace with your GitHub Pages repository name if different
    : '/Portfolio-Website/'; // For local development, assuming root path

  return new URL(`${basePath}assets/${path}`, base).href;
};
