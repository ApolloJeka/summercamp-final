export function getStrapiURL() {
  return process.env.STRAPI_API_URLS ?? "http://localhost:1337";
}
