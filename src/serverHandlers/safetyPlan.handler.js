import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS
  }
});

export default function(req, res) {
	console.log(req.body);
  let text = 'Here\'s your safety plan: ';
  let html = '<p>Here\'s your safety plan:</p><ul>'
  Object.keys(req.body).forEach((key) => {
    text += key + ': ' + req.body[key] + ', ';
    html += '<li>' + key + ': ' + req.body[key] + '</li>'
  });
  html += '</ul>'
  transporter.sendMail({
    from: '"Safe Steps Test" <safesteps@example.com>',
    to: req.body.email,
    subject: 'Safe Steps Email Test',
    text: text,
    html: html
  }, (err, info) => {
    if (err) {
      console.log(err);
      res.send();
    } else {
      console.log(success);
      res.send();
    }

  });
}
