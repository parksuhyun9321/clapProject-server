let router=require("express").Router(),RequestToId=require("../api/api.auth").RequestToId,{getMessage,readMessage,deleteMessage}=require("../api/api.message");router.get("/api/message/get",async(e,s)=>{try{var{offset:a,limit:t}=e.query,r=RequestToId(e),o=await getMessage(r,a,t);s.status(200).send(o)}catch(e){console.log(e,"err"),s.status(400).send(e)}}),router.post("/api/message/read",async(e,s)=>{try{var a=RequestToId(e),t=e.body.messageId,r=await readMessage(a,t);s.status(200).send(r)}catch(e){}}),router.post("/api/message/delete",async(e,s)=>{try{var a=RequestToId(e),t=e.body.deleteData,r=await deleteMessage(a,t);s.status(200).send(r)}catch(e){}}),router.post("/api/message/post",async(e,s)=>{try{RequestToId(e);var a=e.body;console.log(a,"messageData")}catch(e){}}),module.exports=router;// build date : 2024. 12. 13. 오전 10:11:20