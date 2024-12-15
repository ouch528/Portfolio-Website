export const getImageUrl = (path) => {
    const base = new URL('./', import.meta.url); 
    return new URL(`/assets/${path}`, base).href;
  };
  