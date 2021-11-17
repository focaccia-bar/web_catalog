function recordarSeleccion(num)
{
  sessionStorage.setItem("seleccion", num);

}


{

}

function loadCategories()
{
    

    let htmltoappend = "";
    for (let cat of catdata)
    {
       htmltoappend +=  `
       
       <div class="col-md-4 d-flex align-items-stretch">
       <a href="productos.html" class="card mb-4 shadow-sm custom-card bg-dark text-white" style="text-decoration: none" onclick="recordarSeleccion(${cat.lista})">
         <img class="bd-placeholder-img card-img-top"  src="${cat.imagen}">
         <h3 class="m-3 text-white">${cat.nombre}</h3>
         <div class="card-body">
           <p class="card-text text-white">${cat.descripcion}</p>
         </div>
       </a>
     </div> `;



     
    }

    document.getElementById("categoriesinsert").innerHTML += htmltoappend;
  
}

console.log("Esto esta conectado")

document.addEventListener("DOMContentLoaded", function()
{
    
    loadCategories();
})

