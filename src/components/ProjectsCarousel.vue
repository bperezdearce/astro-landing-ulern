<script lang="ts" setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperRef = ref<typeof Swiper | null>(null);

interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: { name: string }[];
  image: string;
  alt: string;
  demo?: string;
  github?: string;
  live?: string;
}

const onSwiper = (swiper: any) => {
  swiperRef.value = swiper;
};

const nextSlide = () => {
  if (swiperRef.value) {
    swiperRef.value.slideNext();
  }
};
const prevSlide = () => {
  if (swiperRef.value) {
    swiperRef.value.slidePrev();
  }
};

const projects = ref([
  {
    num: "01",
    category: "frontend",
    title: "Sí, voy",
    description:
      "Proyecto real en el que contribuí a la implementación de interfaces dinámicas y responsivas, participando activamente en el diseño y desarrollo de una UX/UI inclusiva para usuarios con diversas discapacidades.",
    stack: [
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "Figma" },
      { name: "Vercel" },
    ],
    image: "/images/si-voy.avif",
    alt: "Sí, voy",
    demo: "https://www.youtube.com/watch?v=73N9lGJr55I",
    github: "https://github.com/sivoyweb/Front",
  },
  {
    num: "02",
    category: "frontend",
    title: "Jobs&Wozniak",
    description:
      "Un sitio de comercio electrónico ficticio de productos Apple donde los usuarios pueden agregar y eliminar productos del carrito, proceder al pago, iniciar y cerrar sesión en sus cuentas, y ver su información de usuario e historial de compras.",
    stack: [
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "Figma" },
      { name: "Vercel" },
    ],
    image: "/images/jobs-wozniak.avif",
    alt: "Jobs&Wozniak",
    live: "https://jobs-wozniak-e-commerce.vercel.app/",
    github: "https://github.com/bperezdearce/jobs_wozniak_ecommerce",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Domenica",
    description:
      "Desarrollo de una aplicación que funciona como un gestor de reservas para los clientes de un restaurante ficticio llamado Domenica. Los usuarios pueden hacer y cancelar reservas, y la aplicación actualizará la base de datos en consecuencia.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Redux" },
      { name: "Vite" },
      { name: "Express" },
      { name: "Node.js" },
      { name: "PostgreSQL" },
      { name: "Vercel" },
    ],
    image: "/images/domenica.avif",
    alt: "Domenica",
    live: "https://domenica-git-main-bperezdearces-projects.vercel.app/",
    github: "https://github.com/bperezdearce/domenica",
  },
  {
    num: "04",
    category: "fullstack",
    title: "LatinoMedia",
    description:
      "Desarrollo de una aplicación que funciona como un catálogo de películas latinoamericanas. Los usuarios pueden agregar películas a través de un formulario, y la aplicación las incorporará a la base de datos y las mostrará en la página principal.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Bootstrap" },
      { name: "Express" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Mongoose" },
    ],
    image: "/images/latinomedia.avif",
    alt: "LatinoMedia",
    live: "",
    github: "https://github.com/bperezdearce/latinomedia",
  },
]);
</script>

<template>
  <div class="relative">
    <div class="projects-carousel-container relative">
      <swiper
        :slides-per-view="1"
        :space-between="50"
        :pagination="{ clickable: true }"
        :loop="true"
        :modules="[Navigation, Pagination, Autoplay]"
        @swiper="onSwiper"
        class="w-full mb-10"
      >
        <swiper-slide v-for="(project, index) in projects" :key="index" class="pb-5">
          <div class="flex flex-col md:flex-row rounded-lg shadow-medium overflow-hidden items-center">
            <div class="w-full md:w-1/2 h-64 relative overflow-hidden items">
              <img 
                :src="project.image" 
                :alt="project.alt" 
                class="w-full h-full object-contain transition duration-300"
              />
              <div class="absolute top-3 left-3 bg-secondary text-white px-3 py-1 rounded">
                {{ project.category }}
              </div>
            </div>
            <div class="w-full md:w-1/2 p-5 flex flex-col justify-center">
              <div class="flex justify-between items-center mb-3">
                <h3 class="text-3xl font-bold text-primary">{{ project.title }}</h3>
                <span class="text-lg font-medium text-zinc-500">{{ project.num }}</span>
              </div>
              
              <p class="text-justify text-lg mb-4 leading-relaxed">{{ project.description }}</p>
              
              <div class="flex flex-wrap gap-2 mb-4">
                <span 
                  v-for="(tech, techIndex) in project.stack.slice(0, 10)" 
                  :key="techIndex"
                  class="bg-secondary text-white px-2 py-1 text-sm rounded"
                >
                  {{ tech.name }}
                </span>
              </div>
              
              <div class="flex gap-3">
                <a 
                  v-if="project.demo" 
                  :href="project.demo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-block bg-primary/90 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                >
                  YouTube
                </a>
                <a 
                  v-if="project.github" 
                  :href="project.github" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-block bg-primary/90 text-white px-4 py-2 rounded hover:bg-zinc-900 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="flex justify-between mt-4">
      <button 
        @click="prevSlide" 
        class="px-4 py-2 bg-zinc-800 text-white rounded-full hover:bg-primary transition"
        aria-label="Anterior proyecto"
      >
        ←
      </button>
      <button 
        @click="nextSlide" 
        class="px-4 py-2 bg-zinc-800 text-white rounded-full hover:bg-primary transition"
        aria-label="Siguiente proyecto"
      >
        →
      </button>
    </div>
  </div>
</template>

<style scoped>
.projects-carousel-container {
  position: relative;
}

:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background-color: #e4e4e7;
  opacity: 0.7;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #0111a7;
  opacity: 1;
}
</style>
