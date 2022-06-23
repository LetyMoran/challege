function CantidadMayusculas(cadena = ""){
    var contador = 0;
    for (let index = 0; index < cadena.length; index++) {
        if(cadena[index] === cadena[index].toUpperCase()){
            contador++;
        }
    }

    Swal.fire({
        title: contador+' mayúsculas detectadas.',
        confirmButtonText: 'OK'
    }).then((result) => {
        if (result.isConfirmed) {
            $("#cadena").val('');
        }
    });
}

$(function(){
    $('#cadena').on({
        "input": function(event){
            this.value = this.value.replace(/[^a-zA-Z]/g,'');
        }
    });

    $('body').on('click', '#calcular-mayusculas', function (e) {
        if($.trim($("#cadena").val()) != ""){
            CantidadMayusculas($.trim($("#cadena").val()));
        }
    });
});