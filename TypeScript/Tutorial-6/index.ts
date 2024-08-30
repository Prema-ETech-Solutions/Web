enum ROLE {
    ADMIN,
    USER
}

type Per = {
    name: string;
    username: string;
    password: string;
    role: ROLE;
};

const obj: Per = {
    name: 'User1',
    role: ROLE.ADMIN,
    password: 'asdfghjkl',
    username: 'username'
};
const obj1: Per = {
    name: 'User2',
    role: ROLE.USER,
    password: 'asdfghjkl',
    username: 'username'
};

const isAdmin = (user: Per) => {
    return user.role == ROLE.ADMIN ? true : false;
};

if (isAdmin(obj)) {
    console.log('Admin');
} else {
    console.log('User');
}
if (isAdmin(obj1)) {
    console.log('Admin');
} else {
    console.log('User');
}
