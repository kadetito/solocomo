//$(document).ready(function() {

	function validarSesion() {

var identificacion_emplead = localStorage.getItem("identificador");
if(identificacion_emplead == ''){
	alert();
} else {
	var u = localStorage.getItem("usuario", u);
	var p = localStorage.getItem("password", p);
	var i = localStorage.getItem("identificador", i);
		    $.ajax({
	            type: "POST",
	            datatype: "JSON",
	            url: "http://www.webentorn.com/gtareas/puente_crud/validalogin.puente.php",
	           
	            data: 
	            { 
	        	    'usuarioemp': u,
	                'passemp': p
	              },
	            success: function(data) {
	            	
	            	var u = localStorage.getItem("usuario", u);
	            	var p = localStorage.getItem("password", p);
	            	var i = localStorage.getItem("identificador", i);
	            	
//		                    var data = $.parseJSON(data);
//			            	    $.each(data, function(i, field){
			            	    	
			            	    	if(u!=null){

			            	    	} else {
			            	    		localStorage.removeItem("usuario");
			            	    		localStorage.removeItem("password");
			            	    		//alert("sesion no existente");
			            	    		window.location.href = "login.html";
			            	    	}


	            },
	            error: function(xhr, ajaxOptions, thrownError) {
	                alert("ERROR");
	            }
	        });
		    
	}
	}
//});