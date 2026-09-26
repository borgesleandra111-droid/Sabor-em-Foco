import { useEffect, useState } from 'react'
import Header from './components/Header'
import FiltroCategorias from './components/FiltroCategorias'
import ListaReceitas from './components/ListaReceitas'
import { buscarReceitasPorNome, buscarReceitasPorCategoria } from './api/mealdb'
import './index.css'
import DetalheReceita from './components/DetalheReceita'

function App() {
  const [receitas, setReceitas] = useState([])
  const [carregando, setCarregando] = useState(false)
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('')
  const [idReceitaSelecionada, setIdReceitaSelecionada] = useState(null)
  useEffect(() => {
    handleSelecionarCategoria('Dessert')
   }, [])
   async function handleBuscar(termo) {
    if (termo.trim() === '') return
    setCarregando(true)
    setCategoriaSelecionada('')
    const resultado = await buscarReceitasPorNome(termo)
    setReceitas(resultado)
    setCarregando(false)
   }

   async function handleSelecionarCategoria(categoria) {
    setCarregando(true)
    setCategoriaSelecionada(categoria)
    if (categoria === '') {
      setReceitas([])
      setCarregando(false)
      return
    }
    const resultado= await buscarReceitasPorCategoria(categoria)
    setReceitas(resultado)
    setCarregando(false)
   }
   return (
    <div className="app">
      <Header onBuscar={handleBuscar} />
      <FiltroCategorias
      categoriaSelecionada={categoriaSelecionada}
      onSelecionarCategoria={handleSelecionarCategoria}
      />
      <main>
        <ListaReceitas
        receitas={receitas}
        carregando={carregando}
        onSelecionarReceita={setIdReceitaSelecionada}
        />
      </main>
      {idReceitaSelecionada && (
        <DetalheReceita
        idReceita={idReceitaSelecionada}
        onFechar={() => setIdReceitaSelecionada(null)}
        />
      )}
    </div>
   )
}

export default App