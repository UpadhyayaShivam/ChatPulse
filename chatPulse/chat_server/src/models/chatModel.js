const mongoose = require('mongoose');


const chatSchema  = mongoose.Schema(
    {
        ChatName: {
            type :String,
            trim:true,
        },
        isGroupChat: {
            type:Boolean,
            unique : true,
        },
        user:[
            {
                type: mongoose.Schema.Types.ObjectId ,
                ref : "User",   
            }
        ],
        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            // required: true,
        },
        groupAdmin:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    },
    { timestaps: true }
);

const Chat = mongoose.model("Chat" , chatSchema);

module.exports = Chat;