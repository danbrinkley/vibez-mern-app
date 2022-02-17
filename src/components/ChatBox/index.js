import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageInputSmall, VirtualizedMessageList, Window } from 'stream-chat-react';

// import 'stream-chat-react/dist/css/index.css';

const chatClient = StreamChat.getInstance('achdd329h4sq');
const userToken = '5pr74vkd4u6mzhexrq7u6v8cys37nv7dqepxhr4vjcstac932xp2s29chv5wqxdr';

chatClient.connectUser(
  {
    id: 'dbrink',
    name: 'rocc24',
    image: 'https://getstream.io/random_png/?id=falling-silence-0&name=falling',
  },
  userToken,
);

const channel = chatClient.channel('livestream', 'vibez', {
  image: 'https://goo.gl/Zefkbx',
  name: 'Welcome to Vibez',
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
