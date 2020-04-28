const users = require("../../models/users")

module.exports = {
    getAll : (req, res) => {
        try {
            res.status(200).json({
                data: users, 
                message: "Get All Data User"});
        } catch (error) {
            res.json(error);
        }
    },
    addUser: (req, res) => {
        try {
            const {name,address} =req.body;
            const newUser = {
                id:users.length + 1,
                name,
                address,
            };

            users.push(newUser);
           

            res.status(200).json({
                message: "Create new data is Successfully",
                data: users,
            });
        } catch (error) {
            res.json(error);
            console.log(error);
        }
    },
    editUser:(req, res) => {
        try {
            const id = req.params.id;
            const {name, address} = req.body;

            const editUser = {
                id: Number(id),
                name,
                address,
            };
            users.splice(id-1, 1, editUser)

            res.status(200).json({
                message: "Users is changed",
                data: users,
            });
        } catch (error) {
            res.json(error);
        }
    },
    filterByAddress : (req, res) => {
        const { address } = req.query;

        const filteredUser = users.filter((element) => {
            return element.address === address;
        });

        res.status(200).json({
            message: "get data filter by address",
            data: filteredUser,
        });
    },
    findByID: (req,res) => {
        const id = req.params.id;

        const findUserId = users.filter((element) => {
            return element.id == id;
        });
        console.log(id);
        
        res.status(200).json({
            message: "get data find by id",
            data: findUserId,
        });
    },
        
    deleteAll: (req,res) => {    
            res.status(200).json({
                message: "Users is deleted",
                data: [],
            });
        
    },
    deleteByID: (req,res) => {
        try {
            const id = req.params.id;

            users.splice(id-1, 1, this.deleteByID)

            res.status(200).json({
                message: "Users is changed",
                data: users,
            });
        } catch (error) {
            res.json(error);
        }
        
    },
};