const argv= require('yargs').argv

const fs = require('fs');
let muestra;
let idCorrecto=true;

var Cursos=[ { 
    id :'Topol',
    nombre:'Topologia General',
    duracion:'64 Hrs',
    valor:'480000$'
     },
   {
	id1:'GRiemman',
	nombre1:'Geometria Riemanniana',
	duracion1 :'64 Hrs ',
	valor1:'510000$'
     },
    {
 	id2:'AlgoritAvanz',
	nombre2:'Analisis y diseño de Algoritmos',
	duracion2: '64 Hrs',
	valor2:'430000$'
    },
    {
     id3: 'FisAtom',
     nombre3:'Fisica Atomica',
     duracion3: '64 Hrs',
     valor3 :'615000$'
    }


];

var Interesados = {
  Interesado:{
    default:" ",
    demand :true
  },
  idCurso:{
    default:" ",
    demand :true
  },
  cedula:{
    default:" ",
    demand :true
  },
  inscribirse:{
  default:" ",
  demand:true
  }
};

	  var time=1000;
        
    console.log("Cursos Disponibles :");
		for (var i = 0; i <4; i++) {
			 let MuestraCurso;
          
			MuestraCurso= JSON.stringify(Cursos[i]);
             setTimeout(function() {console.log(MuestraCurso)},time);
             time+=2000;


		}

		    
 if(argv.idCurso=='Topol'){
         
   muestra = JSON.stringify(Cursos[0])          
   setTimeout(function(){console.log("Escogio :")},8020);
   setTimeout(function(){console.log(muestra);},8039) ;
         
  }

  else if(argv.idCurso=='GRiemman'){
         
    muestra = JSON.stringify(Cursos[1])
    setTimeout(function(){console.log("Escogio :")},8020);
    setTimeout(function(){console.log(muestra);},8039) ;
        
 }

 else if(argv.idCurso=='AlgoritAvanz'){
        
   muestra = JSON.stringify(Cursos[2])
   setTimeout(function(){console.log("Escogio :")},8020);
   setTimeout(function(){console.log(muestra);},8039) ;
        
 }

 else if(argv.idCurso=='FisAtom'){
        
  muestra = JSON.stringify(Cursos[3])
   setTimeout(function(){console.log("Escogio :")},8020);
   setTimeout(function(){console.log(muestra);},8039) ;
        
 }
 else if(argv.idCurso=" "){
   setTimeout(function(){console.log("Ud no ha Ingresado ID por favor Ingrese ID de curso")},8040);
 }    
 else {
  setTimeout(function(){console.log("Id Incorrecto");},8039) ;
  idCorrecto=false;
}
        

       if(argv.inscribirse=='si' && idCorrecto){
         let CrearArchivo=(Cursos) =>{
          texto = "Nombre:"+argv.Interesado+" CC: "+argv.cedula+" esta Matriculado en el Curso :"+"\n"
          +muestra+"\n";
          fs.appendFile("Matriculados.txt",texto,(err)=> {
            if(err) throw (err);
            else {
              setTimeout(function(){console.log("Archivo Creado");},9800) 
            }
          })
       
         }
         setTimeout(function(){console.log("Usted se ha matriculado Exitosamente");},9000)
         CrearArchivo(Cursos);
 

       }

       else {
          setTimeout(function(){ console.log("Usted no se ha inscrito a ningun curso por favor mire las Opciones")},9000);
          
           var time=10000;
	      
           for (var i = 0; i <4; i++) {
              let MuestraCurso;
                 
             MuestraCurso= JSON.stringify(Cursos[i]);
                    setTimeout(function() {console.log(MuestraCurso)},time);
                    time+=2000;
       
       
           }
       
       }
        
        
       
       
				
			


	







