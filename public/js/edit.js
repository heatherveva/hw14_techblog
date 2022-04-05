const updateFormHandler = async (event) => {
  event.preventDefault();

  // assign variables to content of form inputs
  const title = document.querySelector('#blog-title').value.trim();
  const content = document.querySelector('#blog-desc').value.trim();
  const id = event.target.getAttribute('data-id');

  // if inputs exist
  if (title && content) {
    // make fetch to post update route
    const response = await fetch(`/api/blog/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // if successful, redirect to profile page
      document.location.replace('/profile');
    } else {
      alert('Failed to update post');
    }
  }
};

// event listener
document
  .querySelector('.update-blog-form')
  .addEventListener('submit', updateFormHandler);
