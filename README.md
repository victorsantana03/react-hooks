# React Hooks
[![My Skills](https://skillicons.dev/icons?i=js,react)](https://skillicons.dev)

## Neste repositório, registro meu avanço no estudo de alguns Hooks do React.

## Principais Hooks
<div>
  <ul>
    <li>useState ✔️</li>
    <li>useRef</li>
    <li>useEffect</li>
    <li>useContext</li>
    <li>useReducer</li>
  </ul>
</div>

# useState

```js
import {useState} from 'react'
```
<p>O useState permite a <strong>manipulação de uma variável</strong> no DOM em tempo real.</p> 
<p>Se você precisa que o valor de uma variável seja alterada e exibida na tela ao clicar em um botão por exemplo, o useState é necessário.</p>

```js
const [number, setNumber] = useState(0)
```
<strong>Neste exemplo ☝🏽:</strong>
<ul>
  <li><strong>number</strong> é a variável</li>
  <li><strong>setNumber</strong> é a função</li>
  <li><strong>(0)</strong> é o valor inicial da variável</li>
</ul>
<p>Agora imagine que queremos que o número inicial da nossa váriavel seja alterado ao clicarmos em um botão:</p>

```js
function botaoClicado() {
  setNumber(prevNumber => prevNumber + 1)
}
```
<div>
  <ul>
    <li>A função setNumber é chamada ao clicarmos no botão.</li>
    <li>A função pega o valor atual da variável e soma com +1 a cada clique.</li>
    <li>O valor atual fica armazenado na variável <strong>number</strong> </li>
  </ul>
</div>
<p>Podemos exibir nossa váriavel na tela:</p>

```js
const [number, setNumber] = useState(0)

function botaoClicado() {
  setNumber(prevNumber => prevNumber + 1)
}

return (
  <div>
    <h1>Valor do number: {number}<h1/>
    <button onClick={botaoClicado}>Clique</button>
  </div>
)
```
>>>>>>> 4808e636a5f8cf994b4a63c6994f4e2802887f29
