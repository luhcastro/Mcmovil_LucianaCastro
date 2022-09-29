const inputNombre = document.getElementById('nombre')
const inputApellido = document.getElementById('apellido')
const inputTelefono= document.getElementById('telefono')
const inputBoton = document.getElementById('botonIngresar')
const divDatos = document.getElementById('divDatos')
const divSaludo = document.getElementById('saludo')
const divPlanes = document.getElementById('planes')
const divImagenes = document.getElementById('imagenes')

const abonos =[
    {nombre:'3GB', precio: 750}, 
    {nombre:'5GB', precio: 1020}, 
    {nombre:'8GB', precio: 1490},
]

botonIngresar.onclick = () => {
 
 const usuario ={
    nombre: inputNombre.value, 
    apellido: inputApellido.value,
    telefono: inputTelefono.value,
}

localStorage.setItem('usuarioStorage', JSON.stringify(usuario))
divDatos.remove()
saludo(usuario)
planes ()
const botonSeleccionar = document.getElementById('botonSeleccionar')
botonSeleccionar.onclick = () => {
const planSeleccionado = document.getElementById('selectPlanes').value
const mensaje = Swal.fire(`El plan seleccionado es ${planSeleccionado}`)

}
}

function saludo (user) {
    const tituloSaludo = document.createElement('h2')
    tituloSaludo.innerText = `BIENVENID@ ${user.nombre} ${user.apellido}`
    divSaludo.append(tituloSaludo)
}

function planes () {
    const parrafo = document.createElement('h3')
    parrafo.innerText = 'Selecciona el plan que deseas adquirir'
    const botonSeleccionar = document.createElement('button')
    botonSeleccionar.innerText = 'SELECIONAR PLAN'
    botonSeleccionar.setAttribute('id', 'botonSeleccionar')
    const selectPlanes = document.createElement('select')
    selectPlanes.setAttribute('id', 'selectPlanes')
     abonos.forEach(abono=>{
         const option = document.createElement('option')
         option.innerText = `${abono.nombre} $${abono.precio}`
         selectPlanes.append(option)
     })
     const imagen = document.createElement('img')
     imagen.setAttribute('src', '../assets/perrito2.jpg')
     divPlanes.append(parrafo)
     divPlanes.append(selectPlanes)
     divPlanes.append(botonSeleccionar)
     divPlanes.append(imagen)
 }
 