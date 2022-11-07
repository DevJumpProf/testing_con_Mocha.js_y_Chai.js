
const getNameAsync= async (idPost)=>{
    try {
        const resPost = await fetch (`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        const post = await resPost.json()
      
        const resUser = await fetch (`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        const user = await resUser.json()

console.log (`${user.name} escribio el post ${idPost} titulado ${post.title}y vive en la calle ${user.address.street}`)

    } catch (error) {
        console.log(error)
    }

}

getNameAsync(70)