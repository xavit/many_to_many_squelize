module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    "Todo",
    {
      description: DataTypes.STRING,
      completed: DataTypes.BOOLEAN
    },
    {}
  );
  Todo.associate = function(models) {
    Todo.belongsToMany(User, { through: UserTodo });
  };
  return Todo;
};
