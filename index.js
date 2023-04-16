const jokeBtn = document.querySelector(".joke-btn")
const joke = document.querySelector(".joke")
let isWaiting = true

jokeBtn.addEventListener('click', ()=>{
    if(!isWaiting) {
        isWaiting = true
        getJoke()
        
    }
    
})

async function getJoke() {
    const res = await fetch('https://icanhazdadjoke.com/', {
        method: "GET",
        headers:{
            Accept: "application/json"
        }} )
    const data = await res.json()
     joke.textContent = data.joke
     isWaiting = false   
}

getJoke()
