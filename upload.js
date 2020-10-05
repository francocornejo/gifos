const windowHide = document.getElementsByClassName("window")
const btnCancellar = document.getElementsByClassName("btnCancelar")
const btnComenzar = document.getElementsByClassName("btnComenzar")
const windowCamaraHide = document.getElementsByClassName("windowCamaraHide")
const btnCapturar = document.getElementsByClassName("btnCapturar")
const logoMasButtonHide = document.getElementsByClassName("logoMasButton")
const logoMasListoHide = document.getElementsByClassName("logoMasListo")


//Reemplaza Ventana inicial por la de Camara
btnComenzar[0].addEventListener("click", () => {
    windowHide[0].classList.add("windowHide")
    windowCamaraHide[0].classList.remove("windowCamaraHide")
})

//Desaparece " capturar" y aparece "listo"
btnCapturar[0].addEventListener("click", () =>{
    logoMasListoHide[0].classList.remove("logoMasListoHide")
    logoMasButtonHide[0].classList.add("logoMasButtonHide")
    
})