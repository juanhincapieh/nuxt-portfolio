<template>
    <li class="flex flex-col gap-2 p-6 motion-safe:reveal-on-scroll">
        <p class="text-sm text-muted">{{ startDate }} – {{ endDate }}</p>
        <h3 class="text-lg font-semibold text-white">{{ role }}</h3>
        <p class="font-medium text-white/80">{{ company }}</p>
        <p v-if="description" class="line-clamp-2 text-sm leading-relaxed text-white/60">
            {{ description }}
        </p>
        <ul v-if="technologies.length" class="mt-1 flex flex-wrap gap-2" aria-label="Technologies">
            <li v-for="tech in technologies" :key="tech">
                <TechChip v-bind="getSkill(tech)" />
            </li>
        </ul>
    </li>
</template>

<script setup lang="ts">
// UIKit
import { TechChip } from '~/components/UIKit/TechChip';

import type { RoleEntry } from '~/types/experience';

defineProps<Pick<RoleEntry, 'startDate' | 'endDate' | 'role' | 'company' | 'description' | 'technologies'>>();
</script>
