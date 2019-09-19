
$("#sending").click(function(){

	event.preventDefault();
    $.ajax({
        type: "POST",
        datatype: "JSON",
        url: "http://www.webentorn.com/gtareas/puente_crud/validalogin.puente.php",
       
        data: 
        { 
    	    'usuarioemp': $("#usuarioemp").val(),
            'passemp': $("#passemp").val()
          },
        success: function(data) {
        	
        	var u = $("#usuarioemp").val();
        	var p = $("#passemp").val();
        	
            var data = $.parseJSON(data);

	            	    $.each(data, function(i, field){
	            	    
	            	    	if(data.status=='ok'){
	            	    		localStorage.setItem("usuario", u);
	            	    		localStorage.setItem("password", p);
	            	    		localStorage.setItem("identificador", data.identificador);
	            	    		window.location.href = "index.html";
	            	    	} else {
	            	    		localStorage.removeItem("usuario");
	            	    		localStorage.removeItem("password");
	            	    		alert("los datos no son correctos");
	            	    	}

	            	    });
	            
	            	
	            	    throw new Error("Something went badly wrong!");
	    

        },
        error: function(xhr, ajaxOptions, thrownError) {
            alert("ERROR");
        }
    });
    
    //alert('');
});
