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
function getPosts() {
  //takes in a callback function
  setTimeout(() => {
    //we want to get the posts and put them on the page
    let output = "";
    //we could use a for loop
    //takes a cllaback function
    //takes a parameter
    posts.forEach((post, index) => {
      //for each post we want to add it to the output varible
      output += `<li>${post.title}</li>`;
    });
    //insert it into the body
    document.body.innerHTML = output;
  }, 1000);
}

//we dont want to pass the callback and we dont want to run the callback
//we want to return a promise
function createPost(post) {
  //takes in two parameters
  //when you want to resolve a promise you call resolve
  //when you have some kind of error you call reject
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      //2000ms or 2 sconds

      const error = false;
      //if no error
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

// createPost({ title: "Post three", body: "This is post threee" })
//   .then(getPosts)
//   .catch((err) => console.log(err));

//Async /Await
//await waits for an asnchronous action to complete
// async function init(){
//     //we are waiting for this to be done
//    await createPost({ title: "Post three", body: "This is post threee" });

//    getPosts()
// }

// //until we move on and call this
// init();

//Async /Await /Fetch
async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  console.log(data);
}

fetchUsers();

//Promise.all
// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "Goodbye")
// );

// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

// Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
//   console.log(values);
// });
