function CardReceita({ receita, onSelecionar}){
    return(
        <div className="card-receita" onClick={() => onSelecionar(receita.idMeal)}>
            <img src={receita.strMealThumb} alt={receita.strMeal} />
            <h3>{receita.strMeal}</h3>
        </div>
    )
}
export default CardReceita
