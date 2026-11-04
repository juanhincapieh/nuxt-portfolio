<template>
    <div class="flex flex-col gap-16 pb-24">
        <div class="relative flex min-h-dvh items-center pt-32 pb-24 lg:pt-28">
            <Hero class="w-full" />

            <!-- Mouse hint only makes sense with a mouse; hidden on touch screens. -->
            <ScrollHint
                href="#experience"
                class="absolute bottom-6 left-1/2 hidden -translate-x-1/2 pointer-fine:flex"
            />
        </div>

        <HomeExperience id="experience" class="scroll-mt-32" />
    </div>
</template>

<script setup lang="ts">
// UIKit
import { ScrollHint } from '~/components/UIKit/ScrollHint';

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
