<template>
    <div class="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
        <Button
            to="/projects"
            size="lg"
            variant="accent"
            :icon="ArrowRight"
        >
            View Projects
        </Button>
        <Button
            to="/about"
            size="lg"
            variant="ghost"
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
