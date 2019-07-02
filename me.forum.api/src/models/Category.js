module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    category: DataTypes.STRING,
    description: DataTypes.STRING
  })

  return Category
}