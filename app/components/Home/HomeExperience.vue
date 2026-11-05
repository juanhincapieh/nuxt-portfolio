<template>
    <section
        class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16"
        aria-labelledby="home-experience-title"
    >
        <!-- Left: pinned below the navbar while the list scrolls (desktop only) -->
        <header class="flex flex-col gap-4 lg:sticky lg:top-36 lg:self-start">
            <h2 id="home-experience-title" class="text-3xl font-extrabold text-white sm:text-4xl">
                {{ HOME_EXPERIENCE.title }}
            </h2>
            <p class="max-w-sm text-muted">
                {{ HOME_EXPERIENCE.intro }}
            </p>
        </header>

        <!-- Right: one entry per role (gap-10 leaves room for the divider in HomeExperienceRow) -->
        <ol class="flex flex-col gap-10">
            <HomeExperienceRow
                v-for="entry in entries"
                :key="`${entry.company}-${entry.role}`"
                :start-date="entry.startDate"
                :end-date="entry.endDate"
                :role="entry.role"
                :company="entry.company"
                :description="entry.description"
                :technologies="entry.technologies"
            />
        </ol>
    </section>
</template>

<script setup lang="ts">
import { HOME_EXPERIENCE } from '~/data/home';

const entries = getRoleEntries();
</script>
