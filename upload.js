const windowHide = document.getElementsByClassName("window")
const btnCancellar = document.getElementsByClassName("btnCancelar")
const btnComenzar = document.getElementsByClassName("btnComenzar")
const windowCamaraHide = document.getElementsByClassName("windowCamaraHide")
const btnCapturar = document.getElementsByClassName("btnCapturar")
const logoMasButtonHide = document.getElementsByClassName("logoMasButton")
const logoMasListoHide = document.getElementsByClassName("logoMasListo")
const video = document.getElementsByClassName("video")[0];
var stream;
var isRecording = false;

//Reemplaza Ventana inicial por la de Camara
btnComenzar[0].addEventListener("click", () => {
    windowHide[0].classList.add("windowHide")
    windowCamaraHide[0].classList.remove("windowCamaraHide")
    getStreamAndRecord();
})

/*
//Desaparece " capturar" y aparece "listo"
btnCapturar[0].addEventListener("click", () =>{
    logoMasListoHide[0].classList.remove("logoMasListoHide")
    logoMasButtonHide[0].classList.add("logoMasButtonHide")
    
})

Borrar este handler después
*/


function getStreamAndRecord() {
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            height: {
                max: 434,
                exact: 434
            },
            width: {
                max: 838,
                exact: 838
            },
        }
    })
        .then(function (cameraResponse) {
            stream = cameraResponse;
            video.srcObject = stream;
            video.play()
            btnCapturar[0].addEventListener('click', captureButtonCallback);
        })
    return (true);
}


function captureButtonCallback(){
    isRecording = !isRecording; 
    if(isRecording){
        recorder = RecordRTC(stream, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 390,
            height: 270,
            onGifRecordingStarted: () => {
                console.log('Empezo a grabar');
            }
        })
        recorder.startRecording();
        recorder.camera = stream;
        //agregar los estilos necesarios para ocultar los botones y que aparezca el resto
    }
    else{
        recorder.stopRecording(stopRecordingCallback);
        isRecording = false;
    }
}


function stopRecordingCallback(){

}