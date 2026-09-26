import CardReceita from './CardReceita'

function ListaReceitas({ receitas, carregando, onSelecionarReceita}) {
    if (carregando) {
        return <p className="mensagem-estado">Carregando receitas...</p>
    }
    if (receitas.length === 0){
        return <p className="mensagem-estado">Nenhuma receita encontrada. Tente outro termo ou categoria.</p>
    }
    return (
        <div className="lista-receitas">
            {receitas.map((receita) => ( 
                <CardReceita
                key={receita.idMeal}
                receita={receita}
                onSelecionar={onSelecionarReceita}
                />
            ))}
        </div>
    )
}

export default ListaReceitas