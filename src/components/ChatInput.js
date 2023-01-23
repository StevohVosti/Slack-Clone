import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { selectRoomName } from "../features/appSlice";
import { useSelector } from "react-redux";

const ChatInput = ({ channelId, path }) => {
  const [user] = useAuthState(auth);
  const [input, setInput] = useState("");
  const channelName = useSelector(selectRoomName);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    const docRef = await addDoc(collection(db, path), {
      message: input,
      user: user.displayName,
      userImage: user.photoURL,
      timestamp: serverTimestamp(),
    });
    // console.log(docRef);
    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
