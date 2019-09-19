$(document).ready(function() { 
	// jQuery is properly loaded at this point
	// so proceed to bind the Cordova's deviceready event
	app.readPosts();
	$(document).bind('deviceready', app.onDeviceReady); 
});




//identifico al empleado para mostrar sus tareas
var identificacion_empleado = localStorage.getItem("identificador");
var cryopt = encodeURIComponent(window.btoa(identificacion_empleado));


var app = {
//	posts_url: "http://jsonplaceholder.typicode.com/posts",
	posts_url: "http://www.webentorn.com/gtareas/backoffice/json/listapizzas.json.php",
	get_url : "detalletareapendiente.html",
	onDeviceReady: function() {
		console.log('Device is ready');
		app.readPosts();
		
	},

	readPosts: function() {
		console.log('Reading posts');
		$.ajax({
			type: "GET",
			dataType: "json",
			url: app.posts_url,
			success: app.onSuccess,
			error: app.onError
		});

		console.log('Reading posts asynchrounously');
	},

	
	onSuccess: function(data) {
		var items = [];


	
	   

		
		
		
		
		
		
		
		

		
		

		
		
		

							$.each(data, function(key, val){
								items.push('<div id="card-525495'+val.id_producto+'"><div class="card"><div class="card-header graph"><div class="row"><div class="col-8"><a class="card-link" data-toggle="collapse" data-parent="#card-525495'+val.id_producto+'" href="#card-element-557833'+val.id_producto+'"><div class="diplinline">'+val.tipo+' - '+val.nombre+'</div></a></div><div class="col-4"><div class="row"><div class="col-8"><div class="diplinline text-right">'+val.precio+'&euro;</div></div><div class="col-4"><div class="upper" id="'+val.id_producto+'"><h5><span class="badge badge-success">+</span></h5><span class="name" style="display:none">'+val.nombre+'</span>><span class="price"  style="display:none">'+val.precio+'</span></div></div></div></div></div></div><div id="card-element-557833'+val.id_producto+'" class="collapse"><div class="card-body"><h4>'+val.tipo+' - '+val.nombre+'</h4><p>'+val.ingredientes+'</p><img src="img/'+val.imagen+'" class="items" height="100" alt="" />'+val.precio+'<p>'+val.ingredientes+'</p></div></div></div></div>');	
							
							

							
							
							
							
							});
							$('#posts').html(items.join(''));
							console.log('Exiting onSuccess');
		
		
		
							
							
							
		
	          
	    
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

		
	var Arrays=new Array();
		
		$('#wrap .upper').mousemove(function(){
			
			var position = $(this).position();
			
			$('#cart').stop().animate({
																										
					left   : position.left+'px',
					
				},250,function(){
				
			});			
		}).mouseout(function(){
			
		});	
		
		$('#wrap .upper').click(function(){
			
			var thisID = $(this).attr('id_producto');
			
			var itemname  = $(this).find('.name').html();
			var itemprice = $(this).find('.price').html();
				
			if(include(Arrays,thisID))
			{
				var price 	 = $('#each-'+thisID).children(".shopp-price").find('em').html();
				var quantity = $('#each-'+thisID).children(".shopp-quantity").html();

				
				quantitys = parseInt(quantity)+parseInt(1);

				
				var total = parseInt(itemprice)*parseInt(quantitys);
				
				$('#each-'+thisID).children(".shopp-price").find('em').html(total);
				$('#each-'+thisID).children(".shopp-quantity").html(quantitys);
				
//				$("#cantidad").val(quantitys);
//				$("#subtotal").val(total);
				$('#each-'+thisID).children("#cantidad").val(quantitys);
				$('#each-'+thisID).children("#subtotal").val(total);
				

				var prev_charges = $('.cart-total span').html();
				prev_charges = parseInt(prev_charges)-parseInt(price);
				
				prev_charges = parseInt(prev_charges)+parseInt(total);
				$('.cart-total span').html(prev_charges);
			
				$('#total-hidden-charges').val(prev_charges);
			}
			else
			{
				Arrays.push(thisID);
				
				var prev_charges = $('.cart-total span').html();
				prev_charges = parseInt(prev_charges)+parseInt(itemprice);

				
				$('.cart-total span').html(prev_charges);
				$('#total-hidden-charges').val(prev_charges);


				$('#left_bar .cart-info').append('<div class="shopp" id="each-'+thisID+'"><div class="label">'+itemname+'</div><div class="shopp-price"> $<em>'+itemprice+'</em></div><span class="shopp-quantity">1</span><img src="img/remove.png" class="remove" /><br class="all" /><input type="hidden"  class="suede" value="'+thisID+'" id="id_producto" name="id_producto[]"><input type="hidden"  class="suede" value="'+itemprice+'" name="subtotal[]" id="subtotal"><input class="suede" type="hidden" value="1" name="cantidad[]" id="cantidad"></div>');
				
				$('#cart').css({'-webkit-transform' : 'rotate(20deg)','-moz-transform' : 'rotate(20deg)' });
				
				
				if(prev_charges!=''){
					$('#Submit').prop('disabled', false);
					
				}
				
				
				var totalCharge = $('#total-hidden-charges').val();
				
				$('#floatingwin .cart-total-pedido-in').html('<div class="imitaboton">Total <span class="badge badge-light">'+totalCharge+'&euro;</span></div>');
				$('#floatingwin .cart-boton-pedido-in').html('<a class="card-link" data-toggle="collapse" data-parent="#card-646545" href="#card-element-460769"><div class="imitaboton"><img src="img/vercarro.png" alt="ver carro" /> ver pedido</div></a>');
				
				   



				
				
				
				
				
			}
			
			setTimeout('angle()',200);
		});	
		
		
		$('.remove').livequery('click', function() {
			
			var deduct = $(this).parent().children(".shopp-price").find('em').html();
			var prev_charges = $('.cart-total span').html();
			
			var thisID = $(this).parent().attr('id').replace('each-','');
			
			var pos = getpos(Arrays,thisID);
			Arrays.splice(pos,1,"0")
			
			prev_charges = parseInt(prev_charges)-parseInt(deduct);
			$('.cart-total span').html(prev_charges);
			$('#total-hidden-charges').val(prev_charges);
			$(this).parent().remove();
			
		});	
		

//		 $("your form selector here").submit(function() {
//		$('#Submit').livequery('click', function() {
//
//			var totalCharge = $('#total-hidden-charges').val();
//			
//

//
//
//
//			
//			
//
//			//array idiomas
//	    	var datosrecibidos=[];
//	    	datosrecibidos.length=0;
//		    	    $('#id_producto input[name="id_producto[]"]').each ( function() {
//		    	    		datosrecibidos.push($(this).val());
//		    	    });
//		    var datosrebuts = JSON.stringify(datosrecibidos);
//		    
//		    
//			    alert(datosrebuts);
//			    
//			    $.ajax({
//		            type: "POST",
//		            url: "http://www.webentorn.com/gtareas/puente_crud/insert.puente.php",
//		           
//		            data: 
//		            { 
//		            	'jsonDatosrebuts': datosrebuts,
//		              },
//		            success: function(response) {
//		            	 alert('guardado');
//		            	 console.log("jsonDatosrebuts: "+datosrebuts);         
//
//		            },
//		            error: function(xhr, ajaxOptions, thrownError) {
//		                alert(thrownError);
//		            }
//		        });
//			    
//			    
//			    
//			    
//			return false;
//			
//		});	
//		


	
		



		    
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	},

	onError: function(data, textStatus, errorThrown) {
		console.log('Data: ' + data);
		console.log('Status: ' + textStatus);
		console.log('Error: ' + errorThrown);
		$("#posts").html('No hay tareas pendientes');
		console.log('Exiting onError');
	},
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	


		
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
};




function include(arr, obj) {
	  for(var i=0; i<arr.length; i++) {
	    if (arr[i] == obj) return true;
	  }
	}
	function getpos(arr, obj) {
	  for(var i=0; i<arr.length; i++) {
	    if (arr[i] == obj) return i;
	  }
	}
	function angle(){$('#cart').css({'-webkit-transform' : 'rotate(0deg)','-moz-transform' : 'rotate(0deg)' });}

