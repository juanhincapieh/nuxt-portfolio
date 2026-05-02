<template>
    <div class="mt-3">
        <div class="flex items-center align-middle justify-between bg-white/10 backdrop-blur-3xl py-3 px-4 rounded-2xl">
            <h1 class="text-white text-xl font-semibold">juanhincapieh</h1>
            <div class="flex align-middle items-center space-x-8">
                <NuxtLink 
                    to="/" 
                    class="flex flex-col items-center text-gray-300/80 hover:text-zinc-400"
                    :class="{ 'text-white' : route.path === '/' }"
                >
                    <Home :size="30" />
                </NuxtLink>
                <NuxtLink 
                    to="/about" 
                    class="flex flex-col items-center text-gray-300/80 hover:text-gray-400"
                    :class="{ 'text-white' : route.path === '/about' }"
                >
                    <UserRound :size="30" />
                </NuxtLink>
                <NuxtLink 
                    to="/projects" 
                    class="flex flex-col items-center text-gray-300/80 hover:text-gray-400"
                    :class="{ 'text-white' : route.path === '/projects' }"
                >
                    <BriefcaseBusiness :size="30" />
                </NuxtLink>
                <NuxtLink 
                    to="/contact" 
                    class="flex flex-col items-center text-gray-300/80 hover:text-gray-400"
                    :class="{ 'text-white' : route.path === '/contact' }"
                >
                    <Mail :size="30" />
                </NuxtLink>
            </div>
            <div class="flex flex-row gap-2">
                <Button
                    :size="'md'"
                    :variant="'default'"    
                    :icon="FileUser"
                    @click="handleCVDownload"
                >
                    View CV
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// UIKit
import Button from '@/components/UIKit/Button/Button.vue';

// Icons
import { 
    Home,
    UserRound,
    BriefcaseBusiness,
    Mail,
    FileUser,
    Briefcase,
} from '@lucide/vue';

const route = useRoute();

const handleCVDownload = (): void => {
    window.open("/files/cv.pdf")
}
</script>