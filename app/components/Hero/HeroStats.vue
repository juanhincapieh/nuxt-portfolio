<template>
    <dl class="flex flex-wrap justify-center gap-x-12 gap-y-4 lg:justify-start">
        <div v-for="stat in stats" :key="stat.label" class="flex flex-col">
            <dt class="order-2 text-sm text-muted">{{ stat.label }}</dt>
            <dd class="order-1 text-3xl font-extrabold text-white">{{ stat.value }}</dd>
        </div>
    </dl>
</template>

<script setup lang="ts">
import type { ProfileStat } from '~/types/profile';

defineProps<{
    stats: ProfileStat[]
}>();
</script>
