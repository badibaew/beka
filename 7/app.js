const postsContainerEl = document.getElementById("posts-container");
const filterEl = document.getElementById("filter");
const loaderEl = document.getElementById("loader");

let limit = 10;
let page = 1;
let loaderIndicator = false;
let dataFromBack = [];

const getData = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );
  const data = await response.json();
  page += 1;

  dataFromBack = [...dataFromBack, ...data];
  return data;
};

const renderPost = ({ id, title, body }) => {
  return `
    <div class="post">
        <div class="number"> ${id} </div>
        <div class="post-info">
            <h2 class="post-title">${title}</h2>
            <p class="post-body">${body}</p>
        </div>
    </div>
    `;
};

const createHTMLTamplate = (data) => {
  let text = data.reduce(
    (template, element) => template + renderPost(element),
    ""
  );
  return text;
};

const renderHTMLTemplate = () => {
  loaderIndicator = true;
  loaderEl.classList.add("show");
  getData()
    .then((posts) => {
      postsContainerEl.innerHTML += createHTMLTamplate(posts);
    })
    .finally(() => {
      loaderIndicator = false;
      loaderEl.classList.remove("show");
    });
};

const scrollCheck = () => {
  if (loaderIndicator) {
    return;
  }
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  console.log(scrollTop, scrollHeight, clientHeight);

  scrollTop + clientHeight >= scrollHeight && renderHTMLTemplate();
};

const searchPosts = (event) => {
  const search = dataFromBack.filter(({ title, body, id }) => {
    const term = event.target.value.toLowerCase();

    return (
      title.toLowerCase().indexOf(term) >= 0 ||
      body.toLowerCase().indexOf(term) >= 0 ||
      String(id).toLowerCase().indexOf(term) >= 0
    );
  });
  postsContainerEl.innerHTML = createHTMLTamplate(search);
};

window.addEventListener("scroll", scrollCheck);
filterEl.addEventListener("input", searchPosts);

renderHTMLTemplate();
