import "./App.css"
import { Footer, Header } from "./components"
import { Home } from "./pages"
import { LayoutContainer } from "./styled-components"


const App = ():JSX.Element => {



  return (
    <>
     <Header/>
     <LayoutContainer>
        <Home/>
     </LayoutContainer>
     <Footer/>
    </>
  )
}

export default App
