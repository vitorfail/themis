"use client";
import {  useState } from "react"
import "./index.css"
import Image from "next/image"
export default function Quem(){
    const [membros, setmembros] = useState(721)
    const [cidades, setcidades] = useState(8)
    return(
        <section style={{background:"#f6f5f2"}} className="cont">
            <div id="quem" className="cont2">
                <p className="titulo" style={{width:'100%'}}>Quem nós somos</p>
                <p style={{width:'100%', fontSize:"18px"}}>Conheça a nossa história, os nossos projetos, a 
                    dedicação dos voluntários e parceiros em cada trabalho executado. 
                    Venha fazer parte dessa missão! Junte-se a nós e seja-bem vinda(o)!
                </p>
                <div className="descri">
                    <div className="l1">
                        <div className="info2">
                            <div className="linha2">
                            </div>
                                <p style={{fontSize:"33px"}} className="t">Contribua Conosco</p>
                                <p>O Instituto Themis Furigo, é uma Organização da Sociedade Civil 
                                    (OSC) independente, privada, de interesse público, sem vínculos 
                                    político partidários, fundada em 05/11/2018 CNPJ: 32.064.384/0001-00, 
                                    neste ato representado pela fundadora Themis Furigo dos Santos, 
                                    brasileira. O ITF é uma associação de direito privado, sem fins econômicos,
                                    de caráter organizacional, filantrópico, assistencial,
                                    promocional,
                                    recreativo e educacional, 
                                    com a finalidade de atender a todos que a ela se dirigirem.
                                </p>
                            </div>
                        </div>
                    <div className="l2">
                        <div className="dados">
                            <div className="head">
                                <p>{cidades}</p>
                                <p>Cidade</p>
                            </div>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9 5H11V7H9V5ZM9 9H11V15H9V9ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" fill="black">
                                    
                            </path>
                            </svg>
                        </div>
                        <div className="dados">
                            <div className="head">
                                <p>{membros}</p>
                                <p>Membros</p>
                            </div>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9 5H11V7H9V5ZM9 9H11V15H9V9ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" fill="black">
                                    
                            </path>
                            </svg>                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}