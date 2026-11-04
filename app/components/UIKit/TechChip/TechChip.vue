<template>
    <span
        :class="[
            'inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 py-1 pr-3 text-xs font-medium text-white/80',
            logo ? 'pl-1.5' : 'pl-3',
        ]"
    >
        <img
            v-if="logo"
            :src="logo"
            alt=""
            width="16"
            height="16"
            loading="lazy"
            class="size-4 object-contain"
        >
        {{ label }}
    </span>
</template>

<script setup lang="ts">
import type { TechChipProps } from './types';

defineProps<TechChipProps>();
</script>
