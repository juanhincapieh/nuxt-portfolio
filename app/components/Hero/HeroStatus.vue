<template>
    <p class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur">
        <span class="relative flex size-2" aria-hidden="true">
            <span class="absolute inline-flex size-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
            <span class="relative inline-flex size-2 rounded-full bg-emerald-400" />
        </span>
        <span>
            Currently {{ role }}
            <span class="text-white/50">@</span>
            <span class="font-semibold text-white">{{ company }}</span>
        </span>
    </p>
</template>

<script setup lang="ts">
import type { CurrentRole } from '~/types/profile';

defineProps<CurrentRole>();
</script>
