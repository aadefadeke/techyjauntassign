const Item = require('../models/Item');

/*
Controller functions return JSON and appropriate HTTP codes.
Create, Read (all & single), Update, Delete
*/

exports.createItem = async (req, res, next) => {
  try {
    const { title, description, completed } = req.body;
    const item = new Item({ title, description, completed });
    await item.save();
    return res.status(201).json(item);
  } catch (err) {
    next(err);
  }
};

exports.getItems = async (req, res, next) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    return res.json(items);
  } catch (err) {
    next(err);
  }
};

exports.getItemById = async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    return res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.updateItem = async (req, res, next) => {
  try {
    const updates = req.body;
    const item = await Item.findByIdAndUpdate(req.params.id, updates, { new: true, runValidators: true });
    if (!item) return res.status(404).json({ message: 'Item not found' });
    return res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.deleteItem = async (req, res, next) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    return res.json({ message: 'Item deleted' });
  } catch (err) {
    next(err);
  }
};
