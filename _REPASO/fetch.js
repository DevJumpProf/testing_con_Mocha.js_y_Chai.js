 const getNameFetch = (idPost)=>{

try {
    fetch (`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    .then (res=>{
        return res.json()
    })

    .then(post=>{
        fetch  (`https://jsonplaceholder.typicode.com/users/${post.userId}`)

    .then (res=>{
        return res.json()
    })

    .then(user=>{
        console.log (`${user.name} escribio el post ${idPost} titulado ${post.title}y vive en la calle ${user.address.street}`)
    })
})
    
} catch (error) {
   console.log(error) 
}

 }


 getNameFetch(28)