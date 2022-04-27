const { ApolloError } = require("apollo-server");

module.exports = async (_, { id }, { models }) => {
  try {
    colorToDelete = await models.Color.deleteOne({ _id: id });
    return { id };
  } catch (e) {
    throw new ApolloError(e);
  }
};
