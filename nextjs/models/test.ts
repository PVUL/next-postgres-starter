import { nanoid } from 'nanoid';
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from 'sequelize';

export class Test extends Model<
  InferAttributes<Test>,
  InferCreationAttributes<Test>
> {
  declare id: CreationOptional<string>;
}

export const loadTestModel = (sequelize: Sequelize) => {
  return Test.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: nanoid,
      },
    },
    {
      sequelize,
      tableName: 'test',
    }
  );
};