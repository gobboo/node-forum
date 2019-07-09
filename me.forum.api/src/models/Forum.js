module.exports = (sequelize, DataTypes) => {
  const Forum = sequelize.define('Forum', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    icon: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    private: DataTypes.BOOLEAN,
    allowedRoles: DataTypes.STRING,
  })

  return Forum
}