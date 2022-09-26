import { Sequelize } from 'sequelize';

const sequelizeConnection = new Sequelize(process.env.DATABASE_URL!);

export default sequelizeConnection;
