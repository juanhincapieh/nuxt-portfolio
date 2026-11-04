<template>
    <div class="motion-safe:animate-fade-up">
        <span class="text-5xl font-extrabold text-white">
            Experience
        </span>

        <div class="mt-4">
            <ExperienceItem
                v-for="experience in EXPERIENCE"
                :key="experience.company"
                v-bind="experience"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import ExperienceItem from './ExperienceItem.vue';
import { EXPERIENCE } from '~/data/experience';
</script>
