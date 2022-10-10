const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')
const itens = JSON.parse(localStorage.getItem('itens')) || []

itens.forEach((elemento) => {
    criaElemento(elemento)
})

form.addEventListener('submit', (evento) => {

    evento.preventDefault()

    const atividade = evento.target.elements['atividade']

    const itemAtual = {
        'atividade': atividade.value
    }

    criaElemento(itemAtual)

    itens.push(itemAtual)

    localStorage.setItem('itens', JSON.stringify(itens))

    atividade.value = ''

})

function criaElemento(item) {

    const novoItem = document.createElement('li')
    novoItem.classList.add('item')

    novoItem.innerHTML += item.atividade

    novoItem.appendChild(botaoDeleta())

    lista.appendChild(novoItem)

}

function botaoDeleta(id) {

    const elementoBotao = document.createElement('button')
    elementoBotao.innerText = 'x'
    elementoBotao.classList.add('remover')

    elementoBotao.addEventListener('click', function() {
        deletaElemento(this.parentNode, id)
    })

    return elementoBotao

}

function deletaElemento(elemento, id) {
    elemento.remove()
    itens.splice(itens.findIndex(elemento => elemento.id === id), 1)
    localStorage.setItem('itens', JSON.stringify(itens))
}
