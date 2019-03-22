$(document).ready(function(){

    asociarEventos();

});

function asociarEventos(){
    $('#formTest').submit(function(event){
        event.preventDefault();
        validacionForm();
    });

    $("#mail").change(function(event){
        let errors = validacionEmail();
        $("#mail").removeClass("is-valid is-invalid");
        $("#errorsMail").empty();
        if(errors.length===0){
            $("#mail").addClass("is-valid");
            $("#errorsMail").removeClass("alert alert-danger");
        }else{
            $("#mail").addClass("is-invalid");
            $("#errorsMail").addClass("alert alert-danger");
            errors.forEach(error => $("#errorsMail").append(`<span>${error}</span>`));
        }
    })

    $("#pwd").change(function(event){
        let errors = validacionContra();
        $("#pwd").removeClass("is-valid is-invalid");
        $("#errorsPwd").empty();
        if(errors.length===0){
            $("#pwd").addClass("is-valid");
            $("#errorsPwd").removeClass("alert alert-danger")
        }else{
            $("#errorsPwd").addClass("alert alert-danger");
            $("#pwd").addClass("is-invalid");
            errors.forEach(error => $("#errorsPwd").append(`<span>${error}</span>`));
        }
    })

    $("#terms").change(function(event){
        let errors = validacionCheckbox();
        $("#terms").removeClass("is-valid is-invalid");
        $("#errorsTerms").empty();
        if(errors.length===0){
            $("#terms").addClass("is-valid");
            $("#errorsTerms").removeClass("alert alert-danger")
        }else{
            $("#errorsTerms").addClass("alert alert-danger");
            $("#terms").addClass("is-invalid");
            errors.forEach(error => $("#errorsTerms").append(`<span>${error}</span>`));
        }
    })

    $("#selector").change(function(event){
        let errors = validacionSelect();
        $("#selector").removeClass("is-valid is-invalid");
        $("#errorsSelect").empty();
        if(errors.length===0){
            $("#selector").addClass("is-valid");
            $("#errorsSelect").removeClass("alert alert-danger")
        }else{
            $("#errorsSelect").addClass("alert alert-danger");
            $("#selector").addClass("is-invalid");
            errors.forEach(error => $("#errorsSelect").append(`<span>${error}</span>`));
        }
    })

    $("#age").change(function(event){
        let errors = validacionAge();
        $("#age").removeClass("is-valid is-invalid");
        $("#errorsAge").empty();
        if(errors.length===0){
            $("#age").addClass("is-valid");
            $("#errorsAge").removeClass("alert alert-danger")
        }else{
            $("#errorsAge").addClass("alert alert-danger");
            $("#age").addClass("is-invalid");
            errors.forEach(error => $("#errorsAge").append(`<span>${error}</span>`));
        }
    })

}


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
    return errors;
}

function validacionForm(){

   

}

function validacionSelect(){
    
    var errors = [];

    if($("#selector").val()===""){
        errors.push("You have to select an accout type.")
    }

    return errors;

}

function validacionAge(){

    var errors = [];

    if($("#age").val()<18){
        errors.push("You have to be 18 or older.");
    }if(!$.isNumeric($("#age").val())){
        errors.push("You have to introduce a numeric value.")
    }
    return errors;
}

function validacionCheckbox(){

    var errors = [];

    if(!$("#terms").is(":checked")){
        errors.push("You have to agree our terms.");
    }

    return errors;
}