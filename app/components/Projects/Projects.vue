<template>
    <section class="flex flex-col gap-12" aria-labelledby="projects-title">
        <header class="flex flex-col gap-4 motion-safe:animate-fade-up">
            <h1 id="projects-title" class="text-4xl font-extrabold text-white sm:text-5xl">
                {{ PROJECTS_PAGE.title }}
            </h1>
            <p class="max-w-xl text-lg text-muted">
                {{ PROJECTS_PAGE.intro }}
            </p>
        </header>

        <!-- Cards fade in one after another (--animation-delay is read by animate-fade-up). -->
        <ul class="grid gap-6 md:grid-cols-2">
            <li
                v-for="(project, index) in PROJECTS"
                :key="project.title"
                :style="{ '--animation-delay': `${150 + index * 75}ms` }"
                class="motion-safe:animate-fade-up"
            >
                <ProjectsCard
                    :title="project.title"
                    :description="project.description"
                    :technologies="project.technologies"
                    :url="project.url"
                    :repo="project.repo"
                />
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
import { PROJECTS, PROJECTS_PAGE } from '~/data/projects';
</script>
