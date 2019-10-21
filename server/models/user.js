module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    User.belongsToMany(Todo, { through: UserTodo });
  };
  return User;
};
