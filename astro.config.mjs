// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	site: 'https://ythiagofs.github.io',
	base: '/SRA',
	markdown: {
		processor: unified({
			remarkPlugins: [remarkMath],
			rehypePlugins: [rehypeKatex],
		}),
	},
	integrations: [
		starlight({
			title: 'A Enciclopédia dos Saberes Relativos e Absolutos',
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			locales: {
				root: { label: 'Português (Brasil)', lang: 'pt-BR' },
			},
			pagefind: true,
			components: {
				Head: './src/components/Head.astro',
			},
			sidebar: [
				{
					label: 'Saberes Absolutos',
					items: [{ autogenerate: { directory: 'saberes-absolutos' } }],
				},
				{
					label: 'Saberes Relativos - TWS',
					items: [{ autogenerate: { directory: 'saberes-relativos' } }],
				},
				{
					label: 'Caixa de Ferramentas',
					items: [{ autogenerate: { directory: 'caixa-de-ferramentas' } }],
				},
			],
		}),
	],
});
