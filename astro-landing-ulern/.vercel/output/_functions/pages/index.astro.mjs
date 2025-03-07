import { c as createComponent, r as renderHead, a as renderSlot, b as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BxKfAUVe.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>Bárbara PDA</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/barbaraperezdearce/Desktop/PORTFOLIO/astro-landing-ulern/astro-landing-ulern/src/layouts/Layout.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-16 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto"> <h1 class="text-4xl md:text-6xl lg:text-7xl font-playwrite text-primary font-bold text-center mb-12">
Bárbara Pérez de Arce
</h1> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> <div class="space-y-4 px-1"> <p class="text-lg lg:text-xl leading-relaxed xl:leading-loose text-justify">
¡Hola Ulern! Mi nombre es <span class="text-secondary">Bárbara Pérez de Arce</span>, y soy Desarrolladora Full Stack, Socióloga y Música Autodidacta.
          Tengo experiencia trabajando en equipos dentro de entornos académicos
          y profesionales, tanto en el ámbito de la Sociología como en el de la
          Programación.
</p> <p class="text-lg lg:text-xl leading-relaxed text-justify xl:leading-loose">
Me considero una pensadora versátil: mi trayectoria me ha permitido
          desarrollar habilidades de pensamiento crítico, analítico y creativo.
</p> </div> <div class="flex justify-center md:justify-end"> <div class="relative w-full max-w-md aspect-square rounded-lg overflow-hidden shadow-xl"> <img src="/images/yo.png" alt="Bárbara Pérez de Arce" class="w-full h-full object-cover"> </div> </div> </div> </section> ` })}`;
}, "/Users/barbaraperezdearce/Desktop/PORTFOLIO/astro-landing-ulern/astro-landing-ulern/src/components/About.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12 px-4"> <h1 class="text-2xl font-bold text-center text-primary">Proyectos</h1> <p class="text-center mt-4">
num: "01",
      category: "frontend",
      title: "Sí, voy",
      description:
        "Real project in which I contributed to the implementation of dynamic and responsive interfaces, actively participating in the design and coding of an inclusive UX/UI for users with diverse disabilities.",
      stack: [
        name: "TypeScript" ,
        name: "Next.js",
        name: "Tailwind.css",
        name: "Figma" ,
        name: "Vercel" ,
      ],
      image: "/assets/work/si-voy.png",
      alt: "Sí, voy",
      demo: "https://www.youtube.com/watch?v=73N9lGJr55I",
      github: "https://github.com/sivoyweb/Front",

      num: "02",
      category: "frontend",
      title: "Jobs&Wozniak",
      description:
        "A fictional Apple product e-commerce site where users can add and remove products from the cart, proceed to checkout, log in and out of their accounts, and view their user information and purchase history.",
      stack: [
        name: "TypeScript",
        name: "Next.js",
        name: "Tailwind.css",
        name: "Figma" ,
        name: "Vercel" ,
      ],
      image: "/assets/work/jobs-wozniak.png",
      alt: "Jobs&Wozniak",
      live: "https://jobs-wozniak-e-commerce.vercel.app/",
      github: "https://github.com/bperezdearce/jobs_wozniak_ecommerce",
      num: "03",
      category: "fullstack",
      title: "Domenica",
      description:
        "Development of an app that functions as a reservation manager for customers of a fictional restaurant called Domenica. The users can make and delete reservations, and the app will update the database accordingly.",
      stack: [
        name: "Html 5",
        name: "Css 3",
        name: "Javascript",
        name: "TypeScript",
        name: "React",
        name: "Redux",
        name: "Vite",
        name: "Express",
        name: "Node.js",
        name: "PostgreSQL",
        name: "Vercel",
      ],
      image: "/assets/work/domenica.png",
      alt: "Domenica",
      live: "https://domenica-git-main-bperezdearces-projects.vercel.app/",
      github: "https://github.com/bperezdearce/domenica",
      num: "04",
      category: "fullstack",
      title: "LatinoMedia",
      description:
        "Development of an app that works as a catalog for Latin American movies. Users of the app can add movies through a form, and the app will add them to the database and display the movies on the main page.",
      stack: [
        name: "Html 5",
        name: "Css 3",
        name: "Javascript",
        name: "Bootstrap",
        name: "Express",
        name: "Node.js",
        name: "MongoDB",
        name: "Mongoose",
      ],
      image: "/assets/work/latinomedia.png",
      alt: "LatinoMedia",
      live: "",
      github: "https://github.com/bperezdearce/latinomedia",
</p> </section> ` })}`;
}, "/Users/barbaraperezdearce/Desktop/PORTFOLIO/astro-landing-ulern/astro-landing-ulern/src/components/Projects.astro", void 0);

const $$Technologies = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12 px-4"> <h1 class="text-2xl font-bold text-center text-primary">Tecnologías</h1> <p class="text-center mt-4">FaHtml5,
      FaCss3,
      FaReact,
      FaNodeJs,
      FaBootstrap,
      FaFigma,
      FaDocker,
      FaPython
      SiTailwindcss,
      SiNextdotjs,
      SiTypescript,
      SiJavascript,
      SiExpress,
      SiMongodb,
      SiPostgresql,
      SiVercel,
      SiVite,
      SiRedux,
      SiMongoose,
      SiJasmine,
      SiJest,
      SiDjango,
      SiNgrok,
      SiSwagger.</p> </section> ` })}`;
}, "/Users/barbaraperezdearce/Desktop/PORTFOLIO/astro-landing-ulern/astro-landing-ulern/src/components/Technologies.astro", void 0);

const $$Education = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12 px-4"> <h1 class="text-2xl font-bold text-center text-primary">Educación</h1> <p class="text-center mt-4">2010 - 2014. Sociology. Universidad de Chile.</p> <p class="text-center mt-4">2024. Full Stack Development. Henry Bootcamp.</p> <p class="text-center mt-4">2025. React Native Certificate. Meta.</p> </section> ` })}`;
}, "/Users/barbaraperezdearce/Desktop/PORTFOLIO/astro-landing-ulern/astro-landing-ulern/src/components/Education.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Technologies", $$Technologies, {})} ${renderComponent($$result2, "Education", $$Education, {})} ` })}`;
}, "/Users/barbaraperezdearce/Desktop/PORTFOLIO/astro-landing-ulern/astro-landing-ulern/src/pages/index.astro", void 0);

const $$file = "/Users/barbaraperezdearce/Desktop/PORTFOLIO/astro-landing-ulern/astro-landing-ulern/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
