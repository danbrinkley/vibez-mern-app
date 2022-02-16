import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageInputSmall, VirtualizedMessageList, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';

const chatClient = StreamChat.getInstance('dz5f4d5kzrue');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZmFsbGluZy1zaWxlbmNlLTAiLCJleHAiOjE2NDUwMjEzNTJ9.pQPqPVmFYX0vB3XD3bgI-Zyov7uyHOPXET30V-JmBis';

chatClient.connectUser(
  {
    id: 'falling-silence-0',
    name: 'falling',
    image: 'https://getstream.io/random_png/?id=falling-silence-0&name=falling',
  },
  userToken,
);

const channel = chatClient.channel('livestream', 'spacex', {
  image: 'https://goo.gl/Zefkbx',
  name: 'SpaceX launch discussion',
});

const ChatBox = () => (
  <Chat client={chatClient} theme='livestream dark'>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader live />
        <VirtualizedMessageList />
        <MessageInput Input={MessageInputSmall} focus />
      </Window>
    </Channel>
  </Chat>
);

export default ChatBox;
