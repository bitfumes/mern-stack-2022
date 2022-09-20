import User from "../models/User.js";

export const destroy = async (req, res) => {
  const categories = req.user.categories;
  const newCategories = categories.filter(
    (category) => category._id != req.params.id
  );

  const user = await User.updateOne(
    { _id: req.user.id },
    { $set: { categories: newCategories } }
  );
  res.json({ user });
};

export const create = async (req, res) => {
  const { label, icon } = req.body;
  const response = await User.updateOne(
    { _id: req.user.id },
    { $set: { categories: [...req.user.categories, { label, icon }] } }
  );

  res.json({ response });
};

export const update = async (req, res) => {
  const { label, icon } = req.body;
  const response = await User.updateOne(
    { _id: req.user.id },
    {
      $set: {
        categories: req.user.categories.map((category) => {
          if (category._id == req.params.id) {
            return { label, icon };
          }
          return category;
        }),
      },
    }
  );

  res.json({ response });
};
