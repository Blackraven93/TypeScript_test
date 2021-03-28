var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var hello = "world";
// you shoud write capital letter about type and interface
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName('Monster', 'Lessons'));
/**
 * If you want to declare value or param
 * You must to clarify type!
 */
function Greeting(name, surname) {
    return 'Hi' + name + surname;
}
var user = {
    name: 'raven',
    age: 30,
    getMessage: function () {
        return "Hello" + name;
    }
};
var user2 = {
    name: 'Jack',
    getMessage: function () {
        return "Hello" + name;
    }
};
console.log(user.getMessage());
var username = 'alex';
var pageName = "1";
var errorMessage = null;
// let someProp: string | number | null
//  <== This is so bad code -_-;
var popularTags = ['dragon', 'coffee'];
/**
 * void TypeScript
 */
var doSomething = function () {
    console.log('doSomething');
    return 1; // error
};
// When we don't return anything it's void
var foo = null;
foo = undefined;
// Void is a set of undefined and null
var raven = 'raven';
// Any type turns off TypeScript checks
// but Any is not a solution but start of bigger problems
var neverSomething = function () {
    console.log('never something');
};
//unknown was introduced in Typescript3
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
var s2 = vUnknown;
var numericPageNumber = pageNumber;
var page = "1";
var pageNumber = page;
var someElement = document.querySelector('.foo');
someElement.addEventListener('blur', function (event) {
    var target = event.target;
    console.log('event', target.value);
});
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }
    User.prototype.changeUnchangableName = function () {
        // this.unchangableName = 'foo';
    };
    User.prototype.getFullname = function () {
        return this.firstName + ' ' + this.lastName;
    };
    User.maxAge = 50;
    return User;
}());
var user3 = new User('Monster', 'lessons');
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
console.log(user3.getFullname);
console.log(User.maxAge);
var admin = new Admin('foo', 'bar');
console.log(admin);
