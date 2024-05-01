import React, { useState } from 'react';
import { Text, Page } from '@vercel/examples-ui';
import { Chat } from '../components/Chat';
import NavBar from '../components/NavBar';
import  ConectDama  from '../components/ConectDama';


function Home() {

  return (
    // <Page style={{ backgroundColor: '#f0f3ff' }}>

    <Page className="background-gray flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <Text variant="h1" className="text-center text-3xl font-bold text-teal-800">Welcome to Self Evaluation</Text>
        <Text className="text-center text-lg text-zinc-600">
          Welcome to the Self-Evaluation Service, where we empower you to assess your performance and possibly earn special recognition from your company. Kindly express in the chat below why you feel deserving of special recognition. Please be aware that all transactions will require authorization from your direct manager.
        </Text>
      </section>

      <section className="flex flex-col gap-3">
        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <Chat />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-12">
        <div className="flex justify-center ">
          <div className="bg-white rounded-lg shadow-lg p-6 ">
          <NavBar />
            </div>
          </div>
       </section>

       <section className="flex flex-col gap-12">
       <div className="flex justify-center ">
       <div className="w-full bg-white rounded-lg shadow-lg p-8 ">
        <ConectDama />
        </div>
        </div>
        </section>
    </Page>
    
  )
  
}

export default Home;


