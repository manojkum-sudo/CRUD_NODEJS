import courseModel from  '../models/course.js';


export const createCourse = async(req,res)=>{
    const newCourse = new courseModel(req.body);

    try{
        const saveCourse = await newCourse.save();
        res.status(200).json(saveCourse);
    }catch(err){
        res.status(404).json({message:err.message});
    }

}

export const getCourse = async(req,res)=>{
   
    try{
        // const fetchCourse = await courseModel.find({ name:{ $in:'sai baba'}});
        // const fetchCourse = await courseModel.find({author:'sai nath'}); //filter
        // const fetchCourse = await (await courseModel.find({author:'sai nath'})).limit(0).sort({name:1}).select({name:1});
        // const fetchCourse = await courseModel.find().or([{name:'sai baba'},{isPublished:true}]);


        //starts with
    const fetchCourse = await (await courseModel.find({author:/^sai/ }))    //.find({author: /nath$/})  //find({author: /.*sai.*/}) <--contains

        

        res.status(200).json(fetchCourse);
    }catch(err){
        res.status(404).json({message:err.message});
    } 
    
}

export const getCourseById = async (request, response) => {
    try{
        const user = await courseModel.findById(request.params.id);
        response.status(200).json(user);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

export const editCourse = async (req, res) => {
    let user = request.body;

    const editUser = new courseModel(user);
    try{
        await User.updateOne({_id: req.params.id}, editUser);
        res.status(201).json(editUser);
    } catch (err){
        res.status(404).json({ message: err.message});     
    }
}

// deleting data of course from the database
export const deleteCourse = async (req, res) => {
    try{
        await User.deleteOne({_id: req.params.id});
        res.status(201).json("Course deleted Successfully");
    } catch (err){
        res.status(404).json({ message: err.message});     
    }
}



