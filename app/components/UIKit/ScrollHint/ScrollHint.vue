<template>
    <a
        :href="href"
        :class="[
            'flex flex-col items-center gap-2 text-white/50 transition-[color,opacity] duration-500 hover:text-white/80',
            scrolled ? 'pointer-events-none opacity-0' : 'opacity-100',
        ]"
    >
        <!-- Mouse icon -->
        <span class="flex h-9 w-6 justify-center rounded-full border-2 border-current pt-2" aria-hidden="true">
            <span class="size-1 rounded-full bg-current motion-safe:animate-scroll-dot" />
        </span>
    </a>
</template>

<script setup lang="ts">
import type { ScrollHintProps } from './types';

withDefaults(defineProps<ScrollHintProps>(), {
    label: 'Scroll',
});

const scrolled = useWindowScrolled();
</script>
