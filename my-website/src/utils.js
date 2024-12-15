export const getImageUrl = (path) => {
    const base = new URL('./', import.meta.url); 
    return new URL(`/Portfolio-Website/assets/${path}`, base).href;
  };
  