const exress = require("express");
const { createUser, getUsers, getUser, deleteUser, patchUser } = require('../controllers/users.js')

const router = exress.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', patchUser);

//export default router;
module.exports = router;