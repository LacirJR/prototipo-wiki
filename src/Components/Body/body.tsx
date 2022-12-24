import './body.css'
import { Posts } from './Posts/posts';

type PropsButton = {
    nomeClasse? : string;
    textoBotao? : string;
}

const BarraDePesquisa = () => {
    return (
        <div className='searchBox'>
         <img className='imgSearch' src='../img/search-solid.svg'/>
         <input type={'text'} id='searchPost' placeholder='Pesquisar'/>
        </div>
    )
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
                    <h1>Postagens</h1>
                    <div className='botoesTopoContainer'>
                        <BarraDePesquisa/>
                        <Botao nomeClasse={'novoPostButton'} textoBotao={'+ NOVO POST'}/>
                    </div>
                </div>
                <hr/>
                <Posts/>
             </div>
        </div>
    )

}