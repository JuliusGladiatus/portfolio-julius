import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const videoEntry = z.preprocess(
	(v) => typeof v === 'string' ? { src: v, zoom: 1 } : v,
	z.object({ src: z.string(), zoom: z.number().default(1) })
);

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		titre: z.string(),
		lieu: z.string(),
		categorie: z.enum(['voyage', 'sport', 'corporate']),
		publie: z.boolean().default(true),
		date: z.date(),
		video_plateforme: z.enum(['youtube', 'vimeo']).optional(),
		video_id: z.string().optional(),
		video_thumbnail: z.string().optional(),
		video2_plateforme: z.enum(['youtube', 'vimeo']).optional(),
		video2_id: z.string().optional(),
		video2_thumbnail: z.string().optional(),
		image_principale: z.string(),
		image_couverture: z.string().optional(),
		image_position: z.string().default('center'),
		hero_video: z.string().optional(),
		hero_images: z.array(z.string()).default([]),
		carnet_heure: z.string(),
		carnet_periode: z.string().optional(),
		carnet_temperature: z.string(),
		carnet_date: z.string(),
		texte_intention: z.string(),
		photos: z.array(z.object({
			src: z.string(),
			caption: z.string().optional(),
		})).default([]),
		materiel: z.array(z.string()).default([]),
		role: z.array(z.string()).default([]),
		livrables: z.array(z.string()).default([]),
		videos_verticales: z.array(videoEntry).default([]),
		fresque: z.array(z.string()).default([]),
		chapitres: z.array(z.object({
			titre: z.string(),
			video_plateforme: z.enum(['youtube', 'vimeo']).optional(),
			video_id: z.string().optional(),
			video_fichier: z.string().optional(),
			photos: z.array(z.object({
				src: z.string(),
				caption: z.string().optional(),
			})).default([]),
			video_thumbnail: z.string().optional(),
			videos_verticales: z.array(videoEntry).default([]),
			preview_time: z.number().optional(),
		})).default([]),
		phare: z.boolean().default(false),
		ordre: z.number().default(0),
	}),
});

export const collections = { projects };
