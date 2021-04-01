import store from './store';

const addUser = (name) => {
    if (!name)
        return Promise.reject('Invalid name');

    const user = {
        name,
    };

    return store.add(user);
}

const listUsers = () => {
    return store.list();
}

export default {
    addUser,
    listUsers,
}