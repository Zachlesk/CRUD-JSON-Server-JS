//3. importar la funcion metodo HTTP - get//
import {getCampers} from '../apiConnection/API.js'

//1. Funcion IIFE//
(function(){
    document.addEventListener('DOMContentLoaded', showCampers);
     async function showCampers(){
  /*       console.log('Desde IIFE'); */
        const campers = await getCampers();
        console.log(campers);
        const contenedor = document.querySelector('tbody');
        campers.forEach((camper)=>{
            const{id,nombre, imagen,edad,detales,promedio,especialidad,expertoTecnologia}= camper
            const rows = document.createElement('tr');
            rows.innerHTML =`
            <th scope="row">${id}</th>
            <td><img src="img/${imagen}" class="cuenta"</td>
            <td>${nombre}</td>
            <td>${promedio}</td>
            <td>${especialidad}</td>
            <td>${expertoTecnologia}</td>
            <td><button class="btn btn-warning">Details</button></td>
            `;
            contenedor.appendChild(rows)
        })

    }
})();


