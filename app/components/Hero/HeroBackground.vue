<template>
    <!--
        Decorative, full viewport width behind the Hero.
        The parent needs `relative isolate` so -z-10 stays above the page background.
        The mask fades the waves out under the navbar and before the Experience slide.
    -->
    <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_70%,transparent)]"
    >
        <GradientWaves
            :horizon-color="COLORS.horizon"
            :wave-color="COLORS.wave"
            :crest-color="COLORS.crest"
            :speed="0.1"
            :opacity="0.2"
            :mouse-interaction="false"
            :grain-intensity="0.03"
            :wave-ratio="2"
            :paused="prefersReducedMotion"
        />
    </div>
</template>

<script setup lang="ts">
import GradientWaves from '~/components/VueBits/Backgrounds/GradientWaves.vue';

// The shader needs hex values, so these mirror the theme instead of using tokens.
const COLORS = {
    horizon: '#0a0a0a', // neutral-950 (page background)
    wave: '#2e2347',    // deep violet
    crest: '#c8abff',   // --color-accent
};

// Show a single still frame instead of animating.
const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
</script>
