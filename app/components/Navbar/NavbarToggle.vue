<template>
    <!-- after:-inset-4 enlarges the tap area beyond the small icon -->
    <button
        type="button"
        :aria-label="open ? 'Close menu' : 'Open menu'"
        :aria-expanded="open"
        class="relative z-20 block cursor-pointer text-white after:absolute after:-inset-4"
        @click="open = !open"
    >
        <!-- Two lines (closed) -->
        <span
            :class="[
                'm-auto flex size-4.5 flex-col items-center justify-center gap-[7px] duration-200',
                open && 'scale-0 rotate-180 opacity-0',
            ]"
        >
            <span class="h-0.5 w-full rounded-full bg-current" />
            <span class="h-0.5 w-full rounded-full bg-current" />
        </span>

        <!-- X (open) -->
        <X
            :class="[
                'absolute inset-0 m-auto size-6 -translate-x-[3px] duration-200',
                open ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-180 opacity-0',
            ]"
            aria-hidden="true"
        />
    </button>
</template>

<script setup lang="ts">
// Icons
import { X } from '@lucide/vue';

const open = defineModel<boolean>('open', { required: true });
</script>
