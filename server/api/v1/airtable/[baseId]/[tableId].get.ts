export default defineCachedEventHandler(
  async (event) => {
    const { baseId, tableId } = getRouterParams(event);
    const params = getQuery(event);

    const data = await $fetch(
      `https://api.airtable.com/v0/${baseId}/${tableId}`,
      {
        params,
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_READ_KEY}`,
        },
      }
    );

    return data;
  },
  { swr: true, maxAge: 3600 }
);
