/*Para asegurar que se lee todo el codigo en la ventana de navegación
window.addEventListener("load", function(){
	//todo el código
});

-----------------------------------------

Al hacer clic en la imagenes pequeñas se habra la modal con la foto grande que corresponda.
Al src le tenemos que poner el href de la imagen, cambiandola así.
Necesitamos los enlaces y la modal.
*/

const enlaces = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");
const flechasModal = document.querySelectorAll(".modal button");
let imgActual = 0;//almacena las imagenes del indice 1º

enlaces.forEach(function(enlace,indice){
	enlace.addEventListener("click",function(evento){
		evento.preventDefault();
		imgActual = indice;
		//console.log(indice);
		imgModal.setAttribute("src",enlaces[imgActual].getAttribute("href"));
		modal.classList.add("visible");
	});
});

modal.addEventListener("click",function(){
	modal.classList.remove("visible");
});

//NAVEGACION IMAGENES:
/*el indice de arriba se refiere a las imagenes
el indice este de abajo se refiere a las flechas*/
flechasModal.forEach(function(flecha,indice){
	flecha.addEventListener("click",function(evento){
		evento.stopPropagation();
		if(indice == 0){
			imgActual = imgActual > 0 ? imgActual - 1 : enlaces.length - 1;
			// imagen actual es igual a imagen actual mayor a cero, sí, resto uno; sino será el último valor menos uno.
			//console.log("anterior")
		}else{
			imgActual = imgActual < enlaces.length - 1 ? imgActual + 1 : 0;
			// imagen actual es igual a imagen actual menor a enlaces.length, sí, resto uno; sino será el último valor mas uno cuando llege al ultimo numero volvera a tener el valor 0(imagen inicial o actual).
			//console.log("siguiente")
		}
		imgModal.setAttribute("src",enlaces[imgActual].getAttribute("href"));
		//console.log(imgActual);
	});
});













/*
ABRIR Y CERRAR LA MODAL
const enlaces = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");

//abrir modal ->click en cualquiera de los enlaces y poner la clase visible a la modal.
enlaces.forEach(function(enlace){
	enlace. addEventListener("click",function(evento){
		evento.preventDefault();
		modal.classList.add("visible");
	});
});


OTRA FORMA ES:
for(let i = 0; i < enlaces.length; i++){
	enlaces[i]. addEventListener("click",function(evento){
		evento.preventDefault();
		modal.classList.add("visible");
	});
};


//cerrar modal -> click enb cualquier parte de la modal y quitarle la clase visible a la modal.
modal.addEventListener("click",function(){
	modal.classList.remove("visible");
});

--------------------------------------------------------------------------------

PARA HACER QUE LAS IMAGENES CAMBIEN SEGUN LA QUE SELECCIONE:

const enlaces = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");

enlaces.forEach(function(enlace){
	enlace. addEventListener("click",function(evento){
		evento.preventDefault();
		imgModal.setAttribute("src",enlace.getAttribute("href"));
		modal.classList.add("visible");
	});
});


modal.addEventListener("click",function(){
	modal.classList.remove("visible");
});


---------------------------------------------------------------------------------

PARA USAR LAS FLECHAS Y MOVERNOS EN LA MODAL:

const enlaces = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");
const flechasModal = document.querySelectorAll(".modal button");
let imgActual = 0;//almacena las imagenes del indice 1º

enlaces.forEach(function(enlace,indice){
	enlace.addEventListener("click",function(evento){
		evento.preventDefault();
		imgActual = indice;
		//console.log(indice);
		imgModal.setAttribute("src",enlaces[imgActual].getAttribute("href"));
		modal.classList.add("visible");
	});
});

modal.addEventListener("click",function(){
	modal.classList.remove("visible");
});

//NAVEGACION IMAGENES:

flechasModal.forEach(function(flecha,indice){
	flecha.addEventListener("click",function(evento){
		evento.stopPropagation();
		if(indice == 0){
			imgActual = imgActual > 0 ? imgActual - 1 : enlaces.length - 1;
			// imagen actual es igual a imagen actual mayor a cero, sí, resto uno; sino será el último valor menos uno.
			//console.log("anterior")
		}else{
			imgActual = imgActual < enlaces.length - 1 ? imgActual + 1 : 0;
			// imagen actual es igual a imagen actual menor a enlaces.length, sí, resto uno; sino será el último valor mas uno cuando llege al ultimo numero volvera a tener el valor 0(imagen inicial o actual).
			//console.log("siguiente")
		}
		imgModal.setAttribute("src",enlaces[imgActual].getAttribute("href"));
		//console.log(imgActual);
	});
});

*/