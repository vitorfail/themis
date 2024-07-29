"use client";
import { useState } from "react"
import "./index.css"
import Image from "next/image"
export default function Quem(){
    const [membros, setmembros] = useState(721)
    const [cidades, setcidades] = useState(8)
    return(
        <section style={{background:"#f6f5f2",height:"700px"}} className="cont">
            <div id="quem" className="cont2">
                <p className="titulo" style={{width:'100%'}}>Quem nós somos</p>
                <p style={{width:'100%'}}>Conheça a nossa história, os nossos projetos, a 
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
                            <p>{cidades}</p>
                            <p>Cidade</p>
                        </div>
                        <div className="dados">
                            <p>{membros}</p>
                            <p>Membros</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}