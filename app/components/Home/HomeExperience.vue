<template>
    <section class="flex flex-col gap-6" aria-labelledby="home-experience-title">
        <header class="flex items-end justify-between gap-4">
            <h2 id="home-experience-title" class="text-3xl font-extrabold text-white sm:text-4xl">
                Experience
            </h2>
            <NuxtLink
                to="/about"
                class="group inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-white"
            >
                See full experience
                <ArrowRight class="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </NuxtLink>
        </header>

        <ol class="flex flex-col divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/2 backdrop-blur">
            <HomeExperienceRow
                v-for="entry in entries"
                :key="`${entry.company}-${entry.role}`"
                :company="entry.company"
                :role="entry.role"
                :start-date="entry.startDate"
                :end-date="entry.endDate"
                :technologies="entry.technologies"
            />
        </ol>
    </section>
</template>

<script setup lang="ts">
// Icons
import { ArrowRight } from '@lucide/vue';

const entries = getRoleEntries();
</script>
