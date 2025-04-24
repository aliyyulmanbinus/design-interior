"use server"

import { Resend } from "resend"

// Initialize Resend - in production you would use an environment variable
// You'll need to sign up at https://resend.com to get an API key
const resend = new Resend("re_Mn19Dn9P_F4DqQQvRZbGb3W4959jvpatC") // Replace with your actual API key

export async function sendEmail(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = (formData.get("phone") as string) || "Not provided"
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return {
        success: false,
        error: "Missing required fields",
      }
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["aliyyulmanbinus@gmail.com"],
      subject: `Contact Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        
        Message:
        ${message}
      `,
      replyTo: email,
    })

    if (error) {
      console.error("Error sending email:", error)
      return {
        success: false,
        error: "Failed to send email",
      }
    }

    return {
      success: true,
      data,
    }
  } catch (error) {
    console.error("Error in sendEmail:", error)
    return {
      success: false,
      error: "An unexpected error occurred",
    }
  }
}
