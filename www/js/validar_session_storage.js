//$(DOCUMENT).READY(FUNCTION(){

	function validarSesion() {

var identificacion_emplead = sessionStorage.getItem("identificador");
if(identificacion_emplead == ''){
	alert();
} else {
	var u = sessionStorage.getItem("usuario", u);
	var p = sessionStorage.getItem("password", p);
	var i = sessionStorage.getItem("identificador", i);
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
	            	
	            	var u = sessionStorage.getItem("usuario", u);
	            	var p = sessionStorage.getItem("password", p);
	            	var i = sessionStorage.getItem("identificador", i);
	            	
//		                    var data = $.parseJSON(data);
//			            	    $.each(data, function(i, field){
			            	    	
			            	    	if(u!=null){

			            	    	} else {
			            	    		sessionStorage.removeItem("usuario");
			            	    		sessionStorage.removeItem("password");
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