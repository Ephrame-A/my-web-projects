let out=document.querySelector("#output")
let comment = document.querySelector("#comment")
function display(){
    out.innerHTML="Your comment is \"" + comment.value+ "\"";
comment.value="" 
}
let counter=document.querySelector(".counter")
let commentbox=document.querySelector("#commentBox")
let load=0

let add=setInterval(blurring, 30)
function blurring(){
    load++
    if(load>99){
        clearInterval(add)
    }
    counter.innerText=load+"%"
    counter.style.opacity=(100-load)/100
    commentbox.style.opacity=(load)/100
    //commentbox.style.filter="blur(loadpx)"
}