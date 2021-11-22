const List = require("./List.js");
const ListService = require("./ListService.js");

class ListController {
    async create(req, res) {
        try {
            console.log(req)
            const post = await ListService.create(req.query)
            res.json(post)
            
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const lists = await ListService.getAll();
            return res.json(lists);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            console.log(req)
            const list = await ListService.getOne(req.params.id)
            return res.json(list)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const updatedList = await ListService.update(req.query);
            return res.json(updatedList);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            console.log(req)
            const list = await ListService.delete(req.params.id);
            return res.json(list)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}


module.exports = new ListController();