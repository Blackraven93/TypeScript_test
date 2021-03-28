let hello: string = "world";

type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null

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

/**
 * void TypeScript
 */

const doSomething = (): void => {
    console.log('doSomething');
    return 1; // error
};

// When we don't return anything it's void



let foo: void = null;
foo = undefined;
// Void is a set of undefined and null

let raven: any = 'raven';
// Any type turns off TypeScript checks
// but Any is not a solution but start of bigger problems

const neverSomething = ():never => {
    console.log('never something');
}

//unknown was introduced in Typescript3

let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
let s2: string = vUnknown as string;

let numericPageNumber: number = (pageNumber as unknown) as number;

let page:any = "1";
let pageNumber = page as string;

const someElement = document.querySelector('.foo');

someElement.addEventListener('blur', (event) => {
    const target = event.target as HTMLInputElement
    console.log('event', target.value);
})


interface UserInterface2 {
    getFullname(): string;
}


class User implements UserInterface2{
    protected firstName: string
    private lastName: string
    readonly unchangableName: string;
    static readonly maxAge = 50;


    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }

    changeUnchangableName(): void {
        // this.unchangableName = 'foo';
    }

    getFullname(): string {
        return this.firstName + ' ' + this.lastName
    }
}

const user3 = new User('Monster', 'lessons');

class Admin extends User {
    private editor: string

    setEditor(editor:string) : void {
        this.editor = editor
    }

    getEditor(): string {
        return this.editor
    }
}


console.log(user3.getFullname);
console.log(User.maxAge);

const admin = new Admin('foo', 'bar');
console.log(admin);