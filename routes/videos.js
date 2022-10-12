const express = require("express");
const router = express.Router();
const Videos = require("../models/videos");

//get all the videos
router.get("/", async (req, res) => {
  try {
    const videos = await Videos.find();
    res.json(videos);
  } catch (err) {
    res.json({ messege: "server side error occured" ,err});
  }
});
// get single video by id
router.get("/:id", async (req, res) => {
  try {
    const videos = await Videos.findById(req.params.id);
    if (videos) {
      res.json(videos);
    }else{
        res.json({messege:"No video found"})
    }
  } catch (err) {
    res.json({ messege: "server side error occured" ,err});
  }
});

//post a video
router.post("/", async (req, res) => {
  const videos = new Videos({
    ...req.body,
  });

  try {
    const a1 = await videos.save();
    res.json(a1);
  } catch (err) {
    res.json({ messege: "server side error occured",err });
  }
});

//edit a video by id
router.put("/:id", async (req, res) => {
  try {
    
    const videos = await Videos.updateOne(
      { _id: req.params.id },
      {
        title: req.body.title,
        description: req.body.description,
        thumbnail: req.body.thumbnail,
        tags: req.body.tags,
        videoLink: req.body.videoLink,
      }
    );

    if (videos) {
      res.send({
        msg: "video updated",
      });
    }
  } catch (err) {
    res.json({ messege: "server side error occured" ,err});
  }
});

//4.delete single video
router.delete("/:id", async (req, res) => {
  try {
    const iddata = await Videos.deleteOne({ _id: req.params.id });
    if (iddata == null) {
      res.send({
        msg: "Video not found",
      });
    } else {
      res.send({
        msg: "video removed successfully",
      });
    }
  } catch (err) {
    res.json({ messege: "server side error occured" ,err});
  }
});

module.exports = router;
