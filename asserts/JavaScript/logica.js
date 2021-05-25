function CrearElementosDeTrabajo(){
    const contenido = document.querySelector(".contenido")

    for (let i = 0; i < 4; i++) {

        const divElementoDeTrabajo = document.createElement("div");
        divElementoDeTrabajo.classList.add("elementoDeTrabajo");
        contenido.append(divElementoDeTrabajo);


        const ulElementoDatos = document.createElement("ul");
        ulElementoDatos.classList.add("elementoDatos");
        divElementoDeTrabajo.append(ulElementoDatos);

        const liPrimerDatoElemento = document.createElement("li");
        liPrimerDatoElemento.classList.add("PrimerDatoElemento")
        liPrimerDatoElemento.innerText = "Parche ocular (PROGRAMA SST)";
        ulElementoDatos.append(liPrimerDatoElemento);

        const liSegundoDatoElemento = document.createElement("li");
        liSegundoDatoElemento.classList.add("DatoElemento");
        liSegundoDatoElemento.innerText = "ASEO Y CAFETERÍA";
        ulElementoDatos.append(liSegundoDatoElemento);

        const liTercerDatoElemento = document.createElement("li");
        liTercerDatoElemento.classList.add("DatoElemento");
        liTercerDatoElemento.innerText = "Retiro";
        ulElementoDatos.append(liTercerDatoElemento);


        const divEstado = document.createElement("div");
        divEstado.classList.add("estado");
        divElementoDeTrabajo.append(divEstado);

        const labelSelectEstado = document.createElement("label");
        labelSelectEstado.for = "selectEstado";
        labelSelectEstado.innerText = "Estado";
        divEstado.append(labelSelectEstado);

        const selectEstado = document.createElement("select");
        selectEstado.classList.add("selectEstado");
        divEstado.append(selectEstado); 

        const optionSelectEstado = document.createElement("option");
        optionSelectEstado.innerText = "Pendiente";
        selectEstado.append(optionSelectEstado);


        const fechaDeEntrega = document.createElement("div");
        fechaDeEntrega.classList.add("fechaDeEntrega");
        divElementoDeTrabajo.append(fechaDeEntrega);

        const labelInputfechaDeEntrega = document.createElement("label");
        labelInputfechaDeEntrega.for = "inputFechaDeEntrega";
        labelInputfechaDeEntrega.innerText = "Fecha de entrega";
        fechaDeEntrega.append(labelInputfechaDeEntrega);

        const inputFechaDeEntrega = document.createElement("input");
        inputFechaDeEntrega.type = "date"
        inputFechaDeEntrega.classList.add("inputFechaDeEntrega");
        fechaDeEntrega.append(inputFechaDeEntrega); 


        const fechaDeReposicion = document.createElement("div");
        fechaDeReposicion.classList.add("fechaDeReposicion");
        divElementoDeTrabajo.append(fechaDeReposicion);

        const labelInputfechaDeReposicion = document.createElement("label");
        labelInputfechaDeReposicion.for = "inputFechaDeReposicion";
        labelInputfechaDeReposicion.innerText = "Fecha de Reposición";
        fechaDeReposicion.append(labelInputfechaDeReposicion);

        const inputFechaDeReposicion = document.createElement("input");
        inputFechaDeReposicion.type = "date";
        inputFechaDeReposicion.classList.add("inputFechaDeReposicion");
        fechaDeReposicion.append(inputFechaDeReposicion); 


        const textareaObservaciones = document.createElement("textarea");
        textareaObservaciones.classList.add("Observaciones");
        textareaObservaciones.placeholder = "Observaciones";
        divElementoDeTrabajo.append(textareaObservaciones);

        const iconoClip = document.createElement("img");
        iconoClip.src = "asserts/icons/iconosConetenedorPrincipal/VectorClip.svg";
        iconoClip.classList.add("iconoClip");
        divElementoDeTrabajo.append(iconoClip);

        const botonCompletar = document.createElement("button");
        botonCompletar.classList.add("botonCompletar")
        botonCompletar.innerText = "completar"
        divElementoDeTrabajo.append(botonCompletar)

 
    }
}

function mensaje(){
    const boton = document.querySelector(".botonAñadirElemento")

    const mensaje = document.querySelector(".mensaje");
    const mensajeRaya = document.querySelector(".mensajeRaya")
    boton.addEventListener("mouseover",()=>{
            mensaje.style.display = "block";
            mensajeRaya.style.display ="block";
    })
    boton.addEventListener("mouseout",()=>{
        mensaje.style.display = "none";
        mensajeRaya.style.display ="none";
})
}

mensaje()
CrearElementosDeTrabajo();