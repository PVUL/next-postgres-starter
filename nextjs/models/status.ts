import { nanoid } from 'nanoid';
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from 'sequelize';

export class Status extends Model<
  InferAttributes<Status>,
  InferCreationAttributes<Status>
> {
  declare id: CreationOptional<string>;
  declare name: CreationOptional<string>;
}

export const loadStatusModel = (sequelize: Sequelize) => {
  return Status.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      tableName: 'Statuses',
    }
  );
};
