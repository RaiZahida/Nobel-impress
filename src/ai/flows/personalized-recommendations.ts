// src/ai/flows/personalized-recommendations.ts
'use server';

/**
 * @fileOverview A personalized bag recommendation AI agent.
 *
 * - getPersonalizedBagRecommendations - A function that retrieves personalized bag recommendations based on viewing history.
 * - PersonalizedBagRecommendationsInput - The input type for the getPersonalizedBagRecommendations function.
 * - PersonalizedBagRecommendationsOutput - The return type for the getPersonalizedBagRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedBagRecommendationsInputSchema = z.object({
  viewingHistory: z
    .string()
    .describe('The user viewing history, a list of bag names.'),
  numberOfRecommendations: z
    .number()
    .default(3)
    .describe('The number of bag recommendations to return.'),
});
export type PersonalizedBagRecommendationsInput = z.infer<
  typeof PersonalizedBagRecommendationsInputSchema
>;

const PersonalizedBagRecommendationsOutputSchema = z.object({
  recommendations: z.array(
    z.string().describe('Recommended bag based on viewing history.')
  ),
});
export type PersonalizedBagRecommendationsOutput = z.infer<
  typeof PersonalizedBagRecommendationsOutputSchema
>;

export async function getPersonalizedBagRecommendations(
  input: PersonalizedBagRecommendationsInput
): Promise<PersonalizedBagRecommendationsOutput> {
  return personalizedBagRecommendationsFlow(input);
}

const personalizedBagRecommendationsPrompt = ai.definePrompt({
  name: 'personalizedBagRecommendationsPrompt',
  input: {schema: PersonalizedBagRecommendationsInputSchema},
  output: {schema: PersonalizedBagRecommendationsOutputSchema},
  prompt: `You are a personal shopping assistant specializing in bags. Based on the user's viewing history, recommend {{numberOfRecommendations}} other bags that they might like.

Viewing History: {{{viewingHistory}}}

Recommendations:`,
});

const personalizedBagRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedBagRecommendationsFlow',
    inputSchema: PersonalizedBagRecommendationsInputSchema,
    outputSchema: PersonalizedBagRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await personalizedBagRecommendationsPrompt(input);
    return output!;
  }
);
