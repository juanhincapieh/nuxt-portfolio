<template>
    <div class="mb-20 flex flex-col relative gap-4 motion-safe:animate-fade-up animation-delay-150">
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
                        :key="frontendSkill.label"
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
                        :key="backendSkill.label"
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
                        :key="devopsSkill.label"
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
                        :key="otherSkill.label"
                        :logo="otherSkill.logo"
                        :label="otherSkill.label"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SkillTech from "./SkillTech.vue";
import { SKILLS } from "~/data/skills"
</script>