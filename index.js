require("dotenv").config()
const twilio=require("twilio");

const accountSid=process.env.accountSid;
const authToken=process.env.authToken;
const messagingServiceSid=process.env.messagingServiceSid;
const to=process.env.to;

const client=twilio(accountSid,authToken);

const sendSms=async(message)=>{

const res=await client.messages.create({
body:message,
messagingServiceSid:messagingServiceSid,
to:to
});

console.log(res.sid);
}

//call the sendSms function:
sendSms("its just a test sms...");
