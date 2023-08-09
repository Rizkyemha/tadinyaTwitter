import { Route, Routes, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import LoadingBar from "react-redux-loading-bar";
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import DetailPage from "./pages/DetailPage"
import { useEffect } from "react"
import { asyncPreloadProcess } from "./states/isPreload/action"
import { asyncUnsetAuthUser } from "./states/authUser/action"

export default function App() {

  const {
    authUser = null,
    isPreload = false
  } = useSelector((states) => states)

  const threads = useSelector((states) => states.threads)
  const users = useSelector((states) => states.users)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncPreloadProcess())
  }, [dispatch])

  const signOut = () => {
    dispatch(asyncUnsetAuthUser())
  }

  if(!isPreload) {
    return (
      <LoadingBar />
    )
  }

  function NavBar() {
    if (authUser === null) {
      return (
        <div className="header_body">
          <nav>
            <ul>
              <li>
                <Link to="/login">Masuk</Link>
              </li>
              <li>
                <Link to="/register">Daftar</Link>
              </li>
            </ul>
          </nav>
        </div>
      )
    }

    return (
      <div className="header_body">
        <nav>
          <ul>
            <li>Hai, {authUser.name}</li>
            <li>
              <button className="logout_button" onClick={signOut}>Keluar</button>
            </li>
          </ul>
        </nav>
      </div>
    )
  }

  return (
    <>
      <div className="app_container">
      <LoadingBar />
        <header>
          <h1 className="header_title"><Link to="/">TadinyaTwitter</Link></h1>
          {NavBar()}
        </header>
        <main>
          <Routes>
            <Route path="/" element={ <HomePage threads={threads} users={users}/> } />
            <Route path="/login" element={ <LoginPage authUser={authUser} /> } />
            <Route path="/register" element={ <RegisterPage authUser={authUser} /> } />
            <Route path="/detail/:id" element={ <DetailPage /> }></Route>
          </Routes>
        </main>
        <footer>@TadinyaTwitter</footer>
      </div>
    </>
  )
}


