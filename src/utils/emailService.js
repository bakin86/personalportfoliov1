// Email sending utility using Formspree
// Replace 'YOUR_FORMSPREE_FORM_ID' with your actual Formspree form ID

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwvneyyq';

export const sendEmail = async (formData) => {
  // Validate form data
  const { name, email, message } = formData;
  
  if (!name || !email || !message) {
    throw new Error('All fields are required');
  }
  
  if (!isValidEmail(email)) {
    throw new Error('Invalid email address');
  }
  
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
        _subject: `New Portfolio Contact from ${name}`,
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to send message');
    }

    return {
      success: true,
      message: 'Message sent successfully!'
    };
  } catch (error) {
    console.error('Formspree error:', error);
    throw new Error(error.message || 'Failed to send message. Please try again.');
  }
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

