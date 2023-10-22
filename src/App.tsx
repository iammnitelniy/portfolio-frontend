import './App.css';
import {Header} from './Header/Header';
import {Main} from './main/Main';
import {Skills} from './skills/Skills';
import {MyProjects} from './BestPractices/MyProjects';
import {Relocation} from './relocation/Relocation';
import {Contacts} from './contacts/Contacts';
import {Footer} from './footer/Footer';
import React from "react";

function App() {
    return (
        <div className='App'>
            <header className='header'>
                <div className='container'>
                    <Header />

                    {/*<NavState>*/}
                    {/*    <MainMenu />*/}
                    {/*</NavState>*/}

                </div>
            </header>
            <main id='homeId' className='main'>
                <div className='container'>
                    <Main />
                </div>
            </main>
            <section id='skillsId' className='skills'>
                <div className='container'>
                    <Skills />
                </div>
            </section>
            <section id='projectsId' className='my-projects'>
                <div className='container'>
                    <MyProjects />
                </div>
            </section>
            <section id='relocationId' className='relocation'>
                <div className='container'>
                    <Relocation />
                </div>
            </section>
            <section id='contactsId' className='contacts'>
                <div className='container'>
                    <Contacts />
                </div>
            </section>
            <footer id='footerId' className='footer'>
                <div className='container'>
                    <Footer />
                </div>
            </footer>
        </div>
    );
}

export default App;