<template>
    <!--
        Date column + content; on hover the role turns accent.
        Divider: a thin line centered in the list's gap above every entry except the first.
    -->
    <li
        :class="[
            'group relative grid gap-x-6 gap-y-3 sm:grid-cols-[10rem_minmax(0,1fr)] motion-safe:reveal-on-scroll',
            'not-first:before:absolute not-first:before:inset-x-0 not-first:before:-top-5 not-first:before:h-px not-first:before:bg-white/10',
        ]"
    >
        <div class="flex flex-col items-start gap-2 sm:pt-1">
            <p class="font-mono text-xs text-muted">{{ startDate }} - {{ endDate }}</p>
        </div>

        <div class="flex flex-col gap-3">
            <div class="flex flex-col gap-0.5">
                <h3 class="text-xl font-bold text-white transition-colors duration-300 group-hover:text-accent">
                    {{ role }}
                </h3>
                <p class="font-mono text-sm font-light text-white/80">{{ company }}</p>
            </div>

            <p v-if="description" class="leading-relaxed text-white/60">
                {{ description }}
            </p>

            <ul v-if="technologies.length" class="mt-1 flex flex-wrap gap-2" aria-label="Technologies">
                <li v-for="skill in technologies.map(getSkill)" :key="skill.label">
                    <TechChip :label="skill.label" :color="skill.color" />
                </li>
            </ul>
        </div>
    </li>
</template>

<script setup lang="ts">
// UIKit
import { TechChip } from '~/components/UIKit/TechChip';

import type { RoleEntry } from '~/types/experience';

defineProps<Pick<RoleEntry, 'startDate' | 'endDate' | 'role' | 'company' | 'description' | 'technologies'> & {
    /** Shows a small "Current" tag under the date. */
    current?: boolean
}>();
</script>
