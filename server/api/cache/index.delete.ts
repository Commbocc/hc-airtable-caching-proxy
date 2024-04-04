export default defineEventHandler(async (event) => {
  const cacheStorage = useStorage("cache:nitro");
  const cachedKeys = await cacheStorage.getKeys();
  await Promise.all(cachedKeys.map((key) => cacheStorage.removeItem(key)));
});
