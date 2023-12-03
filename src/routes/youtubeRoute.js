const express = require("express");
const youtubeDownload = require("../youtube/youtubeDownload");

const router = express.Router();

router.get("/youtube-video-download", youtubeDownload);

module.exports = router;
