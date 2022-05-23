// costanti del dom
const myContainer = document.getElementById('container');
var arrMiPiace = [];
stampaPost(posts);

// funzioni principali
function stampaPost(arrayPost){
    myContainer.innerHTML = '';
    arrayPost.forEach(element => {
        const divPost = document.createElement('div');
        divPost.classList.add('post');
        divPost.innerHTML = 
        `<div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    ${controlImageAuthor(element)}
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${element.author.name}</div>
                    <div class="post-meta__time">${changeFormateDate(element.created)}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${element.content}</div>
        <div class="post__image">
            <img src="${element.media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="javascript:void(0)" data-postid="${element.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element.likes}</b> persone
                </div>
            </div> 
        </div>            
        `;
        myContainer.append(divPost);
    });  
}

const divButtonLike = document.querySelectorAll(".js-like-button");
divButtonLike.forEach((button) => {
    button.addEventListener("click",
    function() {
        let postId = parseInt(button.getAttribute('data-postid')) - 1;
        button.classList
        button.classList.toggle('like-button--liked');
        if(button.classList.contains('like-button--liked')){
            posts[postId].likes++;
            arrMiPiace.push(posts[postId].id)
        } else{
            posts[postId].likes--;
            arrMiPiace = arrMiPiace.filter((value)=>value!==posts[postId].id);
        }
        const likeCounter = document.getElementById(`like-counter-${posts[postId].id}`);
        likeCounter.innerText = posts[postId].likes;
    })
});

function controlImageAuthor(element) {
    if(element.author.image!==null){
        return `<img class="profile-pic" src="${element.author.image}" alt="${element.author.name}">`;
    } else {
        let name = initialName(element.author.name);
        return `<div class="profile-pic-default"><span >${name}</span></div>`;
    }
}

//funzioni generiche
function changeFormateDate(oldDate)
{
   return oldDate.split("-").reverse().join("/");
}

function initialName(name) {
    let initials = name.split(' ');
    initials = initials[0].charAt(0) + initials[1].charAt(0);
    return initials;
}