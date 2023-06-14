import React from 'react'

import mixeta from '../images/mixeta.png'
import grobljehorora from '../images/grobljehorora.png'
import nakrajicku from '../images/nakrajicku.png'

import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

import "./Projects.scss"
import { Reveal } from '../helpers/Reveal';

function Projects() {
    return (
        <section className='projects'>
            <h2>Projekti</h2>
            <Reveal>
            <div className="project">
                <div className="project-image">
                    <img src={mixeta} alt='mixeta'></img>
                </div>
                <div className="project-about">
                    <div className="about-title">
                        <div className="project-title">
                            <h3>Mixeta.net</h3>
                            <i>Glazbeni portal (urednik/novinar)</i>
                        </div>
                        <div className="icons">
                            <a href="https://mixeta.net/" target='_blank' rel="noreferrer">
                                <LanguageIcon fontSize='large' className="icon"/>
                            </a>
                            <a href="https://www.instagram.com/mixetagram" target='_blank' rel="noreferrer">
                                <InstagramIcon fontSize='large' className="icon"/>
                            </a>
                            <a href="https://www.facebook.com/mixeta.net" target='_blank' rel="noreferrer">
                                <FacebookOutlinedIcon fontSize='large' className="icon"/>
                            </a>
                        </div>
                    </div>
                    <p>
                        Mixeta je novinarsko - umjetnički projekt koji djeluje u sklopu Udruge Mixeta Media i istoimenog glazbenog portala na web adresi mixeta.net. Promocija i pisanje o glazbi i ostalim oblicima umjetnosti, implementiranje novinarstva u umjetnost, praćenje kulture na ovim područjima te kontinuirano razvijanje kulturne scene i kulturne svijesti temeljni su čimbenici po kojima se projekt vodi. 
                        </p>
                        <p>
                         Mixeta je, između ostalog, mjesto na kojemu mladi, neafirmirani novinari imaju priliku pisati o umjetnosti te na taj način proći osnovnu novinarsku praksu. Također, Mixeta, konstantno i aktivno promovira mlade glazbenike te glazbeno stvaralaštvo svih oblika putem razgovora s umjetnicima, reportažama s glazbenih događaja, recenzijama glazbenih izdanja te praćenjem aktualnosti u svijetu glazbe i filma.
                    </p>
                </div>
            </div>
            </Reveal>
            <hr className='divider'></hr>
            <Reveal>
            <div className="project">
                <div className="project-image">
                    <img src={grobljehorora} alt='groblje horora'></img>
                </div>
                <div className="project-about">
                    <div className="about-title">
                        <div className="project-title">
                            <h3>Groblje Horora</h3>
                            <i>Osvrti na filmove</i>
                        </div>
                        <div className="icons">
                            <a href="https://blog.dnevnik.hr/recenzijefilmova/" target='_blank' rel="noreferrer">
                                <LanguageIcon fontSize='large' className="icon"/>
                            </a>
                            <a href="https://www.facebook.com/recenzijefilmova.blog.hr" target='_blank' rel="noreferrer">
                                <FacebookOutlinedIcon fontSize='large' className="icon"/>
                            </a>
                        </div>
                    </div>
                    <p>
                        Blog "Groblje horrora" napravljen je negdje u lipnju 2007. godine, a njegova namjena je prikaz dnevnika autora koji kako pogleda neki horror, tako baci omanji osvrt ili recenziju na određeni film strave ili seriju. 600+ obrađenih filmova - dobro došli!
                    </p>
                </div>
            </div>
            </Reveal>
            <hr className='divider'></hr>
            <Reveal>
            <div className="project">
                <div className="project-image">
                    <img src={nakrajicku} alt='na krajicku jezika'></img>
                </div>
                <div className="project-about">
                    <div className="about-title">
                        <div className="project-title">
                            <h3>Na krajičku jezika</h3>
                            <i>Poezija</i>
                        </div>
                        <div className="icons">
                            <a href="https://www.facebook.com/NaKrajickuJezika" target='_blank' rel="noreferrer">
                                <FacebookOutlinedIcon fontSize='large' className="icon"/>
                            </a>
                        </div>
                    </div>
                    <p>
                        Pjesnička skupina Na krajičku jezika nastala je u svibnju 2013. godine, s ciljem afirmacije poezije. Trenutno skupinu čine Mislav Bartoš, Slavko Babić i Bruno Koić, koji održavaju različite oblike pjesničkih događaja diljem Slavonije i Baranje, čitajući i izvodeći autorsku, ali i poeziju poznatih autora. Ideja skupine je također promocija i davanje prostora svim ostalim, posebice mlađim autorima na internetskim platformama.
                    </p>
                </div>
            </div>
            </Reveal>
        </section>
    )
}

export default Projects
