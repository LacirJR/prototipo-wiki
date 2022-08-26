import './body.css'

type PropsButton = {
    nomeClasse? : string;
    textoBotao? : string;
}

const Botao = ({nomeClasse, textoBotao}: PropsButton) => {
    return(
        <>
        <button className={nomeClasse}>{textoBotao}</button>
        </>
    )
}




export const BodyPost = () =>{


    return (
        <div className="containerPosts">
            <div className='containerBody'>
                <div className="tituloPagina">
                    <h1>Fórum</h1>
                    <div className='botoesTopoContainer'>
                        <Botao nomeClasse={'novoPostButton'} textoBotao={'+ NOVO POST'}/>
                    </div>
                </div>
                <hr/>
             </div>
        </div>
    )

}