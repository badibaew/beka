const posts = document.getElementById("posts");
const input = document.getElementById("input");
const button = document.getElementById("button");

const get = async () => {
  const ress = await fetch("https://jsonplaceholder.typicode.com/posts");
  const date = await ress.json();
  const result = date.filter((el) => el.userId === 1);

  button.click = (search) => {
    search = () => {
      const num = input.value;
      date.filter((el) => el.userId.indexOf(num) >= 0);
    };
  };

  posts.innerHTML = `${result
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
};

get();
