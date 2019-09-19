$(document).ready(function() { 



		
//	$('#cart_form').submit(function(event) {
		
		
		$('#Submit').bind('click',function(){	
		
		
			event.preventDefault();
		
		
	

//		    if (!$('table#cartcontent1 tr').length) {
//		        alert('You have no Items in Your Cart');
//		    } else {

//		        var result = new Array();
//		        var id_producto, subtotal, cantidad;
//		        $('#left_bar').each(function(){
//		        	id_producto = $(this).find('input[name="id_producto[]"]').text();
//		        	subtotal = $(this).find('input[name="subtotal[]"]').val();
//		        	cantidad = $(this).find('input[name="cantidad[]"]').text();
//		            result.push( {'id_producto' : id_producto, 'subtotal' : subtotal, 'cantidad' : cantidad } );
//		        })
////
//		        $.ajax({
//		            type:"POST",
//		            url: 'http://www.webentorn.com/gtareas/puente_crud/test.php',
//		            data: {data: result},
//		            success: function(msg){
//		            	
//		            	console.log(result); 
//		                // do something when success
//		            }
//		        });
////		    }
//		    return false;
	
		
		
		


//			var totalCharge = $('#total-hidden-charges').val();
//			$('#left_bar').html('<p>'+totalCharge+'</p><input type="hidden" value="'+totalCharge+'" />');
//




	    	var id_product=[];
	    	id_product.length=0;
	    	$("input[name='id_producto[]']").each ( function() {id_product.push({'id_producto' : $(this).val() },);});
		    var id_producto = JSON.stringify(id_product);

	    	var subtota=[];
	    	subtota.length=0;
	    	$("input[name='subtotal[]']").each ( function() {subtota.push({'subtotal' : $(this).val() },);});
		    var subtotal = JSON.stringify(subtota);
		    
	    	var cantida=[];
	    	cantida.length=0;
	    	$("input[name='cantidad[]']").each ( function() {cantida.push({'cantidad' : $(this).val() },);});
		    var cantidad = JSON.stringify(cantida);
		    
//
//
//		    console.log(id_producto); 
		    
		    
			    $.ajax({
		            type: "POST",
		            url: "http://www.webentorn.com/gtareas/puente_crud/test.php",
		           
//		            dataType: "JSON",

		            data: 
		            { 
		            	'jsonIdProducto': id_producto,
		            	'jsonSubtotal': subtotal,
		            	'jsonCantidad': cantidad,
		              },
		            success: function(response) {
		          
		            	console.log("jsonIdProducto: "+id_producto); 
		            	console.log("jsonSubtotal: "+subtotal); 
		            	console.log("jsonCantidad: "+cantidad); 

		            },
		            error: function(xhr, ajaxOptions, thrownError) {
		                alert(thrownError);
		            }
		        });

	    
		    return false;
	    
			    
			    

			
		});	
		


	
		
});




