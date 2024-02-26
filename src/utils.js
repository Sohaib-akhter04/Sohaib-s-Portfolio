export const getImageUrl=(path)=>{
    return new URL(`/assets/${path}`,import.meta.url).href;
} //use for dynamic import of the assets 