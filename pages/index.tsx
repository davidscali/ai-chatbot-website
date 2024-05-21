import React, { useRef } from 'react';
import { Text, Page, Button } from '@vercel/examples-ui';
import { Chat } from '../components/Chat';
import NavBar from '../components/NavBar';
import Description from '../components/Description';
import ConectDama from '../components/ConectDama';
hi
function Home() {
  const bottomRef = useRef(null);

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Page>
      <div className="flex justify-between items-center mt-5">
        <div>
          <Button onClick={scrollToBottom} className="text-white">About Me</Button>
        </div>
        <div className="flex flex-col items-center">
          <Text variant="h1" className="text-center text-white text-3xl font-bold text-teal-900">
            Welcome to Dama
          </Text>
          <Text className="text-center text-xl text-white sm:px-6 lg:px-8 mt-3">
            A marketing and advertising company specializing in website construction.
          </Text>
        </div>
        <div></div>
      </div>
      <Page className="flex flex-col gap-12">
        
        
        <section className="flex flex-col gap-3">
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6">
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

        {/* Bottom section with detailed text */}
        <section ref={bottomRef} className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-6">
          <Text variant="h1" className="text-center text-black text-3xl font-bold mt-3">
            Welcome to Dama
          </Text>
          <Text className="text-center text-xl text-black sm:px-6 lg:px-8 mt-3">
            A marketing and advertising company specializing in website construction.
          </Text>
          <Text className="text-center text-xl text-black sm:px-6 lg:px-8 mt-3">
            At Dama, we value our employees and believe in transparency and self-evaluation. That is why we provide our employees with the opportunity to evaluate themselves openly. We reward them with virtual currency called DAMA, which they can use to purchase various benefits, such as extra days off, gifts from a dedicated website, home essentials, and more.
          </Text>
          <Text className="text-center text-xl text-black sm:px-6 lg:px-8 mt-3">
            At Dama, we believe in providing incentives for our employees to encourage their best work. We understand the importance of transparency in the workplace, and we strive to create an environment where our employees feel appreciated for their contributions. We want our employees to have a positive experience at work, knowing that their efforts are recognized and valued. That is why we offer them the opportunity to evaluate themselves openly and receive rewards in the form of virtual currency called DAMA. With DAMA, our employees can not only purchase tangible rewards but also enjoy the intangible benefits of feeling valued and appreciated.
          </Text>
        </section>
      </Page>
    </Page>
  );
}

export default Home;
