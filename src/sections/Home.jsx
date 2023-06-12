import React from 'react'

import "./Home.scss"

import umovinacover from "../images/umovinacover.jpg";
import versionarcover from "../images/versionarcover.png";
import logo from "../images/logo.svg";

function Home() {
    return (
        <section className='home'>
            <div className="title">
                <img src={logo} alt='logo'></img>
            </div>
            <div className="books">
                <div className='book'>
                    <img src={umovinacover} alt='umovina cover'></img>
                    <div className="book-info">
                        <h3>"Umovina"</h3>
                        <p>Zbirka pjesama</p>
                        <p>2012.</p>
                        <p>Izdavač:</p>
                        <p>Čarobni tim d.o.o.</p>
                        <br></br>
                    </div>
                    <button>Download PDF</button>
                </div>
                <div className='book'>
                    <img src={versionarcover} alt='versionar cover'></img>
                    <div className="book-info">
                        <h3>"Versionar"</h3>
                        <p>Zbirka pjesama</p>
                        <p>2017.</p>
                        <p>Izdavač:</p>
                        <p>Matica hrvatska ogranak Osijek</p>
                    </div>
                    <button>Download PDF</button>
                </div>
            </div>
        </section>
    )
}

export default Home
