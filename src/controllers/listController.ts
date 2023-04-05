import { RequestHandler } from "express";
import { List } from "../models/lists";
import { User } from "../models/user";
import { verifyUser } from "../services/authService";

export const getAllLists: RequestHandler = async (req, res, next) => {
    let lists = await List.findAll();
    res.status(200).json(lists);
}

export const createList: RequestHandler = async (req, res, next) => {
    let user: User | null = await verifyUser(req);

    if (!user) {
        return res.status(403).send();
    }
    
    let newList: List = req.body;
    newList.userId = user.userId;
    
    if (newList.title) {
        let created = await List.create(newList);
        res.status(201).json(created);
    }
    else {
        res.status(400).send();
    }
}
export const getList: RequestHandler = async (req, res, next) => {
    let listId = req.params.id;
    let list = await List.findByPk(listId);
    if (list) {
        res.status(200).json(list);
    }
    else {
        res.status(404).json({});
    }
}

export const updateList: RequestHandler = async (req, res, next) => {
    let listId = req.params.id;
    let newList: List = req.body;
    let listFound = await List.findByPk(listId);
    
    let user: User | null = await verifyUser(req);

    if (!user) {
        return res.status(403).send();
    }
    
    if (listFound && listFound.listId == newList.listId
        && newList.title) {
            await List.update(newList, {
                where: { listId: listId }
            });
            res.status(200).json();

    }
    
    else {
        res.status(400).json();
    }
}

export const deleteList: RequestHandler = async (req, res, next) => {
    let listId = req.params.id;
    let found = await List.findByPk(listId);
    let user: User | null = await verifyUser(req);

    if (!user) {
        return res.status(403).send();
    }
    
    if (found) {
        await List.destroy({
                where: { listId: listId }
        });
        res.status(200).json();
    }
    else {
        res.status(404).json();
    }
}