function recordarSeleccion(num)
{
  sessionStorage.setItem("seleccion", num);

}


{

}

function loadCategories(mvd)
{
  let list_to_load = mvd==0 ? catdatamvd : catdatapde;
  console.log(mvd)

    let htmltoappend = "";
    for (let cat of list_to_load)
    {
       htmltoappend +=  `
       
       <div class="col-md-4 d-flex align-items-stretch">
       <a href="productos.html" class="card mb-4 shadow-sm custom-card" style="text-decoration: none; background-color: #f2e7d4; color: black" onclick="recordarSeleccion(${cat.lista})">
       
         <img class="bd-placeholder-img card-img-top"  src="${cat.imagen}">
         <h3 class="m-3">${cat.nombre}</h3>
         <div class="card-body">
           <p class="card-text ">${cat.descripcion}</p>
         </div>
       </a>
     </div> `;



     
    }

    document.getElementById("categoriesinsert").innerHTML += htmltoappend;
  
}

console.log("Esto esta conectado")

document.addEventListener("DOMContentLoaded", function()
{
    
    loadCategories(sessionStorage.getItem("mvd"));
})

