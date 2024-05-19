import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

const posts = [
    {
        name: "Vincent van Gogh",
        username: "Vincy1853",
        location: "Zudert, Netherlands",
        avatar: "/images/avatar-vangogh.jpg",
        post: "/images/post-vangogh.jpg",
        comment: " just took a few mushrooms lol",
        likes:21,
        isLiked:false,
        uuid: uuidv4()
    },

    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        isLiked:false,
        uuid: uuidv4()
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        isLiked:false,
        uuid: uuidv4()
    }
]


let feedContainer = document.getElementById("main")

feedContainer.addEventListener(('click'),(e) => {
    if((e.target.dataset.like)){
        handleLikes(e.target.dataset.like)
    }[0]
    
})


function handleLikes(postID){

    const targetFeed = posts.filter((post) => {
        return post.uuid === postID
    } )[0]


    
    if(targetFeed.isLiked){
        
        targetFeed.likes--
    } else{
       
        targetFeed.likes++
    }
    targetFeed.isLiked = !(targetFeed.isLiked) 
    getPosts()
    
}



function getPosts(){

    let postContents = ''
    posts.forEach((element,index) => {

        postContents += `
        
                    <section>
                    <div class="container">
                            <div class="profile-details">
                                <img id="avatar-img" src="${element.avatar}" class="avatar-img" alt="profile pic of vangogh">
                                <div class="profile-text">
                                    <p id='avatar-name' class="name">${element.username}</p>
                                    <p id="avatar-location">${element.location}</p>
                                </div>
                            </div>
                    </div>
                    </section>
                    <section>
                    <div class="container second">
                        <img id='oldagram-post' src="${element.post}" class="post-img" alt="Selfie painting of vangogh">
                        <div class="reactions">
                            <div class="engagements">
                                <img src="./images/icon-heart.png" id="like${index}" data-like=${element.uuid} alt="like icon">
                                <img src="./images/icon-comment.png" alt="comment icon">
                                <img src="./images/icon-dm.png" alt="share icon">
                            </div>
                            <p class="likes"><span id="like">${element.likes}</span> likes</p>
                            <p><span class="comment">${element.comment}</span></p>
                    
                        </div>
                    
                    </div>
                    </section>
        
        
        
        `
        

    });
    render(postContents)
}

function render(postContents){
    feedContainer.innerHTML = postContents
}

getPosts()








