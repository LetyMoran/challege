function Ordenar(cadena) {
    var array_numeros = cadena.split(',');    
    Swal.fire({
        title: "Números ordenados: ["+array_numeros.sort().join(', ')+"]",
        confirmButtonText: 'OK'
    }).then((result) => {
        if (result.isConfirmed) {
            $("#numeros-2").val('');
        }
    });
}

$(function(){
    $('#numeros-2').on({
        "input": function(event){
            if(this.value.length == 1 && isNaN(this.value)){
                this.value = "";
            }else{
                if(!isNaN(this.value.substr(-1))){
                    if(this.value.length > 1){
                        this.value = this.value.substr(0, this.value.length-1)+','+this.value.substr(-1);
                    }
                }else{
                    this.value = this.value.substr(0, this.value.length-1);
                }
            }
        }
    });

    $('body').on('click', '#calcular-orden', function (e) {
        if($.trim($("#numeros-2").val()) != ""){
            Ordenar($.trim($("#numeros-2").val()));
        }
    });
});