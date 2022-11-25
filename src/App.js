import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import SideBar from "./components/SideBar.js";
import Login from "./components/Login.js";
import Chat from "./components/Chat.js";
import { useAuthState} from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Spinner from "react-spinkit";

function App() {

  const [user, loading] = useAuthState(auth);

  if(loading){
    return(
      <AppLoading>
        <AppLoadingContent>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAkVQrUHkNZ4eB1DgG2QiYxqivPocfkMEhQrWVlqTAvQ&s" alt="" />

          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </AppLoadingContent>
      </AppLoading>
    )
  }


  return (
    <Router>
      {!user ?
      <Login /> :
      (
        <>
        <Header />
        <AppBody>
          <SideBar />
        <Routes>
          <Route path="/" exact element={<Chat />} />
        </Routes>
        </AppBody>
    </>
        )}
  
      </Router>
  );
}

export default App;

const AppBody = styled.div`
display: flex;
height: 100vh;
`;
const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;
const AppLoadingContent = styled.div`
text-align: center;
padding-bottom: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

> img {
  height: 100px;
  padding: 20px;
  margin-bottom: 40px;
}
`;
