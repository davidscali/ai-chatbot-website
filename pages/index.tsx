import React, { useRef } from 'react';
import { Chat } from '../components/Chat';
import NavBar from '../components/NavBar';
import { Text, Page } from '@vercel/examples-ui';
import { Button } from "../components/Button";
import ConectDama from '../components/ConectDama';

function Home() {
  const bottomRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Page>
      <div className="flex justify-center mt-5">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-white text-5xl font-bold text-teal-900">
            Welcome to Dama
          </h1>
          <h2 className="text-center text-2xl text-white font-bold mt-3">
          Evaluate, Innovate, Succeed
          </h2>
        </div>
      </div>
      <div className='flex justify-center mt-4'>
          <Button onClick={scrollToBottom} className="btn btn-primary submit-button focus:ring focus:outline-none w-full sm:w-auto">
             About Us 
          </Button>
        </div>
      <Page className="flex flex-col gap-12">
        <section className="flex flex-col gap-3">
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <Chat />
            </div>
          </div>
        </section>
        
        <section className="flex flex-col px-14 gap-12">
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 mt-5">
              <NavBar />
            </div>
          </div>
        </section>

        <section className="flex flex-col max-w-screen-3xl mx-full py-4 rounded-xl">
          <div className="flex justify-center">
            <div className="w-full rounded-lg shadow-m">
              <ConectDama />
            </div>
          </div>
        </section>

        <section ref={bottomRef} className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-6">
          <Text variant="h1" className="text-center text-black text-3xl font-bold mt-3">
          Welcome to Dama
          </Text>
          <Text className="text-center text-xl text-black  sm:px-6 lg:px-8 mt-3">
          Empowering Success Through Self-Evaluation
           </Text>
          <Text className="text-center text-xl text-black sm:px-6 lg:px-8 mt-3">
          At Dama, we prioritize our employees well-being and believe in fostering an environment of transparency and self-evaluation. Our unique approach allows employees to evaluate themselves openly, ensuring they have a voice in their professional growth and development. To recognize and reward their efforts, we provide virtual currency called DAMA. 
          </Text>
          <Text className="text-center text-xl text-black sm:px-6 lg:px-8 mt-3">
          DAMA is more than just a token of appreciation it is a gateway to a variety of benefits tailored to enhance our employees lives both inside and outside the workplace. Employees can use DAMA to purchase extra days off, choose gifts from a dedicated website, acquire home essentials, and more. This system empowers employees to tailor their rewards to what matters most to them, promoting a sense of autonomy and personal satisfaction.          
          </Text>
          <Text className="text-center text-xl text-black sm:px-6 lg:px-8 mt-3">
          At Dama, we understand that incentives play a crucial role in motivating employees to deliver their best work. By offering DAMA as a reward, we not only encourage excellence but also reinforce our commitment to a transparent and appreciative workplace culture. We recognize the importance of creating an environment where employees feel their contributions are valued and their voices heard.
          </Text>
          <Text className="text-center text-xl text-black sm:px-6 lg:px-8 mt-3">
          We strive to ensure that every employee has a positive and fulfilling experience at Dama. Our self-evaluation system is designed to be fair and empowering, providing employees with the opportunity to reflect on their achievements and areas for growth. This process fosters a culture of continuous improvement and mutual respect.
          </Text>
          <Text className="text-center text-xl text-black sm:px-6 lg:px-8 mt-3">
          Moreover, the tangible rewards that DAMA offers are complemented by the intangible benefits of feeling recognized and valued. At Dama, we believe that when employees know their efforts are appreciated, they are more likely to be engaged, productive, and committed to the companys success.
          </Text>
          <Text className="text-center text-xl text-black sm:px-6 lg:px-8 mt-3">
          In summary, Dama is dedicated to creating a workplace where transparency, self-evaluation, and meaningful rewards converge. We are committed to fostering a culture of appreciation and motivation, ensuring that our employees not only succeed professionally but also feel valued and supported in every aspect of their work life.
          </Text>
        </section>
      </Page>
    </Page>
  );
}

export default Home;