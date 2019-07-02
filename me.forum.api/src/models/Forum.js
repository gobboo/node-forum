module.exports = (sequelize, DataTypes) => {
  const Forum = sequelize.define('Forum', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    private: DataTypes.BOOLEAN,
    allowedRoles: DataTypes.STRING,
  })

  return Forum
}