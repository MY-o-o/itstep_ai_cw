import { groq } from '@ai-sdk/groq';
import { streamText, convertToModelMessages, type UIMessage } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const body = await req.json();
  const messages: UIMessage[] = body.messages ?? [];

  const systemPrompt = `You are an AI assistant for a Full Stack Developer & Tech Lead. 
Be concise, professional, and friendly.
Answer questions about his services, tech stack (Next.js, React Native, NestJS, etc.), and availability.
Do not make up facts. If you don't know, say you don't know and invite the user to contact the developer directly.
Always answer in the language the user asks.`;

  const result = await streamText({
    model: groq('llama-3.1-8b-instant'),
    system: systemPrompt,
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
