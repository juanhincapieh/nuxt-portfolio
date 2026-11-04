<template>
    <!-- external: a static file, not a route -->
    <Button
        :to="href"
        external
        target="_blank"
        size="md"
        variant="ghost"
        :icon="FileUser"
        :class="'font-mono'"
    >
        View CV
    </Button>
</template>

<script setup lang="ts">
// UIKit
import { Button } from '~/components/UIKit/Button';

// Icons
import { FileUser } from '@lucide/vue';

defineProps<{
    href: string
}>();
</script>
