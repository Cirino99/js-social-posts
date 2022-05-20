// costanti del dom
const myContainer = document.getElementById('container');
stampaPost(posts);

function stampaPost(arrayPost){
    arrayPost.forEach(element => {
        const divPost = document.createElement('div');
        divPost.classList.add('post');
        divPost.innerHTML = 
        `<div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${element.author.image}" alt="${element.author.name}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${element.author.name}</div>
                    <div class="post-meta__time">4 mesi fa</div>
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
                    <a class="like-button  js-like-button" href="#" data-postid="${element.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${element.likes}</b> persone
                </div>
            </div> 
        </div>            
        `;
        myContainer.append(divPost);
    });  
}

const divButtonLike = document.querySelectorAll(".js-like-button");
console.log(divButtonLike);

divButtonLike.forEach((button) => {
    button.addEventListener("click",
    function() {
        console.log(button);
        button.classList.toggle('like-button--liked');
    })
});