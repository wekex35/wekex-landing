'use client';

export default function ContactForm() {
  return (
    <form onSubmit={async (e) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      // Show loading state
      const loadingDiv = form.querySelector('.loading') as HTMLElement;
      const errorDiv = form.querySelector('.error-message') as HTMLElement;
      const successDiv = form.querySelector('.sent-message') as HTMLElement;
      
      loadingDiv.style.display = 'block';
      errorDiv.style.display = 'none';
      successDiv.style.display = 'none';

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to send message');
        }

        // Only show success message and reset form if we get here
        loadingDiv.style.display = 'none';
        successDiv.style.display = 'block';
        form.reset();
      } catch (error) {
        // Show error message
        loadingDiv.style.display = 'none';
        errorDiv.style.display = 'block';
        errorDiv.textContent = error instanceof Error ? error.message : 'Failed to send message. Please try again.';
      }
    }} className="php-email-form">
      <div className="row gy-4">
        <div className="col-md-6">
          <input type="text" name="name" className="form-control" placeholder="Your Name" required />
        </div>

        <div className="col-md-6 ">
          <input type="email" className="form-control" name="email" placeholder="Your Email" required />
        </div>

        <div className="col-12">
          <input type="text" className="form-control" name="subject" placeholder="Subject" required />
        </div>

        <div className="col-12">
          <textarea className="form-control" name="message" rows={6} placeholder="Message" required></textarea>
        </div>

        <div className="col-12 text-center">
          <div className="loading">Sending message...</div>
          <div className="error-message"></div>
          <div className="sent-message">Thank you for reaching out! Your message has been sent successfully. We'll get back to you soon.</div>

          <button type="submit" className="btn">Send Message</button>
        </div>
      </div>
    </form>
  );
} 