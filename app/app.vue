<template>
  <div class="min-h-screen bg-neutral-950">
    <div class="flex flex-col max-w-7xl mx-auto w-full px-6 md:px-12">
        <Navbar />
        <NuxtRouteAnnouncer />
        <NuxtPage/>
    </div>
  </div>
</template>

<script setup lang="ts">
// UIKit
import Navbar from '@/components/Navbar.vue';
</script>
