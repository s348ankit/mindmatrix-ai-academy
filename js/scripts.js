// Basic form validation and submission handling for MindMatrix AI Academy

document.addEventListener('DOMContentLoaded', () => {
  // Handle contact form submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('input[name="name"]').value;
      const email = contactForm.querySelector('input[name="email"]').value;
      const inquiry = contactForm.querySelector('select[name="inquiry"]').value;
      const message = contactForm.querySelector('textarea[name="message"]').value;

      if (!name || !email || !inquiry || !message) {
        alert('Please fill out all fields.');
        return;
      }

      // Submit to Formspree (handled by form action)
      contactForm.submit();
      alert('Message sent successfully!');
      contactForm.reset();
    });
  }

  // Handle newsletter form submission
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[name="email"]').value;

      if (!email) {
        alert('Please enter a valid email.');
        return;
      }

      // Submit to Formspree
      form.submit();
      alert('Subscribed successfully!');
      form.reset();
    });
  });

  // Handle search form (placeholder for future functionality)
  const searchForms = document.querySelectorAll('.search-form');
  searchForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const searchTerm = form.querySelector('input[name="search"]').value;
      alert(`Searching for: ${searchTerm}`);
      // Add search functionality later if needed
    });
  });
});
