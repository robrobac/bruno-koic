import React from 'react'

import "./About.scss"

import profilna from "../images/profilna.png";
import { Reveal } from '../helpers/Reveal';

function About() {
    return (
        <section className='about'>
            <div className="about-content">
            <Reveal>
                <h2 className='about-title'>O meni</h2>
                <p>
                    Bruno Koić rođen je 1993. godine u Osijeku. Pisanjem se bavi od 12. godine, a prvu zbirku pjesama "Umovina" objavljuje sa 17 godina. Tijekom studija pridružuje se pjesničkoj skupini "Na krajičku jezika", suosniva udrugu i glazbeni portal Mixeta.net gdje radi kao urednik i novinar, a drugu zbirku pjesama "Versionar" objavljuje koncem 2017. godine.
                </p>
                <p>
                    Magistar je medijske kulture i kulturologije, radi u civilnom sektoru, preciznije u DKolektivu - organizaciji za društveni razvoj, aktivan je član i suosnivač nekoliko osječkih inicijativa poput platforme mladih Mladforma. Oženjen je i ima mačka Arthura.
                </p>
                <p>
                    Treća zbirka u planu je uskoro.
                </p>
                </Reveal>
            </div>
            <div className="profile-image">
                <Reveal>
                <img src={profilna} alt='profile'></img>
                </Reveal>
            </div>
            
        </section>
    )
}

export default About
