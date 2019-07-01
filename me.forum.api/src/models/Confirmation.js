module.exports = (sequelize, DataTypes) => {
  const Confirmation = sequelize.define('Confirmation', {
    userEmail: DataTypes.STRING,
    secretToken: {
      type: DataTypes.STRING,
      unique: true
    },
    validUntil: DataTypes.STRING
  })

  return Confirmation
}