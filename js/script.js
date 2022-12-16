function validate(){
    let username=document.getElementById('username')
    let password =document.getElementById('password')
    let status =document.getElementById('status')
    

    console.log(username)
    console.log(password)

    if(username.value!=''){
        if(username.value.length < 4){
            // alert("Username should be longer than 4 letters.")
            status.innerHTML='Username should be longer than 4 letters.'
            return;
        }
        if(username.value.length > 10){
            status.innerHTML = 'Username should be less than 10 letters.'
            return;
        }
    }
    else{
        status.innerHTML = 'Please enter a name.'
        return;
    }

    if(password.value!=''){
        if(password.value.length < 4){
            status.innerHTML = "Password should be longer than 4 letters."
            return;
        }
        if(password.value.length > 10){
            status.innerHTML = "Password should be less than 10 letters."
            return;
        }
    }
    else{
        status.innerHTML = 'Please enter passowrd'
        return;
    }

    status.innerHTML='Validated!'
    status.style.color = 'green'

}