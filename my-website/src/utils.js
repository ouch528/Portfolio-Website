export const getImageUrl = (path) => {
    const base = new URL('./', import.meta.url); 
    return new URL(`/my-website/assets/${path}`, base).href;
  };
  