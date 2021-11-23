import Navigation from "./pages/containers/Navigation/Navigation"
import PopupWindow from "./pages/containers/PopupWindow/PopupWindow"
import MainPage from "./pages/containers/MainPage/mainPage"

import News from "./pages/containers/News/News"
import { Route, Routes } from "react-router-dom"


function App() {




  return (
    <div className="App">
     <Navigation/>
     <Routes>
     <Route path='/' element={<MainPage/>} exact />
      <Route path = '/news' element={<News/>}  exact />
     </Routes>
     <PopupWindow/>
    </div>
  )
}

export default App
