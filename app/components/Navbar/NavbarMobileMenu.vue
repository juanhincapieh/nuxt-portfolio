<template>
    <div class="flex flex-col gap-8 pb-6">
        <ul>
            <li v-for="item in items" :key="item.to">
                <NuxtLink
                    :to="item.to"
                    class="block py-3 text-2xl font-medium text-white/70 transition-colors not-aria-[current=page]:hover:text-white aria-[current=page]:text-accent"
                >
                    {{ item.label }}
                </NuxtLink>
            </li>
        </ul>

        <NavbarCvButton :href="cvUrl" class="w-full" />
    </div>
</template>

<script setup lang="ts">
import type { NavItem } from '~/types/navigation';

defineProps<{
    items: NavItem[]
    cvUrl: string
}>();
</script>
