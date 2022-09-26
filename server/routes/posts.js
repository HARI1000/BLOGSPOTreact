const router=require("express").Router();
const Post= require("../models/Post");

router.post("/blogpost",async (req,res)=>{
    const newPost = new Post(req.body);
       try{ 
        const savedpost=await newPost.save();
        res.status(201).json(savedpost);
       }
       catch(err){
        res.status(500).json(err);
        console.log(err);
       }
}) 


router.put("/update/:id",async (req,res)=>{
    try{
        const post=await Post.findById(req.params.id);
        if(post.username===req.body.username)
        {
            try{
        const updatedPost =await Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(updatedPost);
            }
            catch(err){
                res.status(500).json(req);
            }

        }
        else{
            res.status(401).json("you cant update other post");
        }
    }
    catch(err)
    {
        res.status(500).json(err);
    }
});


router.delete("/deletepost/:id",async(req,res)=>{
    
    const delpst=await Post.findById(req.params.id);
    if(delpst.username === req.body.username){
        try{
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("successfully deleted");
        }
        catch(err)
        {
        res.status(400).json(err);
        }
    }
    else{
        res.status(401).json({1:delpst.username,2:req.body.username,3:"the given blog is not yours to delete"})
    }
})

router.get("/getpost/:id",async (req,res)=>{
    try{
    const post=await Post.findById(req.params.id);
    res.status(200).json(post);
    }
    catch(err){
        res.status(500).json(err);
    }
});

router.get("/",async (req,res)=>{
    const username =req.query.user;
    const catname =req.query.cat;
    try{
        let posts;
        if(username)
        {   try{
            posts=await Post.find({username:username});
            }
            catch(err)
            {
                res.status(501).json(err);
            }
        }else if(catname){
            try
            {posts=await Post.find({category:{$in:[catname]}});
            }
            catch(err)
            {
                res.status(502).json(err);
            }
        }
        else{
            try
            {posts=await Post.find();}
            catch(err)
            {
                res.status(503).json(err);
            }
        }
    res.status(200).json(posts);
    }
    catch(err){
        res.status(504).json(err);
    }
});

 module.exports=router;
