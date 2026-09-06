const Track = require("../models/Track");

const create = async (req, res) => {
  try {
    const newTrack = await Track.create(req.body);
    res.status(201).json(newTrack);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const index = async (req, res) => {
  try {
    const tracks = await Track.find();
    res.status(200).json(tracks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const show = async (req, res) => {
  try {
    const track = await Track.findById(req.params.id);
    if (!track) {
      return res.status(404).json({ error: "Track not found" });
    }
    res.status(200).json(track);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const track = await Track.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!track) {
      return res.status(404).json({ error: "Track not found" });
    }
    res.status(200).json(track);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const destroy = async (req, res) => {
  try {
    const track = await Track.findByIdAndDelete(req.params.id);
    if (!track) {
      return res.status(404).json({ error: "Track not found" });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  index,
  show,
  create,
  update,
  delete: destroy,
};
