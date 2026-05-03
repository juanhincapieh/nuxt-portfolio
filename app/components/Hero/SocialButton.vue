<template>
    <div class="flex bg-[#C8ABFF] p-3 rounded-full hover:bg-[#AD93DC] transition-colors">
        <a :href="url" target="_blank" rel="noopener noreferrer">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path :d="PATH[social]" fill="#2B2A2C"/>
            </svg>
        </a>
    </div>
</template>

<script setup lang="ts">
import { PATH } from "./socials"

interface SocialButtonProps {
    social: keyof typeof PATH
    url: string
}

const props = defineProps<SocialButtonProps>()
</script>
