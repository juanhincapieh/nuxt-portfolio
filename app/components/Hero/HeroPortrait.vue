<template>
    <div class="relative isolate mx-auto w-fit">
        <!-- Glow -->
        <div
            class="absolute -inset-10 -z-10 rounded-full bg-accent/25 blur-3xl"
            aria-hidden="true"
        />

        <div class="motion-safe:animate-float">
            <!-- Gradient ring -->
            <div class="rounded-full bg-linear-to-br from-accent via-white/30 to-violet-600 p-1 shadow-2xl shadow-accent/20">
                <img
                    :src="src"
                    :alt="alt"
                    width="448"
                    height="448"
                    fetchpriority="high"
                    class="size-56 rounded-full object-cover sm:size-72 lg:size-96 xl:size-112"
                >
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Portrait } from '~/types/profile';

defineProps<Portrait>();
</script>
