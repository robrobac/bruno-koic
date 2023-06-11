import React from 'react'

import "./About.scss"

import profilna from "../images/profilna.png";

function About() {
    return (
        <section className='about'>
            <div className="about-content">
                <h2>O Meni</h2>
                <br></br>
                <p>
                Bruno Koić rođen je 1993. godine u Osijeku. Pisanjem se bavi od 12. godine, a prvu zbirku pjesama "Umovina" objavljuje sa 17 godina. Tijekom studija pridružuje se pjesničkoj skupini "Na krajičku jezika", suosniva udrugu i glazbeni portal Mixeta.net gdje radi kao urednik i novinar, a drugu zbirku pjesama "Versionar" objavljuje koncem 2017. godine.
                <br></br>
                <br></br>
                Magistar je medijske kulture i kulturologije, radi u civilnom sektoru, preciznije u DKolektivu - organizaciji za društveni razvoj, aktivan je član i suosnivač nekoliko osječkih inicijativa poput platforme mladih Mladforma. Oženjen je i ima mačka Arthura.
                <br></br>
                <br></br>
                Treća zbirka u planu je uskoro.
                </p>
            </div>
            <div className="profile-image">
                <img src={profilna} alt='profile'></img>
            </div>
            
        </section>
    )
}

export default About
