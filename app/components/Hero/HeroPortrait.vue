<template>
    <img
        :src="src"
        :alt="alt"
        width="448"
        height="448"
        fetchpriority="high"
        class="mx-auto size-56 rounded-full object-cover ring-1 ring-white/15 sm:size-72 lg:size-96 xl:size-112"
    >
</template>

<script setup lang="ts">
import type { Portrait } from '~/types/profile';

defineProps<Portrait>();
</script>
