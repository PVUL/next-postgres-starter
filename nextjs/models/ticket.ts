import { nanoid } from 'nanoid';
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from 'sequelize';

import sequelize from '../util/sequelize';

// export class Ticket extends Model<
//   InferAttributes<Ticket>,
//   InferCreationAttributes<Ticket>
// > {
//   declare title: CreationOptional<string>;
//   declare description: CreationOptional<string>;
//   declare assignee: CreationOptional<string>;
//   declare status: CreationOptional<Status>;
// }

export const Ticket = sequelize.define(
  'Ticket',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    assignee: {
      type: DataTypes.STRING,
    },
    statusId: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    tableName: 'Tickets',
  }
);
