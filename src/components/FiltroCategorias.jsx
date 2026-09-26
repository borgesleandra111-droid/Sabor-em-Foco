import { useEffect, useState } from 'react'
import {listarCategorias } from '../api/mealdb'

function FiltroCategorias({ categoriaSelecionada, onSelecionarCategoria}) {
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        listarCategorias().then(setCategorias)
    }, [])

    return(
        <div className="filtro-categorias">
            <button
            className={categoriaSelecionada === '' ? 'ativo' : ''}
            onClick={() => onSelecionarCategoria('')}
            >
                Todas
            </button>
             {categorias.map((categoria)=> (
                <button
                key={categoria.idCategory}
                className={categoriaSelecionada ===  categoria.strCategory ? 'ativo' : ''}
                onClick={() => onSelecionarCategoria(categoria.strCategory)}
                >
                    {categoria.strCategory}
                </button>
            ))}
            </div>
    )
}

export default FiltroCategorias
