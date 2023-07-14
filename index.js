fechas = [];

function aniadirFecha(){
    const form = document.forms["formFechas"];
    const fecha = form.fecha.value;
    if(fecha !== ""){
        fechas.push(new Date(fecha));
        fechas.sort(function(a,b) {
            return a - b;
        })
        alert("Fecha se ha añadido correctamente");
    }else{
        alert("Fecha no se ha añadido correctamente");
    }

}

function mostrarResultados(){

    const fechaMenor = fechas[0];
    const fechaMayor = fechas[fechas.length - 1];
    const numFechas = fechas.length;

    const etiqFechaMenor = document.getElementById("fechaMenor");
    const etiqFechaMayor = document.getElementById("fechaMayor");
    const etiqNumFechas = document.getElementById("numFechas");

    etiqFechaMenor.innerHTML = fechaMenor ? fechaMenor: "No hay fecha por alla";
    etiqFechaMayor.innerHTML = fechaMayor ? fechaMayor: "No hay fecha por aqui";
    etiqNumFechas.innerHTML = numFechas;
    
    console.log("Mira pibe, la cantidad de fechas es: " + numFechas + " La mayor que seleccionaste, es: " + fechaMayor +
     " Pero la menor es: " + fechaMenor + " Hasta aca te puedo dar la info, mas no puedo hacer pibe. ");

    // ACA ANDA BIEN console.log("el nro es: " + numFechas);
    }
   // ACA AFUERA TAMBIEN console.log("el nro es: " + numFechas);
    
    