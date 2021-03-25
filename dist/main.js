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
