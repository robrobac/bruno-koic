import Header from "./components/Header";

import "./App.scss"
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Home />
                <About />
                <Projects />
            </main>
        </div>
    );
}

export default App;
