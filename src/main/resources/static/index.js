// alert("Bye!")
console.log("Hello from js")
var users=[
    {
        "name":"John Doe",
        "gender":"male",
        "img":"image.png"
    },
    {
        "name":"Jane Doe",
        "gender":"female",
        "img":"jane.png"
    }
]
var id=0;
function toggleUser(){
    id=(id+1)%2
    var userImage=document.getElementById("user-image");
    userImage.src=users[id].img;
    var userName=document.getElementById("user-name");
    userName.innerHTML=users[id].name;
    var userGender=document.getElementById("user-gender");
    userGender.innerHTML=users[id].gender;
}
function randomUser(){
    fetch('https://randomuser.me/api/')
        .then(function(response){
            // convert raw text to json
            return response.json();
        })
        // dom mannipulation with API data
        .then(function(data){

            var userData = data.results[0];

            // 1: image
            var userImage = document.getElementById("user-image");
            userImage.src = userData.picture.large;

            // 2: name
            var userName = document.getElementById("user-name");
            userName.innerHTML = userData.name.first + " " +
                                    userData.name.last;

            // 3: gender
            var userGender = document.getElementById("user-gender");
            userGender.innerHTML = userData.gender;
        })
        // handle error
        .catch(function(err){
            console.log(err);
        })
}