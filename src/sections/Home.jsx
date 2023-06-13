import React from 'react'

import "./Home.scss"

import umovinacover from "../images/umovinacover.jpg";
import versionarcover from "../images/versionarcover.png";
import logo from "../images/logo.svg";
import { Reveal } from '../helpers/Reveal';
const versionarpdf = "https://drive.google.com/file/d/1BoFde79xKoVOGxGm-7dDiIhMHbSLM93P/view?usp=sharing";
const umovinadownload = "https://drive.google.com/file/d/1anvlBSmhTmILyWBWfIXrMRe22isZb4hE/view?usp=sharing"
const versionardownload = "https://drive.google.com/file/d/12elyEIEXC2vCTtKfVbD4YKBHaRySSiYP/view?usp=sharing"

function Home() {
    return (
        <section className='home'>
            
            <div className="title">
                <img src={logo} alt='logo'></img>
            </div>
            
            <div className="books">
                <Reveal>
                <div className='book'>
                    <a className='booklink' href={umovinadownload} target='_blank' rel="noreferrer">
                        <img className='umovina' src={umovinacover} alt='umovina cover'></img>
                    </a>
                    <div className="book-info">
                        <h3>"Umovina"</h3>
                        <p>Zbirka pjesama</p>
                        <p>2012.</p>
                        <p>Izdavač:</p>
                        <p>Čarobni tim d.o.o.</p>
                        <br></br>
                    </div>
                    <button className='inactive' disabled>Download PDF</button>
                </div>
                </Reveal>
                <Reveal>
                <div className='book'>
                    <a className='booklink' href={versionardownload} target='_blank' rel="noreferrer">
                        <img className='versionar' src={versionarcover} alt='versionar cover'></img>
                    </a>
                    <div className="book-info">
                        <h3>"Versionar"</h3>
                        <p>Zbirka pjesama</p>
                        <p>2017.</p>
                        <p>Izdavač:</p>
                        <p>Matica hrvatska ogranak Osijek</p>
                    </div>
                    <a href={versionarpdf} target='_blank' rel="noreferrer">
                        <button>Download PDF</button>
                    </a>
                </div>
                </Reveal>
            </div>
            
        </section>
        
    )
}

export default Home
