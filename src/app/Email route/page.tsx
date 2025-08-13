// // app/api/send-email/route.ts
// import { type NextRequest, NextResponse } from "next/server"
// import nodemailer from "nodemailer"

// export async function POST(request: NextRequest) {
//   try {
//     const { to, subject, message } = await request.json()

//     // Validate
//     if (!to || !subject || !message) {
//       return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
//     }

//     // Only allow sending to your official email
//     const allowedEmail = "info.workownix@gmail.com"
//     if (to.trim().toLowerCase() !== allowedEmail) {
//       return NextResponse.json(
//         { error: "You can only send messages to the official Workownix email address." },
//         { status: 403 }
//       )
//     }

//     // Create transporter (use your real Gmail credentials or App Password)
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.GMAIL_USER, // your Gmail
//         pass: process.env.GMAIL_PASS, // app password
//       },
//     })

//     // Send email
//     await transporter.sendMail({
//       from: `"Workownix Contact" <${process.env.GMAIL_USER}>`,
//       to: allowedEmail,
//       subject,
//       text: message,
//     })

//     return NextResponse.json({ success: true, message: "Email sent successfully." }, { status: 200 })
//   } catch (error) {
//     console.error("Email sending error:", error)
//     return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
//   }
// }
