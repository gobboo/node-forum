module.exports = (sequelize, DataTypes) => {
  const Thread = sequelize.define('Thread', {
    title: DataTypes.STRING,
    threadIcon: DataTypes.STRING,
    briefDescription: DataTypes.STRING,
    content: DataTypes.TEXT,
    assignedForum: DataTypes.INTEGER
  })

  return Thread
}