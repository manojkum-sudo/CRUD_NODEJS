import mongoose from "mongoose";


const courseSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:5
    },
    author:{
        type:String,
        required:true,
    },
    tags:[String],
    
    // tags:{
    //     type:Array
    //     validate:{
        // isAsync:true
    //         validator:function(v,callback){
                // setTimeout(()=>{
                    // Do some work 
                    // const result = v && v.length> 0;
                    // callback(result);
                // },4000)
    //             return v.length > 0;
    //         },
    //         message:'A course should have at least one tag'
    //     }
    // },

    category:{
        type:String,
        required:true,
        enum:['web','mobile','network']
    },
    date:{type:Date,default:Date.now},
    isPublished:Boolean
})

export default mongoose.model('course', courseSchema);