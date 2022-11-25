
import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from "./SiderBarOption.js";
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.js';
import { useAuthState} from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const SideBar = () => {

  const [user] = useAuthState(auth)

  const [channels, setChannel] = useState([]);
  const usersCollectionRef = collection(db, "rooms");

  useEffect(() => {
    const getChannels = async () => {
      const data = await getDocs(usersCollectionRef);
      setChannel(data.docs.map((doc) => (
          {...doc.data(), id: doc.id}
      )))
    };

    getChannels();
 
  }, [])


  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Slack-Clone</h2>
          <h3>
            <FiberManualRecordIcon />
           {user.displayName}
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>

      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved Items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & user Groups" />
      <SidebarOption Icon={AppsIcon} title="App" />
      <SidebarOption Icon={FileCopyIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />

      {channels.map((channel) => {
        return (
        <SidebarOption key={channel.id} id={channel.id} title={channel.name} />    
        );
        })}

    </SidebarContainer>
  )
}

export default SideBar;

const SidebarContainer = styled.div`
color: white;
background-color: var(--slack-color);
flex: 0.3;
border-top: 1px solid #49274b;
max-width: 260px;
margin-top: 60px;

> hr {
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #49274b;
}
`;
const SidebarHeader = styled.div`
display: flex;
border-bottom: 1px solid #49274b;
padding: 13px;

>.MuiSvgIcon-root {
  padding: 8px;
  color: #49274b;
  font-size: 18px;
  background-color: white;
  border-radius: 999px
}
`;
const SidebarInfo = styled.div`
flex: 1;

>h2 {
  font-size: 15px;
  font-weight: 900;
  margin-bottom: 5px;
}

>h3 {
  display: flex;
  font-size: 13px;
  font-weight: 400;
  align-items; center;
}

> h3 > .MuiSvgIcon-root {
  font-size: 14px;
  margin-top: 1px;
  margin-right: 2px;
  color: green;
}
`;