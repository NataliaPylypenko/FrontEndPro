fetch('https://jsonplaceholder.typicode.com/posts/5')
    .then(response => response.json())
    .then(json => console.log('posts: ', json));

fetch('https://jsonplaceholder.typicode.com/comments?postId=5')
    .then(response => response.json())
    .then(json => console.log('comments: ', json));

const refs = {
    apiUrl: 'https://jsonplaceholder.typicode.com',
    postForm: document.querySelector('#postForm'),
    posts: document.querySelector('#posts'),
};

const fetchData = url => fetch(url)
    .then(data => data.ok ? data.json() : Promise.reject(data.statusText))
    .catch(err => console.error(err));

const getId = () => {
    return 5;
};

const renderPost = (post) => {
    const postItem = document.createElement('div');
    postItem.className = 'card w3-card-4';
    postItem.innerHTML = `
        <h3 class="card__header">${post.title}</h3>
        <div class="card__body">
          <p>${post.body}</p>
        </div>
        <button type="button" class="card__button">Comments</button>
    `;

    refs.posts.appendChild(postItem);
};

const renderComments = () => {};

const getPost = (params) => fetchData(`${refs.apiUrl}${params}`)
    .then(data => renderPost(data))
    .catch(err => console.error(err));

const handlerSubmitForm = (e) => {
    e.preventDefault();

    const idPost = +refs.postForm.querySelector('input[name="idPost"]').value;
    getPost(`/posts/${idPost}`);

    refs.postForm.reset();
};

refs.postForm.addEventListener('submit', handlerSubmitForm);