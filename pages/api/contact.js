// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, transporter } from "../config/nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (
      !data.name ||
      !data.email ||
      !data.number ||
      !data.subject ||
      !data.message
    ) {
      return res.status(400).json({ message: "Bad request" });
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        number: data.number,
        text: "this is a test message",
        html: "<h1>Text title</h1><p>some body text</p>",
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "error.message" });
    }
  }

  return res.status(400).json({ message: "Bad request" });
};

export default handler;
