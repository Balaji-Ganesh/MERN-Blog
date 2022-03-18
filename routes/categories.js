const router = require("express").Router();
const Category = require("../models/Category");

// new cateories..
router.post("/", async (request, response) => {
  const category = new Category(request.body);
  try {
    const savedCategory = await category.save();
    console.info("[SUCCESS] category created successfully");
    response.status(200).json(savedCategory);
  } catch {
    console.error("[ERROR] Category creation failed.");
    response.status(500).json("Category creation failed");
  }
});

// Get all the categories..
router.get("/", async (request, response) => {
  try {
    const categories = await Category.find();
    response.status(200).json(categories);
  } catch (error) {
    console.error("[ERROR] Can't retrieve categories. Error: " + error);
    response.status(500).json("Sorry, can't retrieve categories.");
  }
});

module.exports = router;
