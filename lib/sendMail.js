export const sendEmail = async (emailContent) => {
    const emailData = emailContent;
  
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.NEXT_PUBLIC_BREVO_KEY
      },
      body: JSON.stringify(emailData)
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    else {
        console.log("Email sent successfully!");
    }
  
    const data = await response.json();
    return data;
  }