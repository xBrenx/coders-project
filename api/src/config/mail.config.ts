const nodemailer = require ('nodemailer')


const mail ={
  user: 'ibroughtPopCorn@gmail.com',
  pass: 'xakspcagfydyfwnf'
}

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  tls: {
      rejectUnauthorized: false
  },
  secure: true, // true for 465, false for other ports
  auth: {
    user: mail.user, // generated ethereal user
    pass: mail.pass, // generated ethereal password
  },
});


const sendEmail = async (email: any, subject: any,html: any)=>{
  try{
      await   transporter.sendMail({
          from:`${mail.user}`,
          to:email,
          subject,
          text:"Welcome to I Brought Pop Corn",
          html,
      })
  }catch(error){
      console.log("Something went wrong with your email",error)
  }

}

const getTemplate = (email: any,token: any)=>{
  return `
      <head>
          <link rel="stylesheet" href="./style.css">
      </head>
      
      <div id="email___content">
          <img src="https://www.flickr.com/photos/197399024@N05/52623616952/in/dateposted-public/" alt="">
          <h2>Hola ${ email }</h2>
          <p>Para confirmar tu cuenta, ingresa al siguiente enlace</p>
          <a
              href="http://localhost:3001/users/confirm/${token}
              target="_blank"
          >Confirmar Cuenta</a>
      </div>
    `};



    module.exports= {
      sendEmail,
      getTemplate,
    }