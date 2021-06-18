import ChatBot from 'react-simple-chatbot';
function MyChat(){
  return (
    <div>
    <ChatBot
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
      end: true,
    },
  ]}
/>
</div>
  );
}


export default MyChat;