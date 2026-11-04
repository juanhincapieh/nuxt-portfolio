<template>
    <ul class="flex gap-8 text-sm">
        <li v-for="item in items" :key="item.to">
            <!--
                NuxtLink sets aria-current="page" on the current route.
                Current: accent text + a glowing accent line that grows in from the center.
                Others on hover: white text + a plain white line that slides in from the left
                and out to the right.
            -->
            <NuxtLink
                :to="item.to"
                :class="[
                    'relative block text-muted transition-colors duration-150',
                    'after:absolute after:inset-x-0 after:-bottom-2 after:h-0.5 after:rounded-full',
                    'after:scale-x-0 after:transition-transform after:duration-300',
                    // Current page
                    'aria-[current=page]:text-accent aria-[current=page]:after:scale-x-100',
                    'aria-[current=page]:after:bg-accent',
                    // Other links: hover
                    'not-aria-[current=page]:hover:text-white not-aria-[current=page]:after:bg-white/60',
                    'not-aria-[current=page]:after:origin-right not-aria-[current=page]:hover:after:origin-left',
                    'not-aria-[current=page]:hover:after:scale-x-100',
                ]"
            >
                {{ item.label }}
            </NuxtLink>
        </li>
    </ul>
</template>

<script setup lang="ts">
import type { NavItem } from '~/types/navigation';

defineProps<{
    items: NavItem[]
}>();
</script>
