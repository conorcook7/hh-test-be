const { ApolloError } = require("apollo-server");

module.exports = async (_, { id, input }, { models }) => {
  try {
    const colorToUpdate = await models.Color.findOne({ _id: id });
    if (!colorToUpdate)
      throw new ApolloError(`Could not find color with id: '${id}'.`, 400);

    Object.keys(input).forEach(
      (value) => (colorToUpdate[value] = input[value])
    );

    const updatedColor = await colorToUpdate.save();
    return updatedColor;
  } catch (e) {
    throw new ApolloError(e);
  }
};
