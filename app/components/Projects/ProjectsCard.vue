<template>
    <!-- Panel: text on top, chips + links pinned to the bottom so footers line up in a row. -->
    <article
        class="group flex h-full flex-col justify-between gap-8 rounded-3xl border border-white/10 bg-neutral-900/40 p-6 transition-colors duration-300 hover:border-white/20 hover:bg-neutral-900/70 sm:p-8"
    >
        <div class="flex flex-col gap-2">
            <h3 class="text-xl font-bold text-white transition-colors duration-300 group-hover:text-accent">
                {{ title }}
            </h3>
            <p class="text-pretty leading-relaxed text-white/60">
                {{ description }}
            </p>
        </div>

        <div class="flex flex-col gap-6">
            <ul v-if="technologies.length" class="flex flex-wrap gap-2" aria-label="Technologies">
                <li v-for="skill in technologies.map(getSkill)" :key="skill.label">
                    <TechChip :label="skill.label" :color="skill.color" />
                </li>
            </ul>

            <div v-if="url || repo" class="flex items-center justify-between gap-4">
                <a
                    v-if="url"
                    :href="url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex min-w-0 items-center gap-1.5 font-mono text-sm text-muted transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                    <span class="truncate">{{ displayUrl }}</span>
                    <ArrowUpRight class="size-4 shrink-0" aria-hidden="true" />
                </a>

                <!-- ml-auto: stays on the right even without a live URL -->
                <a
                    v-if="repo"
                    :href="repo"
                    :aria-label="`${title} on GitHub`"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ml-auto grid size-10 shrink-0 place-items-center rounded-lg border border-white/20 bg-white/5 text-white/70 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                    <BrandIcon name="github" class="size-5" />
                </a>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
// UIKit
import { BrandIcon } from '~/components/UIKit/BrandIcon';
import { TechChip } from '~/components/UIKit/TechChip';

import type { Project } from '~/types/project';

// Icons
import { ArrowUpRight } from '@lucide/vue';

const props = defineProps<Project>();

/** "https://pegaso.dev/" → "pegaso.dev" */
const displayUrl = computed(() => props.url?.replace(/^https?:\/\//, '').replace(/\/$/, ''));
</script>
