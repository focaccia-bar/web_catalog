let seleccionPrevia=[];
let catSeleccionada = 1;

function cargarProductos(num)
{
  limpiarProductos();
  let htmltoappend=""
  let htmltoappend2=""

  switch (num){
    
    case 1: seleccionPrevia = pitasCalientesData;
    break;
    
    case 2: seleccionPrevia = pitasFriasData;
    break;

    case 3: seleccionPrevia = FocacciasData;
    break;
    
    case 4: seleccionPrevia = BarData;
    break;

    case 5: seleccionPrevia = CalzoneData;
    break;

    case 6: seleccionPrevia = PizzasData;
    break;

    case 7: seleccionPrevia = DulcesData;
    break;

    case 8: seleccionPrevia = BebidasData;
    break;

    case 9: seleccionPrevia = PizzasPDEData;
    break;
    
    case 10:seleccionPrevia = CalzonePDEData;
      break;  


    case 11:seleccionPrevia = BarPDEData;
      break;  


    case 12:seleccionPrevia = RefuerzosPDEData;
      break;

    case 13:seleccionPrevia = DulcesPDEData;
    break;

    case 14:seleccionPrevia = BebidasPDEData;
    break;

    default: seleccionPrevia = PizzasPDEData;
    break;
  }
  

  for(let article of seleccionPrevia)
  {
    
    
    
    htmltoappend +=  `
       
       <div class="col-md-4 d-flex align-items-stretch">
       <a class="card mb-4 shadow-sm custom-card " style="text-decoration: none; background-color: rgb(242, 231, 212); color: black;">
         <img class="bd-placeholder-img card-img-top"  src="${article.imagen}">
         <h3 class="m-3">${article.nombre}</h3>
         <div class="card-body">
            <p class="card-text ">${article.descripcion}</p>
            <p class="card-text" style="text-align: center; border-radius: 8px; background-color: #a01515; width:3em;"><small class="text-white">$${article.precio}</small></p>
         </div>
         <button type="button" class="btn text-white " data-bs-toggle="modal" data-bs-target="#prod${seleccionPrevia.indexOf(article)}" style="background-color: #a01515">
          Ver mas...
          </button>
       </a>
     </div> 
     `; 
      
     htmltoappend2+=`<div class="modal fade" id="prod${seleccionPrevia.indexOf(article)}" tabindex="-1" aria-labelledby="modalLabel${seleccionPrevia.indexOf(article)}" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl ">
          <div class="modal-content  border-success "  style="color: black; background-color: rgb(242, 231, 212); ">
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabel${seleccionPrevia.indexOf(article)}">${article.nombre}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <img src="${article.imagen}" style="max-width: 100%; border-radius: 2px">
            <p>${article.descripcion}</p>
            <p class="text-white" style="text-align: center; border-radius: 8px; background-color:#779c72; width:3em;">$${article.precio}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-danger" onclick="buyproc()">Hacer un pedido!</button>
            </div>
          </div>
        </div>
      </div>`
  } 

document.getElementById("insertcards").innerHTML = htmltoappend;
document.getElementById("insert_modals").innerHTML = htmltoappend2;
}


function limpiarProductos(){
  document.getElementById("insertcards").innerHTML="";
}

function cargarCategorias(mvd)
{
  let htmltoappend ="";
  let list_to_load = mvd==0 ? catdatamvd : catdatapde;
  for(let cat of list_to_load)
  {
    htmltoappend+=`<button type="button" class="m-1 btn btn-outline-danger rounded-pill text-white" onclick="cargarProductos(${cat.lista})">${cat.nombre}</button>`;
  }

  document.getElementById("categorias_insert").innerHTML = htmltoappend;
  
}


document.addEventListener("DOMContentLoaded", ()=>{
  
  catSeleccionada = parseInt(sessionStorage.getItem("seleccion"));
  
  cargarCategorias(sessionStorage.getItem("mvd"));
  sessionStorage.removeItem("seleccion");
  cargarProductos(catSeleccionada);

})

document.addEventListener()





