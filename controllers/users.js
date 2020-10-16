const { v4: uuidv4 } = require('uuid');

let users = [];

const createUser = ((req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4()});

    res.send(`User with name ${user.firstName} ${user.lastName} age ${user.age} added.`);
});

const getUsers = (req, res) => {
    res.send(users);
    console.log(users);
};

const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id == id);

    res.send(foundUser);
};

const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send(`User with ${id} deleted`);
};

const patchUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age} = req.body;

    const userToUpdate = users.find((user) => user.id == id);

    if (firstName)
        userToUpdate.firstName = firstName;

    if (lastName)
        userToUpdate.lastName = lastName;

    if (age)
        userToUpdate.age = age;

    res.send(`User with ${id} updated.`)
};

module.exports = { createUser, getUsers, getUser, deleteUser, patchUser };