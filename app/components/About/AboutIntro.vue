<template>
    <section
        class="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16 motion-safe:animate-fade-up"
        aria-labelledby="about-intro-title"
    >
        <!-- Photo first: on top on mobile, left column on desktop -->
        <AboutPhoto v-bind="ABOUT_INTRO.photo" class="mx-auto max-w-sm lg:max-w-none" />

        <div class="flex flex-col gap-6">
            <h1 id="about-intro-title" class="text-5xl font-extrabold text-white">
                {{ ABOUT_INTRO.title }}
            </h1>
            <p
                v-for="(paragraph, index) in ABOUT_INTRO.paragraphs"
                :key="index"
                class="max-w-2xl text-lg leading-relaxed text-white/70"
            >
                {{ paragraph }}
            </p>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ABOUT_INTRO } from '~/data/about';
</script>
