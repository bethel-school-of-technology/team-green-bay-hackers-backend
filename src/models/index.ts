import { Sequelize } from "sequelize";
import { AssociateUserList, ListFactory } from "./lists";
import { UserFactory } from "./user";

const dbName = 'shoppingListDB';
const username = 'root';
const password = 'M0sher325';

const sequelize = new Sequelize(dbName, username, password, {
    host: 'localhost',

    port: 3306,
    dialect: 'mysql'
});

ListFactory(sequelize);
UserFactory(sequelize);
AssociateUserList();

export const db = sequelize
