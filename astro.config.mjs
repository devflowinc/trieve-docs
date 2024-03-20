import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

// FIX the code issue to add a navbar item to the top of the page

// https://astro.build/config
export default defineConfig({
  site: "https://docs.trieve.ai",
  integrations: [starlight({
    title: 'Trieve Docs',
	  customCss: ['./src/tailwind.css'],
    social: {
      github: 'https://github.com/devflowinc/trieve',
      twitter: 'https://twitter.com/trieveai',
      discord: 'https://discord.gg/jWdZc3XSWB',
      matrix: 'https://matrix.to/#/#trieve-general:matrix.zerodao.gg',
    },
    logo: {
      src: './src/assets/trieve-logo.png',
      alt: 'Trieve Logo'
    },
    components: {
      SocialIcons: './src/components/NavbarItem.astro',
    },
    editLink: {
      baseUrl: 'https://github.com/devflowinc/trieve-docs/edit/main'
    },
    sidebar: [{
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Example Guide',
        link: '/guides/example/'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }],
  }),
  tailwind({
	applyBaseStyles: false,
  })]
});