import { Sequelize } from "sequelize";
import { AssociateUserList, ListFactory } from "./list";
import { UserFactory } from "./user";

// What is the database name? I'm using "shoppingListDB" as a placeholder for now
const dbName = 'shoppingListDB';
const username = 'root';
const password = 'Password1!';

const sequelize = new Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

ListFactory(sequelize);
UserFactory(sequelize);
AssociateUserList();

export const db = sequelize