<template>
    <div class="font-mono text-sm leading-relaxed">
        <!-- Screen readers get a plain sentence instead of the prompt symbols -->
        <p class="sr-only">Currently {{ role }} at {{ company }}</p>

        <div aria-hidden="true">
            <p class="text-white/40">
                <span class="text-emerald-400">$</span> status --current
            </p>
            <p class="text-white/80">
                <span class="text-white/40">&gt;</span>
                {{ role }}
                <span class="text-white/40">@</span>
                <span class="text-accent">{{ company }}</span>
                <span class="ml-1 inline-block h-[1.1em] w-[0.55em] translate-y-[0.2em] bg-white/70 motion-safe:animate-blink" />
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { CurrentRole } from '~/types/profile';

defineProps<CurrentRole>();
</script>
