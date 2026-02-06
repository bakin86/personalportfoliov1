// Email sending utility
// In production, this would connect to a backend API
// For now, it simulates email sending

export const sendEmail = async (formData) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Validate form data
  const { name, email, message } = formData;
  
  if (!name || !email || !message) {
    throw new Error('All fields are required');
  }
  
  if (!isValidEmail(email)) {
    throw new Error('Invalid email address');
  }
  
  // In production, replace this with actual API call:
  // const response = await fetch('/api/send-email', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(formData)
  // });
  
  console.log('Email sent:', formData);
  
  return {
    success: true,
    message: 'Email sent successfully!'
  };
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// For production use with EmailJS or similar service:
/*
import emailjs from '@emailjs/browser';

export const sendEmail = async (formData) => {
  try {
    const result = await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    );
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    throw new Error('Failed to send email');
  }
};
*/
