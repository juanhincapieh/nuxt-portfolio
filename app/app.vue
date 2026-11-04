<template>
  <div class="min-h-screen bg-neutral-950">
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

// UIKit
import Navbar from '@/components/Navbar.vue';

// Defined once so <VueLenis> is not re-created on re-render.
const LENIS_OPTIONS: LenisOptions = {
    // Smooth-scroll #anchor links (respects CSS scroll-margin).
    anchors: true,
    // Stop the glide when a link navigates to another page.
    stopInertiaOnNavigate: true,
};
</script>
