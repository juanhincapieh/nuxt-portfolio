<template>
    <Transition name="fade-up">
        <div v-if="visible">
            <span class="text-5xl font-extrabold text-white">
                Experience
            </span>

            <div class="mt-4">
                <ExperienceItem
                    v-for="experience in EXPERIENCE"
                    :key="experience.company"
                    v-bind="experience"
                />
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import ExperienceItem from './ExperienceItem.vue';
import { EXPERIENCE } from './experience';

const visible = ref(false);
onMounted(() => nextTick(() => { visible.value = true; }));
</script>

<style scoped>
.fade-up-enter-active {
    transition: opacity 0.7s ease, transform 0.7s ease;
}
.fade-up-enter-from {
    opacity: 0;
    transform: translateY(40px);
}
.fade-up-enter-to {
    opacity: 1;
    transform: translateY(0);
}
</style>