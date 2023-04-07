https://twitter.com/share?url=[post-url]&text=[post-title]
const twitterBtn = document.querySelector(".twitter-btn");

function init(){
    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI("Playboi Carti Manifesto");

    twitterBtn.setAttribute("href",
   'https://twitter.com/share?url=${postUrl}&text=${postTitle}');
}
init();