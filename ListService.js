const List = require("./List.js");

class ListService {
    async create(list) {
        const createdList = await List.create(list);
        return createdList;
    }

    async getAll() {
        const lists = await List.find();
        return lists;
    }
    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const list = await List.findById(id);
        return list;
    }

    async update(list) {
        console.log(list)
        if (!list._id) {
            throw new Error('не указан ID')
        }
        const updatedList = await List.findByIdAndUpdate(list._id, list, {new: true})
        return updatedList;
    }

    async delete(id) {
        console.log(id)
            if (!id) {
                throw new Error('не указан ID')
            }
            const list = await List.findByIdAndDelete(id);
            return list;
    }
}


module.exports = new ListService();