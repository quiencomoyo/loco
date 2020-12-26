(async()=>{
const {value: milton} =await Swal.fire({
  title: '<br class="rojo">Feliz Año Nuevo - 2021!</br>',
  text: 'Belleza ... Salud ... Alegría ... Felicidad ... ¡Confianza! ¡Este es el comienzo de tu nuevo año! ¡Feliz 2021!',
  imageUrl: 'img/2021.jpg',
  imageWidth: 300,
  imageHeight: 200,
  background:'#fff3b2',
  backdrop: `
	    rgba(230,140,178,0.8)
	    no-repeat`,
  imageAlt: 'Custom image',
  confirmButtonText:'Pulsa Aqui',
  allowOutsideClick:true,
  allowEscapeKey:false,
  allowEnterKey:false,
  stopKeydownPropagation:false,
  padding:'2rem',
  /*input:'select',
	 inputPlaceholder:'pais',
	 inputValue:'',
	 inputOptions:{
	 	bolivia: 'bolivia',
	 	eeuu:'eeuu'
	 },*/
  buttonsStyling: true,
  showCloseButton: true,
  closeButtonAriaLabel:'cerrar alerta',

  showConfirmButton: true,
  confirmButtonColor: "#d35d6e",
  confirmButtonAriaLabel: 'confirmar',

	});
  if(milton){
  	 Swal.fire({
	  title: 'Te deseo de todo corazon.<br>Ing. Milton Efrain Yujra Palli',
	  width: 600,

	  padding: '3em',
	  background: '#ffe6e6',
	  timer:5000,
	  timerProgressBar:true,
	  backdrop: `
	    rgba(230,140,178,0.8)
	    no-repeat`,
	  confirmButtonText:'<b>Muchas Gracias y Feliz Año Nuevo</b>',
	  showConfirmButton: true,
	  confirmButtonColor: "#ff4646",
	  confirmButtonAriaLabel: 'confirmar',

	 
	})
  }

})()



//(async() =>{
//	 const {value:pais}= await Swal.fire({
//	 title:'Bienvenido',
//	 text:'Espero que te guste mi pagina',
//	 //html:'<br class="rojo">HOLITAS</br>'
//	 icon:'success',//question,success,warning,error,info
//	 confirmButtonText:'seleccionar',
//	 footer:'esta es informacion importante',
//	 width:'50%',//trabajar siempre con porcentaje para que sea responcive
//	 padding:'1rem',
	 //background:'#000'
	 //grow:'fullscreen'//column,row
//	 backdrop:true,
	// timer:3000,
	// timerProgressBar:true,
	// toast:true,
//	 position:'center',//button=abajo,button-end=parte de la derecha abajo, top=arriba
//	 allowOutsideClick:true,
//	 allowEscapeKey:false,
//	 allowEnterKey:false,
//	 stopKeydownPropagation:false,

//	 input:'select',
//	 inputPlaceholder:'pais',
//	 inputValue:'',
//	 inputOptions:{
//	 	bolivia: 'bolivia',
//	 	eeuu:'eeuu'
//	 },
	
//	 customClass:
//	 {
	 	 //container:
		 /*	popup:'popup-class',
		 //header:
		    title:'te conosco',
		 	closeButton:true,
		 /*
		 	icon:
		 	image:
		 	content:
		 	input:
		 	actions:
		 	confirmButton:
		 	cancelButton:
		 	footer:*/
//	 },
		

//	showConfirmButton: true,
//	confirmButtonColor: "#d35d6e",
//	confirmButtonAriaLabel: 'confirmar',

//	showCancelButton:true,
//	cancelButtonText:'cancelar',
//	cancelButtonColor:'#ffce89',
//	cancelButtonAriaLabel:'cancelar',
	
//	buttonsStyling: true,
//	showCloseButton: true,
//    closeButtonAriaLabel:'cerrar alerta',


	/*imageUrl:
	imageWidth:
	imageHeight:
	imageAlt:*/
//	});
//	 if(pais){
//		swal.fire({
//			title:`Seleccionaste ${pais}`
//		})
//	}

//})()





let si=document.getElementById('si');

		si.addEventListener("click",function(e){
			document.getElementById('player').play();
			//alert("Con una mirada y un mejillón, te regalo un besucón. Con un percebe y mi amistad, la Feliz Navidad. Y con mi cariño y amor, que vale gran abrasón, ¡el Feliz Año Nuevo!. Dios los bendiga cada dia y que siga obrando año tras años, sus vidas");
			//alert("Les desea de todo corazon el ING. MILTON EFRAIN YUJRA PALLI una 'FELIZ NAVIDAD Y PROSPERO AÑO NUEVO'");

		});
		function bubbles(){
			var count = 200;
			var section= document.querySelector('section');
			var i = 0;
			while(i< count){
				var bubble=document.createElement('i');
				var x= Math.floor(Math.random() * window.innerWidth);
				var y= Math.floor(Math.random() * window.innerHeight);

				var size = Math.random() * 10;
				bubble.style.left = x + 'px';
				bubble.style.top = y + 'px';
				bubble.style.width=1+size+'px';
				bubble.style.height=1+size+'px';

				bubble.style.animationDuration = 10+size+'s';
				bubble.style.animationDelay = -size+'s';

				section.appendChild(bubble);
				i++
			}
		}
		bubbles()