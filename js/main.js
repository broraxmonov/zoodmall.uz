function tekshir(){
    fetch('https://reqres.in/api/users?page=2')
    .then(response => response.json())
    .then(json => {
          
        var email = json.data[0].email;
        var first_name = json.data[0].first_name;
        var error = document.getElementById('error');

        var inp1 = document.getElementById('inp1'); 
        var inp2 = document.getElementById('inp2'); 

        if(inp1.value == email && inp2.value == first_name){
            window.open('profile.html', "_self");
        }
        else{
            error.innerText = "Email yoki parol xato!";
            error.style.color ="red";
            error.style.fontSize = "14pt"
        }



      


    });
}