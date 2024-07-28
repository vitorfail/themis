"use client";
import { useState } from "react"
import "./index.css"
import Image from "next/image"
import Um from "./um.jpg"
export default function Noticias(){
    return(
        <section id="not" className="cont">
            <section className="cont2">
                <p style={{fontWeight:"300",width:"100%", fontSize:"30px", marginTop:"50px", marginBottom:"90px"}}>Veja nossos projetos:</p>
                <div style={{width:"100%", display:"flex",justifyContent:"space-between", flexWrap:"wrap"}}>
                    <div className="card">
                        <Image src={Um} onError={(e) => console.error("Erro ao carregar a imagem", e)} height={300} width={200}></Image>
                        <p style={{fontWeight:"300", fontSize:"30px"}}>Heróis sem máscaraas</p>
                        <p style={{fontSize:"18px"}}>Projeto pontual realizado em 2020 através da parceria
                             com o Instituto RME (Rede Mulher Empreendedora) com apoio dos Bancos Itaú, 
                             Santander e Bradesco onde produzimos em plena pandemia 2 milhões de máscaras o 
                             que gerou uma movimentação na economia de 5 milhões, gerando renda direta para 1.000 
                             costureiros (85% mulher).
                        </p>
                    </div>
                </div>
            </section>
        </section>
    )
}