const BASE_URL = 'https://www.themealdb.com/api/json/v1/1'
// Busca receitas pelo nome do prato
export async function buscarReceitasPorNome(nome) {
    const resposta = await fetch(`${BASE_URL}/search.php?s=${encodeURIComponent(nome)}`)
    const dados = await resposta.json()
     return dados.meals || []
}

// Lista todas as categorias disponíveis
export async function listarCategorias() {
const resposta = await fetch(`${BASE_URL}/categories.php`)
    const dados = await resposta.json()
    return dados.categories || []
}

// Filtra receitas por categoria
export async function buscarReceitasPorCategoria(categoria) {
const resposta = await fetch(`${BASE_URL}/filter.php?c=${encodeURIComponent(categoria)}`)
const dados = await resposta.json()
return dados.meals|| []
}

// Busca os detalhes completos de uma receita pelo id
export async function buscarDetalhesReceita(id) {
    const resposta = await fetch(`${BASE_URL}/lookup.php?i=${id}`)
    const dados = await resposta.json()
    return dados.meals ? dados.meals[0] : null
}

// A API guarda ingredientes em campos separados (strIngredient1, strTngredient2...)
// Essa função junta ingredientes + medida em uma lista fácil de usar
export function extrairIngredientes(receita) {
    const ingredientes = []
    for (let i = 1; i <= 20; i++) {
        const ingrediente = receita[`strIngredient${i}`]
        const medida = receita[`strMeasure${i}`]
        if (ingrediente && ingrediente.trim() !== '') {
            ingredientes.push(`${medida?.trim() || ''} ${ingrediente.trim()}`.trim())
        }
    }
    return ingredientes
}
