import {useState} from 'react'

function Header({ onBuscar }) {
    const [termo, setTermo] = useState('')
    function handleSubmit(evento) {
        evento.preventDefault()
        onBuscar(termo)
    }
     return(
        <header className="header">
            <h1>Sabor em Foco</h1>
            <form className="busca-form" onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Buscar receita pelo nome..."
                value={termo}
                onChange={(e) => setTermo(e.target.value)}
                />
                <button type="submit">Buscar</button>
                </form>
                </header>

    )
}
export default Header

