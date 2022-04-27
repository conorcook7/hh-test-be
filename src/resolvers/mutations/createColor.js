const { ApolloError } = require("apollo-server");

module.exports = async (_, { input }, { models }) => {
  try {
    newColor = await models.Color.create(input);
    return newColor;
  } catch (e) {
    throw new ApolloError(e);
  }
};
