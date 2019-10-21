"use strict";
module.exports = (sequelize, DataTypes) => {
  const UserTodo = sequelize.define(
    "UserTodo",
    {
      // No attributes required, just the userId and todoId
      // You could add something else here like a favorites boolean field so a user
      //   can mark a todo as "favorited".
    },
    {}
  );
  UserTodo.associate = function(models) {
    // associations can be defined here
  };

  return UserTodo;
};
