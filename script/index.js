const inputNombre = document.getElementById('nombre')
const inputApellido = document.getElementById('apellido')
const inputTelefono= document.getElementById('telefono')
const inputEmail= document.getElementById('email')
const formulario = document.getElementById('formulario')
const botonEnviar = document.getElementById('botonEnviar')
const divSelect = document.getElementById('select')
const seleccionarPlan= document.getElementById('seleccionarPlan')
const planSeleccionado= document.getElementsByClassName('planSeleccionado')
const botonCalcular= document.getElementById('botonCalcular')

const planes= [
    {nombre:'PLAN DE 3GB', precio: 2000},
    {nombre:'PLAN DE 5GB', precio: 2800},
    {nombre:'PLAN DE 8GB',precio: 4200},
    {nombre:'PLAN DE 15GB',precio: 5300},
]

const descuento = []

class Empresa {
    constructor(nombre,descuento){
        this.nombre= nombre
        this.descuento= descuento
    }
}
descuento.push(new Empresa('Claro', 60))


function selectPlan () {
    const seleccionarPlan = document.getElementById('seleccionarPlan');
    const planSeleccionado = seleccionarPlan.value;
    console.log(planSeleccionado)
    localStorage.setItem('planStorage', JSON.stringify(planSeleccionado));
    Swal.fire(`USTED HA SELECCIONADO EL ${planSeleccionado}.`);
    botonCalcular.onclick=()=>{
        const precioAbono= planes.find(plan=>plan.nombre===planSeleccionado)
        console.log(precioAbono)
        const calculoDescuento= precioAbono.precio * (60/100)
        console.log(calculoDescuento)
        const precioFinal= precioAbono.precio - calculoDescuento
        console.log(precioFinal)
        const inputResult= document.getElementById('resultado').value=('$' + precioFinal)
        console.log(inputResult)
        const capa = document.getElementById('capaResultado')
        capa.textContent= `El costo del plan seleccionado es: $${precioFinal}`
    }
    
}

botonEnviar.onclick = () => {
    const usuario = {
        nombre: inputNombre.value,
        apellido: inputApellido.value,
        telefono: inputTelefono.value,
        email: inputEmail.value,
    }
    localStorage.setItem('usuarioStorage', JSON.stringify(usuario));
    
}

formulario.onsubmit =  async(SubmitEvent) => {
    e.preventDefault();
    
    const datos = new FormData(this);
    const respuesta = await fetch(this.action,{
        method: this.method,
        body: formulario,
        headers: {
            'Accept': 'application/json',
        }

    })

    if(respuesta.ok) {
        alert('Gracias por contactarnos')
}

}

