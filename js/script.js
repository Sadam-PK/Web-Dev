function validate(){
    let username=document.getElementById('username')
    let password =document.getElementById('password')

    console.log(username)
    console.log(password)

    if(username.value!=''){
        if(username.value.length < 4){
            alert("Username should be longer than 4 letters.")
        }
        if(username.value.length > 10){
            alert("Username should be less than 10 letters.")
            return;
        }
    }
    else{
        alert('Please enter a name')
    }

    if(password.value!=''){
        if(password.value.length < 4){
            alert("Password should be longer than 4 letters.")
            return;
        }
        if(password.value.length > 10){
            alert("Password should be less than 10 letters.")
            return;
        }
    }
    else{
        alert('Please enter passowrd')
        return;
    }

}