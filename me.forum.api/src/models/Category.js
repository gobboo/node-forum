module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    category: DataTypes.STRING,
    icon: DataTypes.STRING,
    description: DataTypes.STRING
  })

  return Category
}