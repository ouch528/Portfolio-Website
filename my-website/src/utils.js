export const getImageUrl = (path) => {
    const base = new URL('./', import.meta.url); 
    return new URL(`/Portfolio-Website/my-website/assets/${path}`, base).href;
  };
  