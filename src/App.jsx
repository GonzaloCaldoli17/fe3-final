import { BrowserRouter, Routes ,Route } from "react-router-dom"
import { useState } from "react";
import ThemeContext, {themes} from "./context";
import Layout from "./Components/Layout";
import Footer from "./Components/Footer";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import LandingPage from './Routes/Landing Page/LandingPage'


function App() {

  const [theme, setTheme] = useState(themes.light)

  const handleChangeTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark)
  }


  return (
      <div className="App">
        <ThemeContext.Provider value={{theme, handleChangeTheme}}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="home" element={<Home/>}/>
            <Route path="contacto" element={<Contact/>}/>
            <Route path="favs" element={<Favs/>}/>
            <Route path="/dentista/:id" element={<Detail/>} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ThemeContext.Provider>
      </div>
  );
}

export default App;