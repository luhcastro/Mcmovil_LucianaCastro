const divPorta= document.getElementById('portaMovi')
const divPortaDos= document.getElementById('portaPerso')
crearSelectMovistar()
crearSelectPersonal()


function crearSelectMovistar () {
   
    const planesMovistar= [
        {nombre:'PLAN DE 3GB', precio: 2000},
        {nombre:'PLAN DE 5GB', precio: 2800},
        {nombre:'PLAN DE 8GB',precio: 4200},
        {nombre:'PLAN DE 15GB',precio: 5300},
    ]

    const empresa= []
    class Donante {
        constructor (empresa, descuento){
        this.empresa= empresa,
        this.descuento= descuento
    }
    }

    empresa.push(new Donante('Movistar', 85))
    
    const select= document.createElement('select')
    select.setAttribute('id', 'selectPorta')
    divPorta.append(select)
    const boton= document.createElement('button')
    boton.innerText= 'CALCULAR PRECIO'
    divPorta.append(boton)
    planesMovistar.forEach(plan=>{
        const option=document.createElement('option')
        option.innerText= `${plan.nombre}`
        select.append(option)
        
    })
    boton.onclick= () =>{
        const planElegido= document.getElementById('selectPorta').value
        console.log(planElegido)
        const abono= planesMovistar.find(plan=>plan.nombre===planElegido)
        console.log(abono)
        const descuentoFinal= abono.precio * (85/100)
        const precioFinal = abono.precio - descuentoFinal
        alert(`el precio de tu abono es de $${precioFinal}`)
        
    }
}
        
function crearSelectPersonal () {
   
    const planesPersonal= [
        {nombre:'PLAN DE 3GB', precio: 2000},
        {nombre:'PLAN DE 5GB', precio: 2800},
        {nombre:'PLAN DE 8GB',precio: 4200},
        {nombre:'PLAN DE 15GB',precio: 5300},
    ]

    const empresa= []
    class Donante {
        constructor (empresa, descuento){
        this.empresa= empresa,
        this.descuento= descuento
    }
    }

    empresa.push(new Donante('Personal', 70))
    
    const select= document.createElement('select')
    select.setAttribute('id', 'selectPortaDos')
    divPortaDos.append(select)
    const boton= document.createElement('button')
    boton.innerText= 'CALCULAR PRECIO'
    divPortaDos.append(boton)
    planesPersonal.forEach(plan=>{
        const option=document.createElement('option')
        option.innerText= `${plan.nombre}`
        select.append(option)
        
    })
    boton.onclick= () =>{
        const planElegido= document.getElementById('selectPortaDos').value
        console.log(planElegido)
        const abono= planesPersonal.find(plan=>plan.nombre===planElegido)
        console.log(abono)
        const descuentoFinal= abono.precio * (70/100)
        const precioFinal = abono.precio - descuentoFinal
        alert(`el precio de tu abono es de $${precioFinal}`)
        
    }
}    


