<script setup>
import { ref } from "vue";
import { useSwipe } from "@vueuse/core";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Icon } from '@iconify/vue';

const projects = ref([
    {
        num: "01",
        category: "frontend",
        title: "Sí, voy",
        description:
            "Real project in which I contributed to the implementation of dynamic and responsive interfaces, actively participating in the design and coding of an inclusive UX/UI for users with diverse disabilities.",
        stack: ["TypeScript", "Next.js", "Tailwind.css", "Figma", "Vercel"],
        image: "/images/si-voy.png",
        alt: "Sí, voy",
        demo: "https://www.youtube.com/watch?v=73N9lGJr55I",
        github: "https://github.com/sivoyweb/Front",
    },
    {
        num: "02",
        category: "frontend",
        title: "Jobs&Wozniak",
        description:
            "A fictional Apple product e-commerce site where users can add and remove products from the cart...",
        stack: ["TypeScript", "Next.js", "Tailwind.css", "Figma", "Vercel"],
        image: "/images/jobs-wozniak.png",
        alt: "Jobs&Wozniak",
        live: "https://jobs-wozniak-e-commerce.vercel.app/",
        github: "https://github.com/bperezdearce/jobs_wozniak_ecommerce",
    },
    {
        num: "03",
        category: "fullstack",
        title: "Domenica",
        description:
            "Development of an app that functions as a reservation manager for customers...",
        stack: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",
            "React",
            "Redux",
            "Vite",
            "Express",
            "Node.js",
            "PostgreSQL",
            "Vercel",
        ],
        image: "/images/domenica.png",
        alt: "Domenica",
        live: "https://domenica.vercel.app/",
        github: "https://github.com/bperezdearce/domenica",
    },
])

const currentProject = ref(projects.value[0]);
const handleSlideChange = (swiper) => {
    currentProject.value = projects.value[swiper.activeIndex];
};
</script>

<template>
    <section class="min-h-[80vh] flex flex-col justify-center py-12">
        <div class="container mx-auto">
            <div class="flex flex-col xl:flex-row gap-10 items-center">
                <div class="w-full xl:w-1/2">
                    <h2 class="text-4xl font-bold">{{ currentProject.title }}</h2>
                    <p class="text-secondary mt-4">{{ currentProject.description }}</p>
                    <ul class="flex flex-wrap gap-2 mt-4">
                        <li v-for="(tech, index) in currentProject.stack" :key="index"
                            class="bg-gray-700 px-2 py-1 rounded-md text-sm">
                            {{ tech }}
                        </li>
                    </ul>
                    <div class="flex gap-4 mt-6">
                        <a :href="currentProject.github" target="_blank"
                            class="bg-gray-800 p-3 rounded-full hover:bg-gray-600">
                            <Icon icon-="mdi:github" class="text-white text-2xl" />
                        </a>
                        <a :href="currentProject.demo" target="_blank"
                            class="bg-red-600 p-3 rounded-full hover:bg-red-500">
                            <Icon icon="mdi:youtube" class="text-white text-2xl" />
                        </a>
                    </div>
                </div>
                <div class="w-full xl:w-1/2">
                    <Swiper spaceBetween="20" slidesPerView="1" class="h-[400px] w-full"
                        @slideChange="handleSlideChange">
                        <SwiperSlide v-for="(project, index) in projects" :key="index">
                            <div class="h-[400px] flex justify-center items-center">
                                <img :src="project.image" :alt="project.alt"
                                    class="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
</template>