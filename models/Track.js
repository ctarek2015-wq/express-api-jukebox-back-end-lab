const { Schema, model } = require("mongoose");

const trackSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  strTrackThumb: { type: String },
  strMusicVid: { type: String },
});

const Track = model("Track", trackSchema);

module.exports = Track;
