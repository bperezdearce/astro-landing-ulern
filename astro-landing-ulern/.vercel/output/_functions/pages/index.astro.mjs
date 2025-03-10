import { c as createComponent, r as renderHead, a as renderSlot, b as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BxKfAUVe.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.ico"><title>Bárbara Pérez de Arce</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/barbaraperezdearce/Desktop/PORTFOLIO/astro-landing-ulern/astro-landing-ulern/src/layouts/Layout.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-16 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto"> <h1 class="text-4xl md:text-6xl lg:text-7xl font-playwrite text-primary font-bold text-center mb-12">
Bárbara Pérez de Arce
</h1> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> <div class="space-y-4 px-1"> <p class="text-lg lg:text-xl leading-relaxed text-justify">
¡Hola Ulern! Mi nombre es <span class="text-secondary">Bárbara Pérez de Arce</span>, y soy Desarrolladora Full Stack, Socióloga y Música Autodidacta.
          Tengo experiencia trabajando en equipos dentro de entornos académicos
          y profesionales, tanto en el ámbito de la Sociología como en el de la
          Programación.
</p> <p class="text-lg lg:text-xl leading-relaxed text-justify">
Me considero una pensadora versátil: mi trayectoria me ha permitido
          desarrollar habilidades de pensamiento crítico, analítico y creativo.
</p> <a class="text-lg lg:text-xl leading-relaxed text-justify text-primary font-bold underline" href="https://www.linkedin.com/in/barbarapda/">LinkedIn</a> <span class="text-lg lg:text-xl leading-relaxed text-justify text-primary">-</span> <a class="text-lg lg:text-xl leading-relaxed text-justify text-primary underline font-bold" href="https://github.com/bperezdearce">Github</a> </div> <div class="flex justify-center md:justify-end"> <div class="relative w-full max-w-md aspect-square rounded-xl overflow-hidden shadow-xl"> <img src="/images/yo.png" alt="Bárbara Pérez de Arce" class="w-full h-full object-cover"> </div> </div> </div> </section> ` })}`;
}, "/Users/barbaraperezdearce/Desktop/PORTFOLIO/astro-landing-ulern/astro-landing-ulern/src/components/About.astro", void 0);

const $$Technologies = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-16 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto"> <h1 class="text-2xl md:text-4xl lg:text-5xl text-primary font-bold text-center mb-12">
Tecnologías
</h1> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center text-lg lg:text-xl"> <span>HTML5</span> <span>CSS3</span> <span>React</span> <span>Node.js</span> <span>Bootstrap</span> <span>Figma</span> <span>Docker</span> <span>Python</span> <span>TailwindCSS</span> <span>Next.js</span> <span>TypeScript</span> <span>JavaScript</span> <span>Express</span> <span>MongoDB</span> <span>PostgreSQL</span> <span>Vercel</span> <span>Vite</span> <span>Redux</span> <span>Mongoose</span> <span>Jasmine</span> <span>Jest</span> <span>Django</span> <span>Ngrok</span> <span>Swagger</span> </div> </section> ` })}`;
}, "/Users/barbaraperezdearce/Desktop/PORTFOLIO/astro-landing-ulern/astro-landing-ulern/src/components/Technologies.astro", void 0);

const $$Education = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-16 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto"> <h1 class="text-2xl md:text-4xl lg:text-5xl text-primary font-bold text-center mb-12">
Educación
</h1> <div class="space-y-6 text-lg lg:text-xl leading-relaxed text-center"> <p><strong>2025:</strong> React Native Certificate, Meta.</p> <p><strong>2024:</strong> Full Stack Development, Henry.</p> <p><strong>2010 - 2014:</strong> Sociología, Universidad de Chile.</p> </div> </section> ` })}`;
}, "/Users/barbaraperezdearce/Desktop/PORTFOLIO/astro-landing-ulern/astro-landing-ulern/src/components/Education.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "About", $$About, {})}  ${renderComponent($$result2, "Education", $$Education, {})} ${renderComponent($$result2, "Technologies", $$Technologies, {})} ` })}`;
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
