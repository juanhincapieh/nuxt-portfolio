<template>
    <svg
        viewBox="0 0 36 36"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path :d="BRAND_ICON_PATHS[name]" />
    </svg>
</template>

<script setup lang="ts">
import { BRAND_ICON_PATHS } from './paths';
import type { BrandIconProps } from './types';

defineProps<BrandIconProps>();
</script>
