const fetchPost = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const posts = ['Post1','Post2','Post3'];
            const error = false;

            if(error){
                reject('Huvo un error al intentar obtener los post');
            }else{
                resolve(posts)
            }
        }, 2000);
    });
};

const mostrarPost = async () => {
    const posts = await fetchPost();
    console.log(posts);
};
mostrarPost();