const input = document.querySelector("#input");
const submit = document.querySelector("#button");
const userName = document.querySelector("#userName");
const bio = document.querySelector(".bio");
const loc = document.querySelector("#location");
const image = document.querySelector("#image");
const userId = document.querySelector("#user-id");
const followers = document.querySelector("#followers");
const followings = document.querySelector("#followings");
const repos = document.querySelector("#repos");
const userDetailContainer = document.querySelector(".userInfo-Container");
const mode = document.querySelector(".dark-light");
const wrapper = document.querySelector(".wrapper");
const icon = document.querySelector("#icon");

icon.classList.add("ri-moon-line");
wrapper.classList.add("bg-black","text-white")

function handledarklight(){
   if(icon.classList.contains("ri-sun-line")){
    icon.classList.add("li-moon-line");
    icon.classList.remove("ri-sun-line");
    wrapper.classList.remove("bg-white","text-black");
    wrapper.classList.add("bg-black","text-white"); 
   }
    else if(icon.classList.contains("ri-moon-line")){
    icon.classList.remove("li-moon-line");
    icon.classList.add("ri-sun-line");
    wrapper.classList.remove("bg-black","text-white");
    wrapper.classList.add("bg-white","text-black"); 
   }
}

function handleui(){
    // alert("Handle Ui run!!");
    userDetailContainer.classList.add("opacity-100");  }

function getUser(){
    fetch('https://api.github.com/users/' + input.value )
    .then(response => response.json())
    .then(data => renderdata(data))
}

function renderdata(userdata){
    if(userdata?.message == "Not Found"){
        alert(`User ${input.value} is Not Found !`)
        userDetailContainer.classList.add("hidden");
    }else{handleui();}

    if(input.value ==''){
        return;
    }else{
    console.log(userdata)
    if(userdata?.location == undefined){}else{
        loc.innerText = userdata?.location;
    }
    userId.innerText = `ID:${userdata?.id}`;
    image.src = userdata?.avatar_url;
    bio.innerText = userdata?.bio;
    followers.innerText = userdata?.followers;
    followings.innerText = userdata?.followings;
    repos.innerText = userdata?.public_repos;
    }
}
