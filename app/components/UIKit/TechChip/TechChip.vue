<template>
    <span
        :style="{ '--chip-color': color }"
        class="inline-flex items-center rounded-xl border border-(--chip-color)/20 bg-(--chip-color)/10 px-3 py-1 font-mono text-xs font-bold text-white/80"
    >
        {{ label }}
    </span>
</template>

<script setup lang="ts">
import type { TechChipProps } from './types';

withDefaults(defineProps<TechChipProps>(), {
    color: 'var(--color-neutral-300)',
});
</script>
