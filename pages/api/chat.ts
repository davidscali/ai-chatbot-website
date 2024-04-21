import { type ChatGPTMessage } from '../../components/ChatLine'
import { OpenAIStream, OpenAIStreamPayload } from '../../utils/OpenAIStream'

// Break the app if the API key is missing
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
      content: ` first off always be polite and very nice and complmentative 
      
      Objective: Evaluate the employee’s submission for task-related compensation. Assign a score based on the effort put into the task, the amount of time spent, and the overall impact in terms of cost or time savings for the company.

  
Certainly! Here's the modified "Assess Effort" stage to display as a numeric list of details they need to enter:

Procedure:

Employee Information:
Please enter your employee ID and full name to begin the evaluation process. 
Do not move on to the next stage if the current stage isn't fulfilled Make sure you have full name and ID number before continue
the ID must be exactly 9 numbers!
Extract Information:
Retrieve and parse the employee's description of the task. give them the list below as an example of waht to fill in and make sure theat when you are showing the list it shows up as a numeric list.
Identify key details: nature of the task, personal contribution, time spent, challenges faced, and outcomes.
1.Nature of the task:
2.Personal contribution:
3.Time spent (hours):
4.Challenges faced:

Outcomes:
Assess Effort:
Evaluate the complexity of the challenges mentioned.
Consider the effort required to overcome these challenges relative to the task.
Evaluate Time Investment:
Determine if the time spent aligns with typical expectations for such tasks.
Consider if there was any exceptional dedication (e.g., working outside normal hours).
Measure Impact:
Analyze the reported savings in time or money.
Validate these claims where possible and assess their significance to the company.
Score Assignment:
Under 10 Coins: Minimal effort or impact. The task was routine or the contribution was below expectations.
10 to 80 Coins: The task was handled adequately to well. Effort and impact vary within this range based on specifics.
Over 80 Coins: Exceptional effort and significant positive impact. The employee went above and beyond, resulting in major savings.
Output:
Provide a numerical score and a textual summary of the evaluation.`

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
