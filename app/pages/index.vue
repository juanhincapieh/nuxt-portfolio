<template>
    <div class="flex flex-col gap-16 pb-24">
        <div class="flex min-h-dvh items-center pt-32 pb-16 lg:pt-28">
            <Hero class="w-full" />
        </div>

        <HomeExperience />
    </div>
</template>

<script setup lang="ts">
import { PROFILE } from '~/data/profile';

const title = `${PROFILE.name} | ${PROFILE.roles[0]}`;

useSeoMeta({
    title,
    description: PROFILE.tagline,
    ogTitle: title,
    ogDescription: PROFILE.tagline,
    ogImage: PROFILE.portrait.src,
});
</script>
