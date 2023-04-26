
const start = document.getElementById('start-zone')

const end = document.getElementById('end-zone')

//let resultado = []

let resultado = 0



start.addEventListener('dragstart', (e) => {
    //console.log(e.target)
    e.dataTransfer.setData('text/plain', e.target.id)
    //e.dataTransfer.getData('text')  --desde aca se obtiene el elemento
})

start.addEventListener('drag', (e) => {
    e.target.classList.add('active')

})

start.addEventListener('dragend', (e) => {
    e.target.classList.remove('active')
})

end.addEventListener('drag', (e) => {
    e.target.classList.add('active')

})

end.addEventListener('dragend', (e) => {
    e.target.classList.remove('active')
})

end.addEventListener('dragover', (e) => {
    e.preventDefault()
})

end.addEventListener('drop', (e) => {
    e.preventDefault()
    let element = document.getElementById(e.dataTransfer.getData('text')) // 'text' es el formato de salida del dato capturado
    element.classList.remove('active')
    end.appendChild(start.removeChild(element)) //con esta instruccion eliminamos el elemento del nodo padre y pasa al nuevo nodo.

    resultado += parseInt(element.id)
    let mostrar = document.getElementById('resultado')
    mostrar.innerHTML = resultado

})



// --- volvemos a pasar los objetos al contenedor padre.

end.addEventListener('dragstart', (e) => {
    //console.log(e.target)
    e.dataTransfer.setData('text/plain', e.target.id)
    //e.dataTransfer.getData('text')  --desde aca se obtiene el elemento
})
start.addEventListener('dragover', (e) => {
    e.preventDefault()
})
start.addEventListener('drop', (e) => {
    e.preventDefault()
    let element = document.getElementById(e.dataTransfer.getData('text')) // 'text' es el formato de salida del dato capturado
    start.appendChild(end.removeChild(element)) //con esta instruccion eliminamos el elemento del nodo padre y pasa al nuevo nodo.
    resultado -= parseInt(element.id)
    let mostrar = document.getElementById('resultado')
    mostrar.innerHTML = resultado


})



// -- resultado.















