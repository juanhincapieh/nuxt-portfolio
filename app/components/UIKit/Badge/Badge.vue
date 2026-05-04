<template>
    <span :style="hueStyle" :class="badgeSize + ' ' + badgeVariant">
        <slot />
    </span>
</template>

<script setup lang="ts">
import type { BadgeProps } from './types'

const props = withDefaults(defineProps<BadgeProps>(), {
    size: 'md',
    variant: 'default',
    hue: 0  
})

const badgeSize = computed(() => {
    switch (props.size) {
        case 'sm':
            return 'text-[10px] font-medium p-[2px_8px] rounded-[64px]'
        case 'md':
            return 'text-xs font-semibold p-[4px_8px] rounded-[64px]'
        case 'lg':
            return 'text-sm font-semibold p-[8px_12px] rounded-[64px]'
        default:
            return 'text-xs font-semibold p-[4px_8px] rounded-[64px]'
    }
})

const badgeVariant = computed(() => {
    switch (props.variant) {
        case 'outline':
            return 'border border-current'
        default:
            return 'text-black'
    }
})

const hueStyle = computed(() => {
    const hsl = `hsl(${props.hue}, 70%, 85%)`
    return props.variant === 'outline'
        ? { color: hsl }
        : { backgroundColor: hsl }
})
</script>