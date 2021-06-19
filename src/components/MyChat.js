import ChatBot from 'react-simple-chatbot';
function MyChat(){
  return (
    <div>
    <ChatBot
    // speechSynthesis={{ enable: true, lang: 'en' }}
  steps={[
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      trigger:'4',
    },
    {
      id: '4',
      message:'What is your age?',
      trigger:'5',
    },
    {
      id: '5',
      user:true,
      trigger:'6'
    },
    {
      id: '6',
      message:'Bye!!! Thanks for contacting us',
      end:true,
    }
  ]}
/>
</div>
  );
}


export default MyChat;