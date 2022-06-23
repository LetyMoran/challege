function SumarUnidad(cadena) {
    var array_numeros = cadena.split(',');
    var nuevo_array = [];
    array_numeros.forEach(element => {
        nuevo_array.push(parseInt(element)+1);
    });
    
    Swal.fire({
        title: "La nueva cadena es: ["+nuevo_array.join(', ')+"]",
        confirmButtonText: 'OK'
    }).then((result) => {
        if (result.isConfirmed) {
            $("#numeros-1").val('');
        }
    });
}

$(function(){
    $('#numeros-1').on({
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

    $('body').on('click', '#calcular-suma', function (e) {
        if($.trim($("#numeros-1").val()) != ""){
            SumarUnidad($.trim($("#numeros-1").val()));
        }
    });
});