const url = "http://localhost:4001/campers";

//2. Obtener todos los campers de la api -(GET)

export const getCampers = async () => {
    try {
        const result = await fetch(url)
        const campers = await result.json();
        return campers
    } catch (error) {
        console.log(error);
    }
}

//Registrar un nuevo camper en la REST API - metodo HTTP POST//

export const newCamper = async (camper) =>{
    try {
        await fetch(url,{
            method:'POST',
            body: JSON.stringify(camper),
            headers:{
                'Content-Type':'application/json'
            }
        });
        window.location.href='index.html'
    } catch (error) {
        console.log(error);
    }
}
