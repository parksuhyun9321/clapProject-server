const mongoose = require("mongoose");

const UserScheme = mongoose.Schema({
    id : String,
    pw: String,
    name : String,
    createRegister : Date,
    gender : Number,
    profileImg : String,
    job : String,
    hashTag : Array,
    phone : {
        value : {
            type : String,
            
        },
        isPublic : {
            type : Boolean,
            default:false
        },
    },
    email : {
        value : {
            type : String,
            trim: false,
            required: true
        },
        isPublic : {
            type : Boolean,
            default:false
        }
    },
    birth : {
        value : {
            type : String,
            required: true
        },
        isPublic : {
            type : Boolean,
            default:false
        }
    },
})

const UserModel = mongoose.model("User",UserScheme);

module.exports = { UserModel }// build date : 2024. 12. 13. 오전 10:11:20