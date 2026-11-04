<template>
  <!-- overflow-x-clip: lets full-width sections (100vw) break out without a horizontal scrollbar. -->
  <div class="min-h-screen overflow-x-clip bg-neutral-950">
    <!-- Smooth scrolling for the whole page (off when the user prefers reduced motion). -->
    <VueLenis root :options="LENIS_OPTIONS" />

    <div class="flex flex-col max-w-7xl mx-auto w-full px-6 md:px-12">
        <Navbar />
        <NuxtRouteAnnouncer />
        <NuxtPage/>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LenisOptions } from 'lenis';

// Defined once so <VueLenis> is not re-created on re-render.
const LENIS_OPTIONS: LenisOptions = {
    // Smooth-scroll #anchor links (respects CSS scroll-margin).
    anchors: true,
    // Stop the glide when a link navigates to another page.
    stopInertiaOnNavigate: true,
};
</script>
