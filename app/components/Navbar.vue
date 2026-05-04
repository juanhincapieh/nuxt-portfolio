<template>
    <div class="flex items-center top-[2em] left-0 right-0 z-20 fixed max-w-7xl mx-auto h-17 justify-center">
        <div class="flex justify-between items-center bg-[rgba(0,0,0,0.05)] backdrop-filter backdrop-blur-[10px] my-0 px-6 py-4 border border-[rgba(255,255,255,0.2)] rounded-[50px] w-[93%] h-full" style="backdrop-filter: blur(10px); box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 30px;">
            <h1 class="text-white text-xl font-semibold">juanhincapieh</h1>
            <div class="flex align-middle items-center space-x-8">
                <NuxtLink 
                    to="/" 
                    class="flex flex-col items-center text-gray-300/80 hover:text-zinc-400"
                    :class="{ 'text-white' : route.path === '/' || route.path === '' }"
                >
                    <Home :size="30" />
                </NuxtLink>
                <NuxtLink 
                    to="/about" 
                    class="flex flex-col items-center text-gray-300/80 hover:text-gray-400"
                    :class="{ 'text-white' : route.path === '/about' || route.path === '/about/' }"
                >
                    <CircleUserRound :size="30" />
                </NuxtLink>
                <NuxtLink 
                    to="/projects" 
                    class="flex flex-col items-center text-gray-300/80 hover:text-gray-400"
                    :class="{ 'text-white' : route.path === '/projects' || route.path === '/projects/' }"
                >
                    <BriefcaseBusiness :size="30" />
                </NuxtLink>
                <NuxtLink 
                    to="/contact" 
                    class="flex flex-col items-center text-gray-300/80 hover:text-gray-400"
                    :class="{ 'text-white' : route.path === '/contact' || route.path === '/contact/' }"
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
    CircleUserRound,
} from '@lucide/vue';

const route = useRoute();

const handleCVDownload = (): void => {
    window.open("/Files/cv.pdf")
}
</script>