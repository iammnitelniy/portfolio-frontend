import './App.css';
import {Header} from './Header/Header';
import {Main} from './main/Main';
import {Skills} from './skills/Skills';
import {MyProjects} from './BestPractices/MyProjects';
import {Relocation} from './relocation/Relocation';
import {Contacts} from './contacts/Contacts';
import {Footer} from './footer/Footer';

function App() {
    return (
        <div className='App'>
            <header className='header'>
                <div className='container'>
                    <Header />
                </div>
            </header>
            <main className='main'>
                <div className='container'>
                    <Main />
                </div>
            </main>
            <section className='skills'>
                <div className='container'>
                    <Skills />
                </div>
            </section>
            <section className='my-projects'>
                <div className='container'>
                    <MyProjects />
                </div>
            </section>
            <section className='relocation'>
                <div className='container'>
                    <Relocation />
                </div>
            </section>
            <section className='contacts'>
                <div className='container'>
                    <Contacts />
                </div>
            </section>
            <footer className='footer'>
                <div className='container'>
                    <Footer />
                </div>
            </footer>
        </div>
    );
}

export default App;