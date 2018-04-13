<script type="text/javascript">
  function changeFrete(){
  	vtexjs.checkout.getOrderForm().done(function(orderForm) {
    	var email = orderForm.clientProfileData.email;
    	var state = orderForm.shippingData.address.state;
    	var products_total = parseFloat((orderForm.totalizers[0].value)/100).toFixed(2);
      	var sul_sudeste =["SP","MG","RJ","ES","PR","RS","SC"];
      	var valor_frete = 0;
      	var percentual_regua = 0;
      	var diferenca = 0;
      	var mensagem ="";
      	if(sul_sudeste.indexOf(state) > -1){
        	valor_frete = 97.00; 	
        }else{
            valor_frete = 147.00;
        }
      	if(products_total > valor_frete){
        	percentual_regua = 100;  
        }else{
          diferenca = parseFloat(valor_frete - products_total).toFixed(2);
          percentual_regua = parseFloat((products_total/valor_frete)*100).toFixed(0);
        }
      	
      	if(diferenca == 0){
        	mensagem = "Parabéns você possui frete grátis";
        }else{
            diferenca = diferenca.replace('.',',');	
          	mensagem = "Quase faltam R$"+diferenca+" para você ter frete grátis";
        }
        console.log(mensagem + "  " + percentual_regua);                                
    	if(localStorage.getItem('vtex_user_email')!= email){
    		localStorage.setItem('vtex_user_email', email);
    	}
     	if(localStorage.getItem('vtex_user_state')!= state){
    		localStorage.setItem('vtex_user_state', state);
    	}
  	});
  }
  
  $(document).ready(function(){
  	changeFrete();
  });
  $(document).bind("blur click dblclick change keydown keypress keyup", function(e){
    setTimeout(function(){
  		changeFrete();
	}, 2000);
  	
  }); 		
</script>
