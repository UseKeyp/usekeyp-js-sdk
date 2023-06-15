const nodemailer = require("nodemailer");
import { NextApiRequest, NextApiResponse } from "next";
import { Errors, Info } from "types/restAPI";
import { mailData } from "../../../utils/nodemailer";

const request = (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  transporter.sendMail(mailData(data), function (err: Errors, info: Info) {
    if (err) {
      console.log(err);
      return res.status(400).json({ message: "Bad request" });
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  return res.status(200).json({ success: true });
};

export default request;
