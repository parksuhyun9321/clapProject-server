let ResumeModel=require("../model/resume").ResumeModel,dataEncrypt=require("../util/crpyto").dataEncrypt,ResultResponse=require("../util/resultResponse");function getResume(e,s,t){try{var u={id:e};return Promise.all([ResumeModel.countDocuments(u).exec(),ResumeModel.find(u).sort({createDate:-1}).skip(Number(s)*t).limit(t)]).then(e=>{var s=e[0],e=e[1];return new ResultResponse(200,dataEncrypt({total:s,resume:e}))}).catch(e=>{throw new ResultResponse(400,e,"getResume ERROR")})}catch(e){throw new ResultResponse(400,e,"getResume catch ERROR")}}function addResume(s,e){try{e.id=s;new ResumeModel(e).save();var t=new ResultResponse(200);return t}catch(e){s=new ResultResponse(404,e.stack,e.message);throw console.log(s),s}}function updateResume(s,e){try{var t={id:s,_id:e.resumeId};return ResumeModel.updateOne(t,e).then(e=>new ResultResponse(200))}catch(e){s=new ResultResponse(404,e.stack,e.message);throw console.log("updateResume",s),s}}function deleteResume(s,e){try{var t={id:s,_id:e};return ResumeModel.deleteOne(t).then(e=>new ResultResponse(200))}catch(e){s=new ResultResponse(404,e.stack,e.message);throw console.log(s),s}}module.exports={getResume:getResume,updateResume:updateResume,addResume:addResume,deleteResume:deleteResume};// build date : 2024. 12. 13. 오전 10:11:20