const posts = [
  {
    title: "Post one",
    body: "This is post one",
  },
  {
    title: "Post two",
    body: "This is post two",
  },
];

//mmicking fetching from a server
function getPosts(){
//takes in a callback function 
setTimeout(()=>{
    //we want to get the posts and put them on the page
    let output = '';
    //we could use a for loop
    //takes a cllaback function
    //takes a parameter
    posts.forEach((post,index)=>{
        //for each post we want to add it to the output varible
        output += `<li>${post.title}</li>`;
    })
    //insert it into the body
    document.body.innerHTML = output
},1000)
}


//it had to wait to create the post before calling the call back
function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post)
        callback();
        //2000ms or 2 sconds
    },2000)
}

//call the function for it to work
//make it a callback
// getPosts();
createPost({title:'Post three',body:'This is post three'},getPosts)

