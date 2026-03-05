const nodemailer = require("nodemailer")

const mailSender = async (email, title, body) => {
  try {
    const host = process.env.MAIL_HOST?.trim()
    const user = process.env.MAIL_USER?.trim()
    const pass = process.env.MAIL_PASS?.trim()
    if (!host || !user || !pass) {
      throw new Error("Mail config missing: set MAIL_HOST, MAIL_USER, MAIL_PASS in environment")
    }
    let transporter = nodemailer.createTransport({
      host,
      port: 587,
      secure: false,
      auth: { user, pass },
    })

    let info = await transporter.sendMail({
      from: `"VidhyaBandhu" <${user}>`,
      to: `${email}`, // list of receivers
      subject: `${title}`, // Subject line
      html: `${body}`, // html body
    })
    console.log(info.response)
    return info
  } catch (error) {
    console.log(error.message)
    return error.message
  }
}

module.exports = mailSender
