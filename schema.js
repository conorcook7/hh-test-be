module.exports = async (_, {}, { models }) => {
  return await models.Color.find();
};
