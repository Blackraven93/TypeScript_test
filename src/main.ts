let hello: string = "world";

type ID = string;
type PopularTag = string;

// you shoud write capital letter about type and interface

const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
};

console.log(getFullName('Monster', 'Lessons'));


/**
 * If you want to declare value or param
 * You must to clarify type!
 */

function Greeting(name:string, surname:string):string {
    return 'Hi' + name + surname;
}

interface UserInterface {
    id?: ID;
    name: string;
    surname?: string;
    age?: number;
    getMessage() : string;
}


const user: UserInterface | null = {
    name: 'raven',
    age: 30,
    getMessage() {
        return "Hello" + name;
    },
};

const user2: UserInterface = {
    name : 'Jack',
    getMessage() {
        return "Hello" + name;
    },
};

console.log(user.getMessage());


let username:string = 'alex';

let pageName: string | number = "1";

let errorMessage: string | null = null;

// let someProp: string | number | null
//  <== This is so bad code -_-;

const popularTags: PopularTag[] = ['dragon', 'coffee'];