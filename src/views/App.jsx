import "../layout/Reset.css"
import "../layout/AllCSS.css";
import { BrowserRouter } from "react-router-dom";
import Header from "../layout/Header";
import Main from "../layout/Main";
import Footer from "../layout/Footer";

function App(){
    return(
        <>
        <BrowserRouter>
            <Header/>
            <Main/>
            <Footer/>
        </BrowserRouter>
        </>
    )
}

export default App;