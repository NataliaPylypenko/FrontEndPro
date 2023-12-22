/* =========== async...await =========== */

const refs = {
    apiUrl: 'https://jsonplaceholder.typicode.com',
    postForm: document.querySelector('#postForm'),
    posts: document.querySelector('#posts'),
};

const getData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }
        return await response.json();
    } catch (err) {
        console.error(err)
    }
};

const renderPost = (post) => {
    const postItem = document.createElement('div');
    postItem.className = 'card w3-card-4';
    postItem.setAttribute('data-post', `${post.id}`);
    postItem.innerHTML = `
        <h3 class="card__header">${post.title}</h3>
        <div class="card__body">
          <p>${post.body}</p>
        </div>
        <button type="button" class="card__button" data-id="${post.id}">Comments</button>
    `;

    refs.postForm.insertAdjacentElement('afterEnd', postItem);
    document.querySelector('.card__button').addEventListener('click', handleCommentsBtnClick );
};

const renderComment = (comment) => {
    const commentItem = document.createElement('div');
    commentItem.className = 'card w3-card-4 comment';
    commentItem.innerHTML = `
        <div class="card__header">
          <h4>${comment.name}</h4>
          <h6>${comment.email}</h6>
        </div>
        <div class="card__body">
          <p>${comment.body}</p>
        </div>
    `;

    const post = document.querySelector(`[data-post="${comment.postId}"]`);
    post.insertAdjacentElement('afterEnd', commentItem);
};


const getPostById = (postId) => getData(`${refs.apiUrl}/posts/${postId}`)
    .then(data => renderPost(data))
    .catch(err => console.error(err));

const getCommentsForPost = (postId) => getData(`${refs.apiUrl}/comments?postId=${postId}`)
    .then(data => data.forEach(obj => renderComment(obj)))
    .catch(err => console.error(err));


const handlePostFormSubmit = async (e) => {
    e.preventDefault();

    const postId = parseInt(refs.postForm.querySelector('input[name="postId"]').value);
    await getPostById(`${postId}`);

    refs.postForm.reset();
};

const handleCommentsBtnClick  = async (e) => {
    e.preventDefault();

    const postId = e.target.dataset.id;
    await getCommentsForPost(`${postId}`);
};


refs.postForm.addEventListener('submit', handlePostFormSubmit);