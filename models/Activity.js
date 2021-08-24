const sequelize = require('../config/connection');
class Activity extends Model {}

Activity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
  },
    service_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'service',
          key: 'id',
      }
  },
  date_created: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  user_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'user',
          key: 'id',
      }
  }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'activity',
  }
);


module.exports = Activity;