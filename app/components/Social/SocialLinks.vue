<template>
    <ul class="flex items-center gap-3">
        <li v-for="social in socials" :key="social.platform">
            <a
                :href="social.url"
                :aria-label="social.label"
                target="_blank"
                rel="noopener noreferrer"
                class="grid size-12 place-items-center rounded-full border border-white/15 bg-white/5 text-white/70 backdrop-blur transition-colors hover:border-accent/60 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
                <BrandIcon :name="social.platform" class="size-5" />
            </a>
        </li>
    </ul>
</template>

<script setup lang="ts">
// UIKit
import { BrandIcon } from '~/components/UIKit/BrandIcon';

import type { Social } from '~/types/profile';

defineProps<{
    socials: Social[]
}>();
</script>
