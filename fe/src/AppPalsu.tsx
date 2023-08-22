import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Container } from '@chakra-ui/react'
import Home from './component/Home';
import Detail from "./feacure/threacd/component/Detail";
import Profile from "./component/Profile";
import Register from "./feacure/login/Register";
import './st.css'
import Layoute from "./component/Layoute";
import LayouteRight from "./component/LayoutRight";
import Login from "./feacure/login/Login";


function App() {
  const isLoginPage = window.location.pathname === "/login";
  const isRegisterPage = window.location.pathname === "/register";

  return (
    <>
      <BrowserRouter>
        <Container maxW='container.2xl' display={'flex'} justifyContent={"space-between"}>
          <Box flex={'0.5'}>
            {
              !isLoginPage && !isRegisterPage &&
              <Box color={'black'} position={'fixed'}>
                <Layoute />
              </Box>
            }
          </Box>
          <Box color={'black'} flex={'1'}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path='detail/:id' element={<Detail />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </Box>
          <Box flex={'0.5'} >
            {
              !isLoginPage && !isRegisterPage &&
              <Box color={'black'}>
                <LayouteRight />
              </Box>
            }
          </Box>
        </Container>
      </BrowserRouter>
    </>
  )
}


export default App
