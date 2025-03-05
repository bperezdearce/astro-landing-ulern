import { c as createComponent, a as createAstro, b as addAttribute, r as renderHead, e as renderSlot, f as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BO9modsG.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Basics</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/barbaraperezdearce/Desktop/PORTFOLIO/astro-landing-ulern/astro-landing-ulern/src/layouts/Layout.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12 px-4"> <h1 class="text-2xl font-bold text-center">Sobre Mí</h1> <p class="text-center mt-4">Aquí irá una descripción sobre mí.</p> </section> ` })}`;
}, "/Users/barbaraperezdearce/Desktop/PORTFOLIO/astro-landing-ulern/astro-landing-ulern/src/components/About.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12 px-4"> <h1 class="text-2xl font-bold text-center">Proyectos</h1> <p class="text-center mt-4">Aquí irá un carrusel mostrando mis distintos proyectos.</p> </section> ` })}`;
}, "/Users/barbaraperezdearce/Desktop/PORTFOLIO/astro-landing-ulern/astro-landing-ulern/src/components/Projects.astro", void 0);

const $$Technologies = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12 px-4"> <h1 class="text-2xl font-bold text-center">Tecnologías</h1> <p class="text-center mt-4">Aquí irán íconos que representen las distintas tecnologías que manejo.</p> </section> ` })}`;
}, "/Users/barbaraperezdearce/Desktop/PORTFOLIO/astro-landing-ulern/astro-landing-ulern/src/components/Technologies.astro", void 0);

const $$Education = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12 px-4"> <h1 class="text-2xl font-bold text-center">Educación</h1> <p class="text-center mt-4">Acá irán tarjetas que representan mis distintos hitos educativos.</p> </section> ` })}`;
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
