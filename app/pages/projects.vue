<template>
    <div class="pt-32 pb-24">
        <Projects />
    </div>
</template>

<script setup lang="ts">
import { PROFILE } from '~/data/profile';
import { PROJECTS_PAGE } from '~/data/projects';

const title = `${PROJECTS_PAGE.title} | ${PROFILE.name}`;

useSeoMeta({
    title,
    description: PROJECTS_PAGE.intro,
    ogTitle: title,
    ogDescription: PROJECTS_PAGE.intro,
});
</script>
