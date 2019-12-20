const nodemailer = require('nodemailer');

const APP_HOST = process.env.APP_HOST || 'http://localhost:3000'

const user = process.env.MAIL_USER
const pass = process.env.MAIL_PASS

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user, pass }
});

module.exports.sendValidateEmail = (targetUser) => {
  transporter.sendMail({
    from: `"SportMeet" <${user}>`,
    to: targetUser.email,
    subject: 'Welcome to SportMeet!',
    html: `
      <h1>Welcome</h1>
      <a href='${APP_HOST}/players/${targetUser.activationToken}/validate'>Confirm account</a>
    `
  })
    .then(info => console.log(info))
    .catch(error => console.log(error))
}

module.exports.sendValidateEmailForClub = (targetUser) => {
  transporter.sendMail({
    from: `"SportMeet" <${user}>`,
    to: targetUser.email,
    subject: 'Welcome to SportMeet!',
    html: `
      <h1>Welcome</h1>
      <p>...we are going to check bla bla bla...<p>
      `
  })
    .then(info => console.log(info))
    .catch(error => console.log(error))
}

module.exports.sendClubRequestToAdmin = (targetUser) => {
  transporter.sendMail({
    from: `${targetUser.name} <${targetUser.email}>`,
    to: user,
    subject: 'You have a new club to review!',
    html: `
      <h1>${targetUser.name}</h1>
      <ul>
        <li>name: ${targetUser.name}</li>
        <li>address: ${targetUser.address}</li>
        <li>city: ${targetUser.city}</li>
      </ul>
      <a href='${APP_HOST}/clubs/${targetUser.activationToken}/validate'>Confirm account</a>

      `
  })
    .then(info => console.log(info))
    .catch(error => console.log(error))
}

module.exports.validateClub = (targetUser) => {
  transporter.sendMail({
    from: `"SportMeet" <${user}>`,
    to: targetUser.email,
    subject: 'Your club has been confirmed!',
    html: `
      <h1>Welcome</h1>
      <a href='${APP_HOST}/login'>Log in</a>
    `
  })
    .then(info => console.log(info))
    .catch(error => console.log(error))
}

module.exports.sendValidateMatchEmail = (targetUser, targetSport) => {
  transporter.sendMail({
    from: `"SportMeet" <${user}>`,
    to: targetUser.email,
    subject: `You have a ${targetSport.name} match!`,
    html: `
      <h1>You have a ${targetSport.name} match!</h1>
    `
    //<a href='${APP_HOST}/players/${targetUser.activationToken}/validate'>Confirm account</a>

  })
    .then(info => console.log(info))
    .catch(error => console.log(error))
}