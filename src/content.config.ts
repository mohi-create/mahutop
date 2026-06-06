import { defineCollection, z } from 'astro:content';

const reviewsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    affiliateLink: z.string().url(),
    priceRating: z.string(),
    category: z.string(),
    productVibe: z.string(),
    techSpecs: z.array(z.string()).default([])
  })
});

export const collections = {
  'reviews': reviewsCollection
};
