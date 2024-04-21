import {  Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <Text variant="h1">Wellcome to Self Evaluation</Text>
        <Text className="text-zinc-600">
        Welcome to the Self-Evaluation Service, where we empower you to assess your performance and possibly earn special recognition from your company. Kindly express in the chat below why you feel deserving of special recognition. Please be aware that all transactions will require authorization from your direct manager.
        </Text>
      </section>

      <section className="flex flex-col gap-3">
          <Chat />
      </section>
    </Page>
  )
}

export default Home
