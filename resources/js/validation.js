$().function({



});

function validacionEmail(){

    var errors = [];

    let mail = $("#mail").val();

    let regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if(!regex.test(mail)){
        errors.push("The mail does not match our validation rules.");
    }

    return errors;

}

function validacionContra(){

    var errors = [];

    let pwd = $("#pwd").val();

    let regex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);

    if(!regex.test(pwd)){
        errors.push("Your password should contain eight characters, one letter and one number.")
    }
}

function validacionForm(){

    $("mail").change(function(event){
        let errores = validacionEmail();
        if(errores.length===0){
            $("#mail").removeClass("isInvalid");
            $("#mail").addClass("isValid");
        }else{
            $("#mail").removeClass("isValid");
            $("#mail").addClass("isInvalid");
            errors.forEarch(error => $("#errorsMail").append(`<span>${error}</span>`))
        }
    })

}