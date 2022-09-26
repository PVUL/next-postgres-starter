import sequelizeConnection from '../util/sequelize';
import { loadTestModel } from './test';

const test = loadTestModel(sequelizeConnection);

export { test };
