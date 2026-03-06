import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const PORTFOLIO_URL =
  process.env.PORTFOLIO_URL || "https://hanssalangsang.space/";

function buildOwnerEmailHtml(name: string, email: string, message: string) {
  const safeName = name || "Visitor";
  const safeEmail = email;
  const safeMessageHtml = message.replace(/\n/g, "<br />");

  return `<!DOCTYPE html>
<html lang="en" style="margin:0; padding:0;">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1"
    />
    <title>Hans Salangsang – Portfolio Contact</title>
  </head>
  <body
    style="
      margin:0;
      padding:0;
      font-family:'Poppins', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
    "
  >
    <table
      role="presentation"
      cellpadding="0"
      cellspacing="0"
      width="100%"
      style="border-collapse:collapse; margin:0; padding:24px 12px;"
    >
      <tr>
        <td align="center" style="padding:0; margin:0;">
          <table
            role="presentation"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style="
              max-width:600px;
              width:100%;
            "
          >
            <tr>
              <td
                style="
                  padding:20px 20px 24px 20px;
                  border-radius:16px;
                  background-color:#080817;
                "
              >
                <table
                  role="presentation"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                  style="border-collapse:collapse; margin-bottom:16px;"
                >
                  <tr>
                    <td style="vertical-align:middle;">
                      <div
                        style="
                          font-size:26px;
                          font-weight:600;
                          color:#FFF8E8;
                          margin:12px 0 2px 0;
                        "
                      >
                        New portfolio message
                      </div>
                      <div
                        style="
                          font-size:13px;
                          line-height:1.6;
                          color:#B2C4FF;
                          margin:0;
                        "
                      >
                        You received a new message from your portfolio contact form.
                      </div>
                    </td>
                  </tr>
                </table>
                <div
                  style="
                    margin:12px 0 12px 0;
                    height:1px;
                    background-color:#6589ff;
                    opacity:0.6;
                  "
                ></div>
                <p
                  style="
                    margin:20px 0 4px 0;
                    font-size:13px;
                    line-height:1.7;
                    color:#B2C4FF;
                  "
                >
                  <strong style="color:#FFF8E8;">From:</strong>
                  <span> ${safeName} </span>
                </p>
                <p
                  style="
                    margin:0 0 18px 0;
                    font-size:13px;
                    line-height:1.7;
                    color:#B2C4FF;
                  "
                >
                  <strong style="color:#FFF8E8;">Email:</strong>
                  <a
                    href="mailto:${safeEmail}"
                    style="color:#B2C4FF; text-decoration:none;"
                  >
                    ${safeEmail}
                  </a>
                </p>
                <p
                  style="
                    margin:20px 0 4px 0;
                    font-size:12px;
                    letter-spacing:0.06em;
                    color:#FFF8E8;
                  "
                >
                  Message
                </p>
                <div
                  style="
                    margin:0 0 16px 0;
                    color:#B2C4FF;
                    font-size:13px;
                    line-height:1.7;
                    word-break:break-word;
                  "
                >
                  ${safeMessageHtml}
                </div>
                <div
                  style="
                    margin:12px 0 12px 0;
                    height:1px;
                    background-color:#6589ff;
                    opacity:0.6;
                  "
                ></div>
                <p
                  style="
                    margin:0 0 4px 0;
                    font-size:12px;
                    line-height:1.7;
                    color:#B2C4FF;
                  "
                >
                  View your portfolio:
                </p>
                <p style="margin:0; font-size:12px; line-height:1.7;">
                  <a
                    href="${PORTFOLIO_URL}"
                    style="
                      color:#6589ff;
                      text-decoration:none;
                      border-bottom:1px solid #6589ff;
                    "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open portfolio
                  </a>
                </p>
              </td>
            </tr>
            <tr>
              <td style="height:16px; font-size:0; line-height:0;">&nbsp;</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function buildUserEmailHtml(name: string, email: string, message: string) {
  const safeName = name || "there";
  const safeEmail = email;
  const safeMessageHtml = message.replace(/\n/g, "<br />");

  return `<!DOCTYPE html>
<html lang="en" style="margin:0; padding:0;">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1"
    />
    <title>Hans Salangsang – Thank You</title>
  </head>
  <body
    style="
      margin:0;
      padding:0;
      font-family:'Poppins', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
    "
  >
    <table
      role="presentation"
      cellpadding="0"
      cellspacing="0"
      width="100%"
      style="border-collapse:collapse; margin:0; padding:24px 12px;"
    >
      <tr>
        <td align="center" style="padding:0; margin:0;">
          <table
            role="presentation"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style="
              max-width:600px;
              width:100%;
            "
          >
            <tr>
              <td
                style="
                  padding:20px 20px 24px 20px;
                  border-radius:16px;
                  background-color:#080817;
                "
              >
                <table
                  role="presentation"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                  style="border-collapse:collapse; margin-bottom:16px;"
                >
                  <tr>
                    <td style="vertical-align:middle;">
                      <div
                        style="
                          font-size:26px;
                          font-weight:600;
                          color:#FFF8E8;
                          margin:12px 0 2px 0;
                        "
                      >
                        Thanks for reaching out
                      </div>
                      <div
                        style="
                          font-size:13px;
                          line-height:1.6;
                          color:#B2C4FF;
                          margin:0;
                        "
                      >
                        I’ve received your message and will get back to you soon.
                      </div>
                    </td>
                  </tr>
                </table>
                <div
                  style="
                    margin:12px 0 12px 0;
                    height:1px;
                    background-color:#6589ff;
                    opacity:0.6;
                  "
                ></div>
                <p
                  style="
                    margin:20px 0 4px 0;
                    font-size:16px;
                    font-weight:600;
                    line-height:1.7;
                    color: #FFF8E8;
                  "
                >
                  Hi ${safeName},
                </p>
                <p
                  style="
                    margin:0 0 18px 0;
                    font-size:13px;
                    line-height:1.7;
                    color:#B2C4FF;
                  "
                >
                  Thank you for getting in touch through my web portfolio. Your message is important to me, and I’ll review it as soon as possible.
                </p>
                <p
                  style="
                    margin:20px 0 4px 0;
                    font-size:12px;
                    letter-spacing:0.06em;
                    color: #FFF8E8;
                  "
                >
                  Your message
                </p>
                <div
                  style="
                    margin:0 0 16px 0;
                    color:#B2C4FF;
                    font-size:13px;
                    line-height:1.7;
                    word-break:break-word;
                  "
                >
                  ${safeMessageHtml}
                </div>
                <p
                  style="
                    margin:80px 0 0 0;
                    font-size:13px;
                    line-height:1.7;
                    color:#B2C4FF;
                  "
                >
                  Kind regards,
                </p>
                <p
                  style="
                    margin:0 0 16px 0;
                    font-size:13px;
                    line-height:1.7;
                    color: #FFF8E8;
                    font-weight:500;
                  "
                >
                  Hans&nbsp;Salangsang
                </p>
                <div
                  style="
                    margin:12px 0 12px 0;
                    height:1px;
                    background-color:#6589ff;
                    opacity:0.6;
                  "
                ></div>
                <p
                  style="
                    margin:0 0 4px 0;
                    font-size:12px;
                    line-height:1.7;
                    color:#B2C4FF;
                  "
                >
                  You can learn more about my work and experience here:
                </p>
                <p style="margin:0; font-size:12px; line-height:1.7;">
                  <a
                    href="${PORTFOLIO_URL}"
                    style="
                      color:#6589ff;
                      text-decoration:none;
                      border-bottom:1px solid #6589ff;
                    "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View my portfolio
                  </a>
                </p>
              </td>
            </tr>
            <tr>
              <td style="height:16px; font-size:0; line-height:0;">&nbsp;</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    const host = process.env.EMAIL_HOST;
    const port = process.env.EMAIL_PORT
      ? Number(process.env.EMAIL_PORT)
      : 587;
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const fromAddress = process.env.EMAIL_FROM || user;
    const ownerAddress = process.env.EMAIL_TO || "hans.salangsang@gmail.com";

    if (!host || !user || !pass || !fromAddress || !ownerAddress) {
      console.error("Email configuration is missing required environment variables.");
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    // Email to you (portfolio owner)
    await transporter.sendMail({
      from: fromAddress,
      to: ownerAddress,
      replyTo: email,
      subject: `[Web Portfolio] New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: buildOwnerEmailHtml(name, email, message),
    });

    // Thank-you / confirmation email to the user
    await transporter.sendMail({
      from: fromAddress,
      to: email,
      subject: "Thanks for reaching out",
      text: `Hi ${name || "there"},\n\nThanks for reaching out. I've received your message and will get back to you soon.\n\nYour message:\n${message}\n\n— Hans`,
      html: buildUserEmailHtml(name, email, message),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error handling contact form submission:", error);
    return NextResponse.json(
      { error: "Something went wrong while sending your message." },
      { status: 500 },
    );
  }
}

