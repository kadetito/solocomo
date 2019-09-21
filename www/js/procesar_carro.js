$(document).ready(function() { 



		
	$('#cart_form').submit(function(event) {
		
		
//		$('#Submit').bind('click',function(){	
		

			
			if(confirm("Se dispone a realizar el pago. Si desea modificar el pedido, por favor, pulse en cancelar.")) {
				

			alert("hol");
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

			var form_data = decodeURI($(this).serialize());  //prepare form data for Ajax post
//
//			id_producto = [];
//			subtotal = [];
//			cantidad = [];
//			id_producto.length=0;
//			subtotal.length=0;
//			cantidad.length=0;
//		    	    $('input[name="id_producto[]"]').each ( function() {
//		    	    	id_producto.push($(this).val());
//		    	    });
//		    	    $('input[name="subtotal[]"]').each ( function() {
//		    	    	subtotal.push($(this).val());
//		    	    });
//		    	    $('input[name="cantidad[]"]').each ( function() {
//		    	    	cantidad.push($(this).val());
//		    	    });
//		    var id_producto = JSON.stringify(id_producto);
//		    var subtotal = JSON.stringify(subtotal);
//		    var cantidad = JSON.stringify(cantidad);
//	    	
//	    	var myarray = {"id_producto":id_producto,"subtotal":subtotal,"cantidad":cantidad};
//	    	id_product.length=0;
//	    	$("input[name='id_producto[]']").each ( function() {id_product.push({'id_producto' : $(this).val()},);});
//		    var id_producto = JSON.stringify(id_product);
//
//	    	
//	    	subtota.length=0;
//	    	$("input[name='subtotal[]']").each ( function() {subtota.push({'subtotal' : $(this).val() },);});
//		    var subtotal = JSON.stringify(subtota);
//		    
//	    	
//	    	cantida.length=0;
//	    	$("input[name='cantidad[]']").each ( function() {cantida.push({'cantidad' : $(this).val() },);});
//		    var cantidad = JSON.stringify(cantida);
		    
//
//
//		    console.log(id_producto); 
		    
			
//			subtotal = [];
//			cantidad = [];
//			
//			
			var jsonString = JSON.stringify(form_data);
			
			
			
			    $.ajax({
		            type: "POST",
		            url: "http://www.webentorn.com/gtareas/puente_crud/insertpedidos.puente.php",
		           
//		            dataType: "JSON",

		            data: 
		            { 
		            	'jsonString': jsonString 
//		            	,
//		            	'jsonSubtotal': subtotal,
//		            	'jsonCantidad': cantidad,
		              },
		            success: function(response) {
		          

		            	
		            	console.log("jsonString: "+jsonString); 

		            	

		    	    	

		            },
		            error: function(xhr, ajaxOptions, thrownError) {
		
		                jAlert(thrownError);
		            }
		        });

	    
		    return false;
	    
			    

			} else {
//				alert("No te gusta Actualidad jQuery");
				event.preventDefault();
			}
		
			
		});	
		


		
});




