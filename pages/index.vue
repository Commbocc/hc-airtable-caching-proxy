<script setup lang="ts">
const {
  data: cacheKeys,
  execute,
  pending,
  clearAll,
  removeCacheKey,
} = useCache();
await execute();

const columns = [
  //
  { key: "key", label: "Key" },
  { key: "actions", label: "Actions" },
];
</script>

<template>
  <UContainer class="my-10">
    <div class="flex gap-2 justify-end">
      <UButton
        @click="clearAll"
        color="red"
        variant="solid"
        icon="i-heroicons-trash"
        size="lg"
      >
        Clear All
      </UButton>
    </div>

    <UTable
      :rows="cacheKeys?.map((key) => ({ key }))"
      :columns="columns"
      :loading="pending"
    >
      <template #key-data="{ row }">
        <a :href="`/api/cache/${row.key}`" target="_blank" class="underline">
          {{ row.key }}
        </a>
      </template>
      <template #actions-data="{ row }">
        <UButton
          color="red"
          icon="i-heroicons-trash"
          @click="removeCacheKey(row.key)"
        >
          Remove
        </UButton>
      </template>
    </UTable>
  </UContainer>
</template>
