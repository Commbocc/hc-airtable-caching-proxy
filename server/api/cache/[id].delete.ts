export default defineEventHandler(async (event) => {
  const key = getRouterParam(event, "id");
  if (!key)
    throw createError({
      statusCode: 400,
      message: 'Missing required parameter "id"',
    });

  const cacheStorage = useStorage("cache:nitro");
  const cachedKeys = await cacheStorage.getKeys();

  if (!cachedKeys.includes(key))
    throw createError({
      statusCode: 404,
      message: `Cache key "${key}" not found`,
    });

  await cacheStorage.removeItem(key);
});
