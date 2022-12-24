import { PostHomePage } from "./Post/post"
import './posts.css'

export const Posts = () => {

    

    return (<div className="Posts">
    <PostHomePage tag="c#" titulo="Primeiro post do forum" description="Somente para ilustrar uma pergunta na pagina." usuario="Lacir"/>
    <PostHomePage tag="JS" titulo="Como iniciar no Javascript?" description="Somente para ilustrar uma pergunta na pagina com uma descrição bem maior para ocupar mais espaço da tela e ver a quebra de linha que irá ocorrer." usuario="Marcelo"/>
    <PostHomePage tag="c#" titulo="Outro post do forum" description="Somente para ilustrar uma pergunta na pagina." usuario="Lacir"/>
    <PostHomePage tag="JS" titulo="Como iniciar no Javascript?" description="Somente para ilustrar uma pergunta na pagina." usuario="Marcelo"/>
    <PostHomePage tag="c#" titulo="Primeiro post do forum" description="Somente para ilustrar uma pergunta na pagina." usuario="Lacir"/>
    <PostHomePage tag="JS" titulo="Como iniciar no Javascript?" description="Somente para ilustrar uma pergunta na pagina." usuario="Marcelo"/>
    <PostHomePage tag="c#" titulo="Outro post do forum" description="Somente para ilustrar uma pergunta na pagina." usuario="Lacir"/>
    <PostHomePage tag="JS" titulo="Como iniciar no Javascript?" description="Somente para ilustrar uma pergunta na pagina." usuario="Marcelo"/>

    </div>)

}