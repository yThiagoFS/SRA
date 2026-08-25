import { defineCollection, reference } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				title: z.string(),
				description: z.string(),
				type: z.enum(['absoluto', 'relativo', 'ferramenta']),
				tags: z.array(z.string()),
				lastUpdated: z.date().optional(),
				relatedLaboratories: z.array(reference('docs')).optional(),
			}),
		}),
	}),
};
