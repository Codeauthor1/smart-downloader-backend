const ytdl = require("ytdl-core");

const youtubeDownload = async (req, res) => {
  console.log("body: ", req.query);
  try {
    const isYTValidURL = ytdl.validateURL(req.query.url);
    if (!isYTValidURL)
      return res.send("Not a valid url, please enter a valid youtube url");

    const videoInfo = await ytdl.getInfo(req.query.url);

    res.send({
      videoFormat: videoInfo.formats,
      videoDetails: videoInfo.videoDetails,
      relatedVideos: videoInfo.related_videos,
    });
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

module.exports = youtubeDownload;
