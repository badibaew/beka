const posts = document.getElementById("posts");

const get = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const date = await res.json();

  posts.innerHTML = `${date
    .map(
      (e) => `
<div class="post">
    <h1>User id: ${e.userId}</h1>
    <h2>Id: ${e.id}</h2>
    <h3>title: ${e.title}</h3>
    <p><span>body:</span> ${e.body}</p>
</div>`
    )
    .join("")}
`;
  // console.log(date);
};

get();
