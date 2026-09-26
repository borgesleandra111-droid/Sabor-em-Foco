import { useEffect, useState } from 'react'
import { buscarDetalhesReceita, extrairIngredientes } from '../api/mealdb'

function DetalheReceita({ idReceita, onFechar }) {
    const [receita, setReceita] = useState(null)
    const [carregando, setCarregando] = useState(true)
    useEffect(() => {
        buscarDetalhesReceita(idReceita).then((dados) => {
            setReceita(dados)
            setCarregando(false)
        })        
    }, [idReceita])
    if (carregando) {
        return (
            <div className="detalhe-overlay">
                <div className="detalhe-conteudo">
                    <p>Carregando detalhes...</p>

                </div>
            </div>
        )
    }
    if (!receita) {
        return (
            <div className="detalhe-overlay">
                <div className="detalhe-conteudo">
                    <p>Não foi possível carregar essa receita.</p>
                    <button onClick={onFechar}>Fechar</button>
                </div>
            </div>
        )
    }
    const ingredientes = extrairIngredientes(receita)

    return(
        <div className="detalhe-overlay" onClick={onFechar}>
            <div className="detalhe-conteudo" onClick={(e) => e.stopPropagation()}>
                <button className="botao-fechar" onClick={onFechar}>X</button>
                <h2>{receita.strMeal}</h2>
                <img src={receita.strMealThumb} alt={receita.strMeal} />
                <p><strong>Categoria:</strong> {receita.strCategory}</p>
                <p><strong>Origem:</strong> {receita.strArea} </p>
                <h3>Ingredientes</h3>
                <ul>
                    {ingredientes.map((item, indice) => (
                        <li key={indice}>{item}</li>

                    ))}
                </ul>
                <h3>Modo de preparo</h3>
                <p className="instrucoes">{receita.strInstructions} </p>
            </div>
        </div>
    )
}

export default DetalheReceita