import "./index.css"
import Image from "next/image"
export default function Cabecalho(){

    return(
        <header>
            <span className="icon">
                <Image height={130} width={100} src="/img/icon.jpg"></Image>
            </span>
            <div className="content"></div>
        </header>
    )
}