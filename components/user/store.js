import Model from './model';

const addUser = (user) => {
    const myUser = new Model(user);

    return myUser.save();
}

const listUsers = () => {
    return Model.find();
}

export default {
    add: addUser,
    list: listUsers,
}