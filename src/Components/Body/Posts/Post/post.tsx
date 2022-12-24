import './post.css'

type PropPost = {
    titulo: string;
    description: string;
    tag:string;
    usuario: string;
}

export const PostHomePage = ({titulo, description, tag, usuario}: PropPost) => {


    return (
    <div className="postSingle">
        <div className='ColunaIcone'>
            <button className="IconPost">{tag.toLocaleUpperCase()}</button>
        </div>
        <div className='ConteudoPost'>
            <h3 className="titulo">{titulo}</h3>
            <div className='rowDescriptionAndButton'>
            <p className="description">{description}</p>
            <button className='CliqueAquiButton'>VER POST</button>
            </div>
            <div className='footerPost'>
                <p className='usuario'>{usuario}</p>
                <p className='respostas'>23 Respostas</p>
                <button className="tag">{tag.toLocaleUpperCase()}</button>
            </div>
        </div>
    </div>
    )
}