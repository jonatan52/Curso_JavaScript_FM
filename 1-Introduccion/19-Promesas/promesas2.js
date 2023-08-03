// Promesas

const fetchPost = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const posts = ['Post1','Post2','Post3'];
            const error = true;

            if(error){
                reject('Huvo un error al intentar obtener los post');
            }else{
                resolve(posts)
            }
        }, 2000)
    });
}

fetchPost().then((posts)=>{
    console.log(posts);
})
.catch((error)=>{
    console.log(error)
})