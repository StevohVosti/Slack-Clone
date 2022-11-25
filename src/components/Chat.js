import { InfoOutlined, StarBorderOutlined } from '@mui/icons-material';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectRoomId } from '../features/appSlice';
import { selectRoomName} from '../features/appSlice';
import ChatInput from "../components/ChatInput.js";
import Message from "../components/Message.js";
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';

const Chat = () => {

  const chatRef = useRef(null);
  const channelId = useSelector(selectRoomId); 
  const channelName = useSelector(selectRoomName); 
  const [messageData, setMessageData] = useState([]); 

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
    
  }, [])

  useEffect(() => {
    if(channelId){
      onSnapshot(
        query(
          collection(db, "rooms", channelId, "messages"),
          orderBy("timestamp", "asc")
          ),
          (snapshot) => setMessageData(snapshot.docs)
      );
    }
  }, [channelId, setMessageData])

  // console.log(messageData)
  
  return (
    <ChatContainer>
      <>
      <Header>
        <HeaderLeft>
          <h4><strong>#{channelName}</strong></h4>
          <StarBorderOutlined />
        </HeaderLeft>

        <HeaderRight>
          <p>
            <InfoOutlined /> Details
          </p>
        </HeaderRight>
      </Header>

      <ChatMessages>
        {messageData.map((post) => (
          <Message 
          key={post.id}
          user={post?.data().user}
          message={post?.data().message}
          userImage={post?.data().userImage}
          timestamp={post?.data().timestamp}
          />

        ))}
    
      <ChatBottom ref={chatRef}/>
      </ChatMessages>

      <ChatInput  channelId={channelId} path={`rooms/${channelId}/messages/`} />
      </>
    </ChatContainer>
  )
}


export default Chat;

const ChatContainer = styled.div`
flex: 0.7;
flex-grow: 1;
overflow-y: scroll;
margin-top: 60px;
`;

const Header = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
display: flex;
align-items: center;
> h4 {
  display: flex;
  text-transform: lowercase;
}
> h4 >.MuiSvgIcon-root {
  margin-left: 20px;
  font-size: 18px;
}
`;
const HeaderRight = styled.div`
> p {
  display: flex;
  align-items: center;
  font-size: 14px;
}

> p >.MuiSvgIcon-root {
  margin-right: 5px !important;
  font-size: 16px;
}
`;
const ChatMessages = styled.div`

`;
const ChatBottom = styled.div`
padding-bottom: 200px;
`;
