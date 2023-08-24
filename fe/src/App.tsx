
import { Routes, Route, useNavigate, Outlet, Navigate } from "react-router-dom";
// import Layoute from './component/Layoute';
import Detail from "./feacure/threacd/component/Detail";
// import Profile from "./component/Profile";
import './st.css'
import Register from "./feacure/login/Register";
import Dhasboard from "./component/Dhasboard";
import Login from "./feacure/login/Login";
import { ApiData, SetAuthToken } from "./lib/Api";
import { useEffect, useState } from "react";
import Followers from "./component/Followers";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_CHECK, AUTH_ERROR } from "./store/rootReduc";
import Profile from "./component/Profile";
import { RootState } from "./store/types/rootState";

// import LayouteRight from "./component/LayoutRight";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const auth = useSelector((state: RootState) => state.auth)
  // console.log("ini loginsssssssssssssssssssssssssssssssssssss", auth)
  const dispatch = useDispatch()
  const authCheck = async () => {
    try {
      SetAuthToken(localStorage.token)
      const response = await ApiData.get(`/check`)
      // console.log("berhasilllllllllll Login", response)
      dispatch(AUTH_CHECK(response.data.user))

      setIsLoading(false)
    } catch (error) {
      localStorage.removeItem("token")
      dispatch(AUTH_ERROR())
      setIsLoading(false)
      navigate("/login")
      // console.log("ini error", error)
    }

  }

  useEffect(() => {
    if (localStorage.token) {
      authCheck()
    }

    else {
      setIsLoading(false)
      navigate("/login")
    }
  }, [])

  // const [sudahLogin, setSudahLogin] = useState(true)

  const IslsudahLogin = () => {
    SetAuthToken(localStorage.token)

    if (!auth.username) {
      return <Navigate to="/login" />
    } else {
      return <Outlet />
    }
  }

  function BelomLogin() {
    SetAuthToken(localStorage.token)

    if (auth.username) {
      return <Navigate to="/" />
    } else {
      return <Outlet />
    }
  }

  return (
    <>
      {
        isLoading ? null :
          <Routes >

            
            <Route path="/" element={<IslsudahLogin />}>
              <Route path="/" element={<Dhasboard />} />
              <Route path="folowers" element={<Followers />} />
              <Route path='detail/:id' element={<Detail />} />
              <Route path='profile' element={<Profile />} />
            </Route>
            <Route path='/' element={<BelomLogin />}>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Route>
            
          </Routes>
      }
    </>
  )
}

export default App
