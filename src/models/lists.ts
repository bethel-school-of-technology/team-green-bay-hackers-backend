import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";
import { User } from "./user";

export class List extends Model<InferAttributes<List>, InferCreationAttributes<List>>{
    declare listId: number;
    declare title: string;
    declare userId: number;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

export function ListFactory(sequelize: Sequelize) {
    List.init({
        listId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        userId: {
            type: DataTypes.INTEGER,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    }, {
        freezeTableName: true,
        tableName: 'lists',
        sequelize
    });
}

export function AssociateUserList() {
    User.hasMany(List, { foreignKey: 'userId' });
    List.belongsTo(User, { foreignKey: 'userId' });
}

