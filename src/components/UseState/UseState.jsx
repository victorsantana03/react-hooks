import { useState } from "react"

export function UseState() {

    const [cliques, setCliques] = useState(0)

    function botaoClicado() {
        setCliques(prevCliques => prevCliques + 1)
    }

    const [input, setInput] = useState("")

    return (
        <div>
            <section className="flex">
                <h1>useState</h1>
                <div className="btn-content">
                    <h2>Quantidade de cliques: {cliques} </h2>
                    <button onClick={botaoClicado}>Clique</button>
                </div>

                <div className="input-content">
                    <input value={input} onChange={event => setInput(event.target.value)} />
                    <p>Você escreveu: {input}</p>
                </div>
            </section>
        </div>
    )
}