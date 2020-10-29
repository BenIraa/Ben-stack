export default function validation(values) {
    let errors = {}
    if(!values.firstname.trim()){
        errors.firstname ="First Name Required"
    }
    if(!values.lastname){
        errors.lastname ="last Name Required"
    }
    if(!values.email){
        errors.email ="email Required"
    }
    if(!values.telphone){
        errors.telphone ="telphone Required"
    }else if(values.telphone.length <10){
        errors.password ="Phone Must Be 10 Charcters"
    }if(!values.password){
        errors.password ="password Required"
    }else if(values.password.length <6){
        errors.password ="password Need to Be More 6 Charcteres"
    }
    if(!values.password2){
        errors.password2 ="Password Required"
    }else if(values.password2 !== values.password){
        errors.password2 ="Password Doesnt Match"
}
return errors;
    }