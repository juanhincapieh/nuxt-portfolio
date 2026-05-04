<template>
    <Transition name="fade-up">
        <div v-if="visible" class="mb-20 flex flex-col relative gap-4">
            <span class="text-5xl font-extrabold text-white">
                Skills
            </span>
            <div class="grid grid-cols-2 gap-16">
                <div class="bg-gray-900/20 backdrop-blur-3xl rounded-2xl p-4 w-full border-[0.5px] border-white/20 shadow-2xl">
                    <span class="text-3xl font-semibold text-white">
                        Frontend
                    </span>
                    <div class="flex flex-row flex-wrap gap-4 mt-4">
                        <SkillTech
                            v-for="frontendSkill in SKILLS.frontend"
                            :logo="frontendSkill.logo"
                            :label="frontendSkill.label"
                        />
                    </div>
                </div>
                <div class="bg-gray-900/20 backdrop-blur-3xl rounded-2xl p-4 w-full border-[0.5px] border-white/20 shadow-2xl">
                    <span class="text-3xl font-semibold text-white">
                        Backend
                    </span>
                    <div class="flex flex-row flex-wrap gap-4 mt-4">
                        <SkillTech
                            v-for="backendSkill in SKILLS.backend"
                            :logo="backendSkill.logo"
                            :label="backendSkill.label"
                        />
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-16 mt-8">
                <div class="bg-gray-900/20 backdrop-blur-3xl rounded-2xl p-4 w-full border-[0.5px] border-white/20 shadow-2xl">
                    <span class="text-3xl font-semibold text-white">
                        DevOps & CI/CD
                    </span>
                    <div class="flex flex-row flex-wrap gap-4 mt-4">
                        <SkillTech
                            v-for="devopsSkill in SKILLS.devops"
                            :logo="devopsSkill.logo"
                            :label="devopsSkill.label"
                        />
                    </div>
                </div>
                <div class="bg-gray-900/20 backdrop-blur-3xl rounded-2xl p-4 w-full border-[0.5px] border-white/20 shadow-2xl">
                    <span class="text-3xl font-semibold text-white">
                        Other
                    </span>
                    <div class="flex flex-row flex-wrap gap-4 mt-4">
                        <SkillTech
                            v-for="otherSkill in SKILLS.other"
                            :logo="otherSkill.logo"
                            :label="otherSkill.label"
                        />
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import SkillTech from "./SkillTech.vue";
import { SKILLS } from "./skills"

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