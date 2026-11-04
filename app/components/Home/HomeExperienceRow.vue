<template>
    <li class="flex flex-col gap-3 p-6 motion-safe:reveal-on-scroll">
        <p class="text-muted">{{ startDate }} - {{ endDate }}</p>
        <div class="gap-0.5">
            <h3 class="text-xl font-bold text-white">{{ role }}</h3>
            <p class="text-sm font-mono font-light text-white/80">{{ company }}</p>
        </div>
        <p v-if="description" class="text-white/60">
            {{ description }}
        </p>
        <ul v-if="technologies.length" class="mt-1 flex flex-wrap gap-2" aria-label="Technologies">
            <li v-for="skill in technologies.map(getSkill)" :key="skill.label">
                <TechChip :label="skill.label" :color="skill.color" />
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
