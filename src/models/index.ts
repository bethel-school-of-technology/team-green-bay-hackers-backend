import { Sequelize } from "sequelize";
import { AssociateUserList, ListFactory } from "./lists";
import { UserFactory } from "./user";

const dbName = 'good_eats';
const username = 'green_bay';
const password = 'hackers123'

const sequelize = new Sequelize(dbName, username, password, {
    // host: 'localhost',
    host: 'db4free.net',
    port: 3306,
    dialect: 'mysql'
});

ListFactory(sequelize);
UserFactory(sequelize);
AssociateUserList();

export const db = sequelize
