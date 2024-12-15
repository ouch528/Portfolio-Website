export const getImageUrl = (path) => {
  const base = window.location.origin;  // Use the full origin (domain + path) to ensure correct resolution
  return `${base}/Portfolio-Website/assets/${path}`;
};
