<template>
    <div class="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
        <!-- hover:[&_svg]: nudges the arrow right on hover -->
        <Button
            to="/projects"
            size="lg"
            variant="accent"
            :icon="ArrowRight"
            class="font-mono hover:[&_svg]:translate-x-0.5"
        >
            View Projects
        </Button>
        <Button
            to="/about"
            size="lg"
            variant="ghost"
            class="font-mono"
        >
            About Me
        </Button>
    </div>
</template>

<script setup lang="ts">
// UIKit
import { Button } from '~/components/UIKit/Button';

// Icons
import { ArrowRight } from '@lucide/vue';
</script>
