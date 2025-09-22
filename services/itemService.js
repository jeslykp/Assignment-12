import Item from "../models/itemModel.js";

export const createItemService = async (itemDetails) => {
  try {
    const newItem = new Item(itemDetails); 
    await newItem.save();
    return newItem;
  } catch (error) {
    console.error("ItemService error:", error.message);
    return false; 
  }
};

export const getItemsService = async () => {
  try {
    const items = await Item.find();
    return items;
  } catch (error) {
    console.error("ItemService error:", error.message);
    return [];
  }
};
