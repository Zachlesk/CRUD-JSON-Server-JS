import {newCamper} from '../apiConnection/API.js'

const formulario = document.querySelector('#formulario');
formulario,addEventListener('submit', validateCamper);

function validateCamper(e){
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value;
    const promedio = document.querySelector('#promedio').value;
    const edad = document.querySelector('#edad')
    const nivelIngles = document.querySelector('#nivelIngles').value;
    const especialidad = document.querySelector('#especialidad').value;
    const nivelCampus = document.querySelector('#nivelCampus').value;
    const expertoTecnologia = document.querySelector('#expertoTecnologia').value;

    //Literal Objests enhacement//
    const camper = {
        nombre,
        promedio,
        edad,
        nivelIngles,
        especialidad,
        nivelCampus,
        expertoTecnologia,
    }
    if (validate(camper)){
        alert("Todos los campos son obligatorios");
        return
    }
    newCamper(camper);
}


function validate(camper){
    return !Object.values(camper).every(element => element!=="");
}
