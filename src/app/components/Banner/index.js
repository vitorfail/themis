"use client";
import {useEffect, useState } from "react"
import "./index.css"
import Image from "next/image"
export default function Banner(props){
    const imagens = ["/img/nature.jpg", "/img/mulher.jpg", "/img/family.jpg"]
    const [id, setid] = useState(0)

    return(
        <div className="conteudo">
            <div className="banner">
                <div className="banners">
                    {imagens.map((item, index) => (
                        <span className="painel" key={index} id={index == id?"show":""} style={{background:"url("+item+")", backgroundSize:"cover", backgroundRepeat:"none"}}></span>
                    ))}
                </div>
                <div className="pontos">
                    {imagens.map((item, index) =>(
                        <span onClick={(e) => setid(index)} id={index ==id?"ponto":""} key={index}></span>
                    ))}
                </div>
            </div>
            <div className="barra">
                <p>Conheça a nossa história, os nossos projetos, a dedicação dos voluntários e parceiros em cada trabalho executado.</p>
            </div>
        </div>
    )
}
