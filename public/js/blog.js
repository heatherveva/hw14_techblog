const newFormHandler = async (event) => {
  event.preventDefault();

  const text = document.querySelector('#comment-desc').value.trim();
  const blog_id = document.querySelector('#comment-desc').value.trim();

  if (text) {
    const response = await fetch(`/api/blog`, {
      method: 'POST',
      body: JSON.stringify({ text, blog_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create comment.');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);
