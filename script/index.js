const inputNombre = document.getElementById('nombre')
const inputApellido = document.getElementById('apellido')
const inputTelefono= document.getElementById('telefono')
const inputEmail= document.getElementById('email')
const formulario = document.getElementById("formulario")
const divDatos = document.getElementById("divDatos")
const divSaludo=document.getElementById("divSaludo")
const botonIngresar = document.getElementById("botonIngresar")
const botonEnviar = document.getElementById("botonEnviar")
const seleccionarPlan= document.getElementById("seleccionarPlan")

botonIngresar.onclick = () => {
    const plan = [
        {nombre: '3GB', precio:870, value:'value1'},
        {nombre: '5GB', precio:1200, value:'value2'},
        {nombre: '8GB', precio:1710, value:'value3'}
       ]
       localStorage.setItem('planStorage', JSON.stringify(plan))
       const mensaje = Swal.fire('seleccionaste el plan'+ plan.nombre)
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

   
