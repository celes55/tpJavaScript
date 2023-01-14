// Desafío 1
// Crear una variable llamado tareas y dentro de ella guardar un array de objetos literales. Cada objeto
// literal deberá tener las propiedades: titulo y estado. En donde el título podrá ser cualquier cadena de texto, sin embargo el estado sólo podrá tomar los siguientes valores: “terminada”, “en progreso” o “pendiente”.


const Trabajos = [{

    titulo : "entrar gitub",
    estado : "terminado",
    
    titulo : "compartir linkedin",
    estado : "terminado",
    
    titulo : "usar react",
    estado : "terminado",
    }
    ]
    console.log(Trabajos);
    
    
    //desafio2
    // Agregar tarea:
    // Para agregar la tarea debemos crear una función que realizara el trabajo, recibira los parametros necesarios para la creacion de la tarea.
    // Agregara la tarea al final del array de tareas.
    // Al finalizar mostrar nuevamente el array de tareas
    
    function agregarTareas( titulo, estado) {
    Tareas.push({Titulo: "modificar hmtl", estado: "pendiente"})
    return tareas}
    
    console.log(agregarTareas("modificar html","pendiente"));
    
    // DESAFIO 3//
    const listarTareas = (estado) => {
        const estadoMin = estado.toLowerCase()
            if (estadoMin === "en progreso" || estadoMin === "pendiente" || estadoMin === "terminado") {
                const listadoTareas = tareas.filter(tarea => tarea.Estado.toLowerCase() === estadoMin);
                return listadoTareas;
        
            } 
            return tareas;
            
        }
        
        console.log(listarTareas("Pendiente"))
  
    //EJERCICIO4
    
    const agregarTareas = ( titulo, estado) => {
        for (let+ index= 0; index < tarea.length; index++){
         if(tarea === Titulo) {

        }else {

        }
        Tareas.push({Titulo: "modificar hmtl", estado: "pendiente"})
        return tareas}
    
    // }
    
    //EJERCICIO 5
    // Existe tarea?
    
    // Crear una funcion que devolvera las tareas en donde el titulo coincida con el parametro dado. 
    // Ejemplo: existeTarea(“js”) // Devera devolver el array con los objetos que coincidan con el string sin importar su estado
    
    
    // var num = 0;
    // var obj = new String("0");
    // var str = "0";
    // var b = false;
    
    // console.log(num === num); // true
    // console.log(obj === obj); // true
    // console.log(str === str); // true
    
    // console.log(num === obj); // false
    // console.log(num === str); // false
    // console.log(obj === str); // false
    // console.log(null === undefined); // false
    // console.log(obj === null); // false
    // console.log(obj === undefined); // false
    // mira
    
    
    const filtrarTarea = (texto) => {
        if (texto != "") {
            filtrar = tareas.filter(tarea => tarea.Titulo.includes(texto));
            if (filtrar.length > 0) {
                return filtrar;
            }
            else {
                return "No Existe..."
            }
        } else {
            return "No Existe...";
        }
      }
      
      console.log(filtrarTarea("Reac"));
    
    
        console.log( "entrar gitub".includes("maq"));
        console.log("compartir linkedin".includes("est"));
        console.log( "usar react".includes("crear"));
    
