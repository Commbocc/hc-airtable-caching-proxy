export function useCache() {
  const { data, execute, refresh, pending } = useFetch(`/api/cache`, {
    immediate: false,
  });

  async function clearAll() {
    if (!confirm("Are you sure?")) return;

    const { execute } = useFetch(`/api/cache`, {
      method: "DELETE",
      immediate: false,
    });
    await execute();
    await refresh();
  }

  async function removeCacheKey(key: string) {
    if (!confirm("Are you sure?")) return;

    const { execute } = useFetch(`/api/cache/${key}`, {
      method: "DELETE",
      immediate: false,
    });

    await execute();
    await refresh();
  }

  return { data, execute, refresh, pending, clearAll, removeCacheKey };
}
