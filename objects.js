//В файле objects.js решить задачи № 4, 5 из доп. инфы
/*Имеется объект

const user = {
age: 16,
name: 'Dean Azimbaev'
}

поле name изменить на Roman Zaviyazkin
поле age заменить на 25*/
//4
const user = {
    age: 16,
    name: 'Dean Azimbaev'
}
user.age = 25
user.name = " Roman Zaviyazkin"
console.log(user)
/*
Написать функцию hasRequiredFields(),
которая проверяет объекты типа user на наличие в нем значений,
и если есть все необходимые значения, то функция должна возвращать true 
, иначе false*/
const user1 = {};
const user2 = {
    age: 23
};
const user3 = {
    age: 23,
    name: ''
}
const user4 = {
    age: '',
    name: ''
}
const user5 = {
    age: 23,
    name: 'Dean'
}
console.log(user4.name.length)
function hasRequiredField(obj) {
    return obj.name && obj.age ? true : false

}
console.log(hasRequiredField(user4))