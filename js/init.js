

const SOFT_LINK ="redirect_softrestaurant.html";
function navloader()
{
  let htmltoappend = `
  <div class="container-fluid">
    <img class="navbar-brand" src="new logo vol2.png" alt="" style="width: 6em;">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav p-4">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="index.html" style="color: black;">Inicio</a>
        </li>
        <li class="nav-item" >
          <a class="nav-link" href="inicio.html" style="color: black;">Categorias</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="productos.html" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color: black;">
            Productos
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="productos.html" onclick="mvdProc()">Montevideo</a></li>
            <li><a class="dropdown-item" href="productos.html" onclick="pdeProc()">Punta Del Este</a></li>
            
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#" style="border-radius: 3px; background-color: #65805f;" onclick="buyproc()">Comprar</a>
        </li>
        <li class="nav-item lm-3">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style="margin-left: 1vw">
            ¿Que es esto?
          </button>      
        </li>
      </ul>
    </div>
  </div>
  
  
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content" style="background-color: #f2e7d4;">
      <div class="modal-header">
        <h2 class="modal-title text-white" id="exampleModalLabel" style="background-color:rgb(106, 160, 115);"><bold>¿Qué es esto?</bold></h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       Esto es una <i>carta digital</i>, permite visualizar los productos de cada sucursal con imagenes del local. En caso de desear comprar un producto. Presione el boton "Comprar" en la parte superior de su pantalla. Una vez presionado lo llevara al carro de compra donde puede elegir los productos que desea y hacer su pedido.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
       
      </div>
    </div>
  </div>
</div>
  `;

  document.getElementById("navbrand").innerHTML= htmltoappend;

  document.getElementById("navbrand").style ="background-color:#f2e7d4;!important";

  
}

function footloader()
{
  let htmltoappend = `
  <!-- Section: Social media -->
        <section
                class="d-flex justify-content-between p-4 text-white"
                style="background-color: #65805f;
                width: 100%"
                >
          <!-- Left -->
          <div class="me-5">
            <span>Entra a nuestras redes:</span>
          </div>
          <!-- Left -->
          <a   style="color:rgb(31, 31, 31)"></a>
          <!-- Right -->
          <div>
            <a href="" class="text-white me-4">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-google"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/focaccia_bardepizzas/" class="text-white me-4">
              <img src="focaccia favico.png" alt="" style="width: 1em;">Instagram
            </a>
          </div>
          <!-- Right -->
        </section>
        <!-- Section: Social media -->

        <!-- Section: Links  -->
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <!-- Grid row -->
            <div class="row mt-3">
              <!-- Grid column -->
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <!-- Content -->
                <h6 class="text-uppercase fw-bold">FOCACCIA</h6>
                <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style="width: 60px; background-color: #7c4dff; height: 2px"
                    />
                <p>
                  Focaccia Prado surgió en 2011 como un sueño de juventud y hoy es todo un proyecto de vida. 

                  Estamos en la zona del Prado desde hace más de cuatro años.

                  ¿Por qué tenés que venir a Focaccia? Por que encontrará pizzas, focaccias, calzones, pitas y nuestro clásico chivito. 

                    Podes comprar para llevar o disfrutar en un lugar familiar y acogedor. 
 
                  Te esperamos de martes a domingo entre las 20 y las 00 hs.
                </p>
              </div>
              


              
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <!-- Links -->
                <h6 class="text-uppercase fw-bold">Contacto</h6>
                <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style="width: 60px; background-color: #7c4dff; height: 2px"
                    />
                <p><i class="fas fa-home mr-3"></i> Venancio Benavidez 3415 esq. Lucas Obes. Montevideo, Uruguay</p>
                <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
                <p>Montevideo : <i class="fas fa-phone mr-3"></i>22000386 //  099291229</p>
                <p>Maldonado : <i class="fas fa-print mr-3">092442477</i></p>
              </div>
              <!-- Grid column -->
            </div>
            <!-- Grid row -->
          </div>
        </section>
        <!-- Section: Links  -->
`;

  document.getElementById("piedepag").innerHTML= htmltoappend;



  
}



//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

document.addEventListener("DOMContentLoaded", function()
{
    
    navloader();
    footloader();
})

/*   
        */

function mvdProc()
{
  if(sessionStorage.getItem("mvd")==undefined)
  {
    sessionStorage.setItem("mvd",0);
  }else{
    sessionStorage.removeItem("mvd");
    sessionStorage.setItem("mvd",0);
  }
  
}

function pdeProc()
{
  if(sessionStorage.getItem("mvd")==undefined)
  {
    sessionStorage.setItem("mvd",1);
  }else{
    sessionStorage.removeItem("mvd");
    sessionStorage.setItem("mvd",1);
  }
}

function buyproc()
{
  if(sessionStorage.getItem("mvd")==0)
  {
    window.location.href="https://wa.me/+59899291229"
  }else{
    if(sessionStorage.getItem("mvd")==1)
    {
      window.location.href="https://wa.me/+59892442477"
    }
    
  }
}