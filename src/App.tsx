import './App.css'
import {Header} from "./Header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {MyProjects} from "./BestPractices/MyProjects";
import {Relocation} from "./relocation/Relocation";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";

function App() {


    return (
        <div className='App'>
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects />
            <Relocation />
            <Contacts />
            <Footer />


        </div>
    )
}

export default App
