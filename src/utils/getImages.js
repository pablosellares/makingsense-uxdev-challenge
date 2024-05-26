function getImagesURL(name) {
  return new URL(`/src/assets/${name}`, import.meta.url).href
}

export { getImagesURL };