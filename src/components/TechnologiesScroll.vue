<template>
    <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-8">
        <li v-for="technology in technologies" :key="technology.name"
            class="relative w-full h-[100px] rounded-xl flex justify-center items-center group transition-all duration-300">

            <Icon :icon="technology.icon" width="72" height="72" class="flex-shrink-0 text-6xl text-primary
                 transition-all duration-300" />


            <span class="absolute bottom-2 hidden group-hover:flex bg-secondary text-xs px-2 py-1 rounded">
                {{ technology.name }}
            </span>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

const technologies = [
    { icon: "tdesign:html5-filled", name: "HTML 5" },
    { icon: "tdesign:css3-filled", name: "CSS 3" },
    { icon: "akar-icons:javascript-fill", name: "JavaScript" },
    { icon: "akar-icons:typescript-fill", name: "TypeScript" },
    { icon: "akar-icons:python-fill", name: "Python" },
    { icon: "akar-icons:react-fill", name: "React" },
    { icon: "akar-icons:redux-fill", name: "Redux" },
    { icon: "ri:nextjs-fill", name: "Next.js" },
    { icon: "akar-icons:vue-fill", name: "Vue.js" },
    { icon: "lineicons:astro", name: "Astro" },
    { icon: "file-icons:vite", name: "Vite" },
    { icon: "mdi:tailwind", name: "Tailwind" },
    { icon: "mdi:bootstrap", name: "Bootstrap" },
    { icon: "simple-icons:express", name: "Express" },
    { icon: "akar-icons:node-fill", name: "Node.js" },
    { icon: "akar-icons:django-fill", name: "Django" },
    { icon: "file-icons:swagger", name: "Swagger" },
    { icon: "akar-icons:react-fill", name: "React Native" },
    { icon: "simple-icons:mongoose", name: "Mongoose" },
    { icon: "lineicons:mongodb", name: "MongoDB" },
    { icon: "akar-icons:postgresql-fill", name: "PostgreSQL" },
    { icon: "lineicons:mysql", name: "MySQL" },
    { icon: "ri:vercel-fill", name: "Vercel" },
    { icon: "mdi:docker", name: "Docker" },
    { icon: "simple-icons:ngrok", name: "Ngrok" },
    { icon: "file-icons:jasmine", name: "Jasmine" },
    { icon: "file-icons:jest", name: "Jest" },
    { icon: "solar:figma-linear", name: "Figma" },
]
</script>