import Category from "../models/categoryModel.js";

export const index = async (req, res) => {
  try {
    const accommodations = await Category.find({});
    res.json(accommodations);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// GET a specific item from a specific category by category ID and item ID
export const show = async (req, res) => {
  try {
    const { id, itemId } = req.params;
    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    const item = category.items.id(itemId);
    if (!item) {
      return res
        .status(404)
        .json({ message: "Item not found in this category" });
    }

    res.json(item);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const store = async (req, res) => {
  const accommodation = new Category(req.body);
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
    const accommodation = await Category.findByIdAndDelete(id);
    if (!accommodation) {
      return res.status(404).json({ message: "Accommodation not found" });
    }
    res.status(200).json(accommodation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
