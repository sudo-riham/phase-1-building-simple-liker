// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const liker = document.querySelector(".like-glyph")

liker.addEventListener("click", function(e){
  mimicServerCall()
  .then(function(response){
    console.log(response)
    console.log(e.target.innerText);
    if(e.target.innerText === EMPTY_HEART){
      e.target.innerText = FULL_HEART
      e.target.classList.add("activated-heart")
    } else {
      e.target.innerText = EMPTY_HEART
      e.target.classList.remove("activated-heart")
    }
  })
  .catch(function(error){
    const modal = document.querySelector("#modal")
    modal.classList.remove("hidden")
    modal.innerText = error
    setTimeout(function(){
      modal.classList.add("hidden")
    }, 5000)
  })
});
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
