<template>
    <li class="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 motion-safe:reveal-on-scroll">
        <div class="flex flex-col gap-1">
            <h3 class="font-semibold text-white">{{ role }}</h3>
            <p class="text-sm text-muted">
                {{ company }} · {{ startDate }} – {{ endDate }}
            </p>
        </div>

        <ul v-if="technologies.length" class="flex flex-wrap gap-2 sm:justify-end" aria-label="Technologies">
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

defineProps<Pick<RoleEntry, 'company' | 'role' | 'startDate' | 'endDate' | 'technologies'>>();
</script>
