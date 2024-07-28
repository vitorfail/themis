"use client";
import { useState } from "react"
import "./index.css"
import Image from "next/image"
import Um from "./um.jpg"
import dois from "./2.png"
import tres from "./3.jpg"
import quatro from "./4.jpg"
import quinto from "./5.jpg"
import seis from "./6.png"
import sete from "./7.jpg"
import oito from "./8.jpg"
export default function Noticias(){
    return(
        <section id="not" className="cont">
            <section className="cont2">
                <p style={{fontWeight:"300",width:"100%", fontSize:"30px", marginTop:"50px", marginBottom:"90px"}}>Veja nossos projetos:</p>
                <div style={{width:"100%", display:"flex",justifyContent:"space-between", flexWrap:"wrap"}}>
                    <div className="card">
                        <Image src={Um} onError={(e) => console.error("Erro ao carregar a imagem", e)} height={300} width={200}></Image>
                        <p style={{fontWeight:"300", fontSize:"27px"}}>Projeto pontual realizado 
                        em 2020 através da parceria com o Instituto RME (Rede Mulher Empreendedora)</p>
                        <p style={{fontSize:"18px"}}>São Paulo e outros Estados do Brasil participaram através da nossa ONG.
                        </p>
                    </div>
                    <div className="card">
                        <Image src={dois} onError={(e) => console.error("Erro ao carregar a imagem", e)} height={300} width={200}></Image>
                        <p style={{fontWeight:"300", fontSize:"27px"}}>O objetivo deste projeto é gerar renda
                         para mulheres em vulnerabilidade e capacitá-las</p>
                        <p style={{fontSize:"18px"}}>Oficina CurioLook</p>
                    </div>
                    <div className="card">
                        <Image src={tres} onError={(e) => console.error("Erro ao carregar a imagem", e)} height={300} width={200}></Image>
                        <p style={{fontWeight:"300", fontSize:"27px"}}>Projeto pontual realizado 
                        em 2020 através da parceria com o Instituto RME (Rede Mulher Empreendedora)</p>
                        <p style={{fontSize:"18px"}}>São Paulo e outros Estados do Brasil participaram através da nossa ONG.
                        </p>
                    </div>
                </div>
            </section>
        </section>
    )
}