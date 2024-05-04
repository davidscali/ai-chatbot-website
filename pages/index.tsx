import React, { useState } from 'react';
import { Text, Page } from '@vercel/examples-ui';
import { Chat } from '../components/Chat';
import NavBar from '../components/NavBar';
import Description from '../components/Description';
import ConectDama from "../components/ConectDama";
import image from "/workspace/ai-chatbot-website/public/DAMA.png"



function Home() {
  return (
    
  <Page style={{ backgroundColor: '#f0f3ff' }}>
    
    <Page className=" flex flex-col gap-12">
      <search>
        <Description/>
      </search>
      <section className="flex flex-col gap-6">
        <Text variant="h1" className="text-center text-3xl font-bold text-teal-900">Empowering Your Growth - Journey of Self-Evaluation</Text>
        <Text className="text-center text-xl sm:px-6 lg:px-8 text-zinc-600 mt-3">
          Welcome to the Self-Evaluation Service, where we empower you to assess your performance and possibly earn special recognition from your company. Kindly express in the chat below why you feel deserving of special recognition. Please be aware that all transactions will require authorization from your direct manager.
        </Text>
      </section>
    
      <section className="flex flex-col gap-3">
        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 ">
            <Chat />
          </div>
        </div>
      </section>
      
      <section className="flex flex-col px-6 gap-12">
        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6  mt-5">
          <NavBar />
            </div>
          </div>
       </section>

       <section className="flex flex-col max-w-screen-3xl mx-full py-4 rounded-xl">
      <div className="flex justify-center ">
        <div className="w-full rounded-lg shadow-m">
        <ConectDama  />
        </div>
      </div>
    </section>
        </Page>
    </Page>
  )
}

export default Home;


