const addId = <T>(obj: T) => {
    const id = Math.random().toString(16)
    return {
        ...obj,
        id,
    };
};

interface UserInterface3{
    name: string;
}

const user4: UserInterface3 = {
    name: 'jack',
};

const result = addId<UserInterface3>(user4);
console.log('result', result);