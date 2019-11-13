$('#contact-form').submit(function(e){

   e.preventDefault();
   //alocando os valores do input nas 'constantes'
const name=$('input[name=name').val();
const email=$('input[name=email').val();
const subject=$('input[name=subject').val();
const message=$('input[name=message').val();
const token = jQuery("[name=csrfmiddlewaretoken]").val();

alert(token);

$.ajax({
    type: 'POST',
    url: '/contato',
    data:{
    'csrfmiddlewaretoken': token,
    'name':name,
    'email':email,
    'subject':subject,
    'message':message
    },
    sucess: function(data){
        alert("Funcionou")
    },
    error: function(data){
        alert("erro")
    }
})

});