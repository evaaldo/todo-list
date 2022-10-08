const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')

form.addEventListener('submit', (evento) => {

    evento.preventDefault()

    criaElemento(evento.target.elements['atividade'].value)

})

function criaElemento(atividade) {

    const novoItem = document.createElement('li')
    novoItem.classList.add('item')

    const removeItem = document.createElement('input')
    removeItem.classList.add('cadastrar')
    removeItem.classList.add('remover')
    removeItem.value += '-'

    novoItem.innerHTML += atividade.toUpperCase()

    novoItem.appendChild(removeItem)
    lista.appendChild(novoItem)

}
