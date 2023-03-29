import {  Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <Text variant="h1">Chat with Forrest Gump</Text>
        <Text className="text-zinc-600">
          Ever wanted to chat with Forrest? Well, now is your chance! Try asking him about his shrimping business. Bubba would be proud...
        </Text>
      </section>

      <section className="flex flex-col gap-3">
          <Chat />
      </section>
    </Page>
  )
}

export default Home
