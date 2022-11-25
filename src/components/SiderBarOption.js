import React, { useState }  from 'react'
import styled from 'styled-components';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { enterRoom, selectRoomId } from '../features/appSlice';


const SiderBarOption = ({Icon, title, addChannelOption, id}) => {

  const dispatch = useDispatch();
   const usersCollectionRef = collection(db, "rooms");
  
  const addChannel = async(e) => {
    const channelName = prompt("Please enter the channel name ");

    await addDoc(usersCollectionRef, {name: channelName})
  };


  const selectChannel = () => {
    if(title || id) {
      dispatch(enterRoom({
        channelName: title,
        channelId: id,
      })
      );
    }
  };
  
  return (
    <SiderBarOptionContainer
    onClick={addChannelOption ? addChannel : selectChannel}
    >
      {
        Icon && <Icon fontSize="small" style={{ padding: 10 }} />
      }
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SiderBarOptionChannel>
          <span>#</span> {title}
        </SiderBarOptionChannel>
      )}
    </SiderBarOptionContainer>
  )
}

export default SiderBarOption;

const SiderBarOptionContainer = styled.div`
display: flex;
font-size: 12px;
align-items: center;
padding-left: 2px;
cursor: pointer;

:hover {
  opacity: 0.9;
  background-color: #340e36;
}

> h3 {
  font-weight: 500;
}

> h3 > span {
  padding: 15px;
}
`;
const SiderBarOptionChannel = styled.h3`
font-weight: 300;
padding: 10px 0;
`;