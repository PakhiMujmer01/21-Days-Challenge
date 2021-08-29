function validate() 
    {
        var username = document.getElementById("uname");
        var password = document.getElementById("pass");
        if(username.value.trim() == "" || password.value.trim() == ""){
            alert("No Blank Value Allowed");
            return false;
        }
        else{
            true;
        }
    }