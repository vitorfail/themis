"use client";
import { useState } from "react"
import "./index.css"
import Image from "next/image"
export default function Banner2(){
    return(
        <section id="info" style={{background:"url(/img/back.jpg)", backgroundRepeat:"no-repeat", backgroundSize:"cover"}} className="cont">
            <div style={{height:"500px",display:"flex", justifyContent:"flex-start", alignItems:"center"}} className="cont2">
                <div className="info">
                    <div className="linha"></div>
                    <p>Contribua Conosco</p>
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
                    <button>Faça um doação</button>
                </div>
            </div>
        </section>
    )
}