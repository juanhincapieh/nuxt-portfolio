<template>
    <div class="flex relative min-h-dvh scrollbar-hide">
        <div class="relative flex flex-col gap-16 max-w-7xl mx-auto mt-34 w-full z-10">
            <Experience />
            <Skills />
        </div>
    </div>
</template>

<script setup lang="ts">
import Experience from '@/components/About/Experience.vue';
import Skills from '@/components/About/Skills.vue';
</script>