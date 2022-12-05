function validate() {

    try {
        let name = document.getElementById("name").value;

        let mailpattern = "[a-z0-9]+@mca.christuniversity.in";
        var mail = document.getElementById('email').value;

        if(!mail.match(mailpattern)) {
            alert("invalid mail id");
            return;
        }


        let number = document.getElementById('phone').value;
        let pattern = "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$";

        if(!number.match(pattern)) {
            alert('Invalid phone number');
            return;
        }


        var passpattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        var password = document.getElementById('password').value;

        if(!password.match(passpattern)) {
            alert("invalid Password");
            return;
        }



        alert("Successfully logged in");

        
    } catch (err) {

    }
    
}