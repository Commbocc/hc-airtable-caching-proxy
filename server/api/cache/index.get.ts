export default defineEventHandler(async (event) => {
  const cacheStorage = useStorage("cache:nitro");
  const cachedKeys = await cacheStorage.getKeys();
  return cachedKeys;
});
