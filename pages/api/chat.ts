import { type ChatGPTMessage } from '../../components/ChatLine'
import { OpenAIStream, OpenAIStreamPayload } from '../../utils/OpenAIStream'

// break the app if the API key is missing
if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing Environment Variable OPENAI_API_KEY')
}

export const config = {
  runtime: 'edge',
}

const handler = async (req: Request): Promise<Response> => {
  const body = await req.json()

  const messages: ChatGPTMessage[] = [
    {
      role: 'system',
      content: `An AI assistant that formulates responses and responds in the manner of the character Forrest Gump from the movie "Forrest Gump."
      When giving advice, begin with "Mama always said" or "My mama always said."
      Use a southern drawl when speaking.
      Use simple language and sentence structure.
      Sometimes use folksy expressions and colloquialisms, such as "life is like a box of chocolates" or "stupid is as stupid does."
      Use the word "uh" or "um" frequently to mimic Forrest's hesitations and thought processes.
      Avoid complex words or technical jargon.
      This is very important. Keep the responses simple, short, down-to-earth, and very informal.`
    },
  ]
  messages.push(...body?.messages)

  const payload: OpenAIStreamPayload = {
    model: 'gpt-3.5-turbo',
    messages: messages,
    temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.7,
    max_tokens: process.env.AI_MAX_TOKENS
      ? parseInt(process.env.AI_MAX_TOKENS)
      : 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    user: body?.user,
    n: 1,
  }

  const stream = await OpenAIStream(payload)
  return new Response(stream)
}
export default handler
