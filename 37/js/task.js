const refs = {
    apiUrl: 'https://jsonplaceholder.typicode.com',
    postForm: document.querySelector('#postForm'),
    posts: document.querySelector('#posts'),
};

const fetchData = url => fetch(url)
    .then(data => data.ok ? data.json() : Promise.reject(data.statusText))
    .catch(err => console.error(err));

const renderPost = (post) => {
    const postItem = document.createElement('div');
    postItem.className = 'card w3-card-4';
    postItem.innerHTML = `
        <h3 class="card__header">${post.title}</h3>
        <div class="card__body">
          <p>${post.body}</p>
        </div>
        <button type="button" class="card__button" data-id="${post.id}">Comments</button>
    `;

    refs.posts.appendChild(postItem);

    document.querySelector('.card__button').addEventListener('click', handlerClickBtn);
};

const renderComments = (comment) => {
    const postItem = document.createElement('div');
    postItem.className = 'card w3-card-4 comment';
    postItem.innerHTML = `
        <h3 class="card__header">${comment.name}</h3>
        <h5 class="card__header">${comment.email}</h5>
        <div class="card__body">
          <p>${comment.body}</p>
        </div>
    `;

    refs.posts.appendChild(postItem)
};


const getPost = (params) => fetchData(`${refs.apiUrl}${params}`)
    .then(data => renderPost(data))
    .catch(err => console.error(err));

const getComments = (params) => fetchData(`${refs.apiUrl}${params}`)
    .then(comments => comments.forEach(comment => renderComments(comment)))
    .catch(err => console.error(err));


const handlerSubmitForm = (e) => {
    e.preventDefault();

    const idPost = +refs.postForm.querySelector('input[name="idPost"]').value;
    getPost(`/posts/${idPost}`);

    refs.postForm.reset();
};

const handlerClickBtn = (e) => {
    e.preventDefault();

    const idComments = e.target.dataset.id;
    getComments(`/comments?postId=${idComments}`)    ;
};


refs.postForm.addEventListener('submit', handlerSubmitForm);