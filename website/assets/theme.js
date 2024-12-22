document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts-container');

    // Fetch content from the JSON file
    fetch('content.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Generate and display content
            data.forEach(post => {
                const postElement = document.createElement('article');
                postElement.classList.add('blog-post');
                postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p><strong>By:</strong> ${post.author} | <strong>Date:</strong> ${post.date}</p>
                    <p>${post.content}</p>
                `;
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => {
            postsContainer.innerHTML = `<p>Error loading content: ${error.message}</p>`;
        });
});