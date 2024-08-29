// controllers/accommodation.js
import MostPicked from "../models/mostPickedModel.js";

export const index = async (req, res) => {
  try {
    const accommodations = await MostPicked.find({});
    res.json(accommodations);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const show = async (req, res) => {
  try {
    const { id } = req.params;
    const accommodation = await MostPicked.findById(id);
    if (!accommodation) {
      return res.status(404).json({ message: "Accommodation not found" });
    }
    res.json(accommodation);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const store = async (req, res) => {
  const accommodation = new MostPicked(req.body);
  try {
    await accommodation.save();
    res.status(201).json(accommodation);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const accommodation = await MostPicked.findByIdAndDelete(id);
    if (!accommodation) {
      return res.status(404).json({ message: "Accommodation not found" });
    }
    res.status(200).json(accommodation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
