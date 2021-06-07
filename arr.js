//1.2) В файле arr.js решить задачи № 1, 2 из доп. инфы
/* Задача 1
Написать функцию высчитывающую сумму всех отрицательных
 элементов в массиве*/

let array = [1, 2, -1, -1, -1, -1, 2]
let otris_array = array.filter(item => item < 0)
let sum = otris_array.reduce((a, b) => a + b)
console.log("сумма всех отрицательных элементов в массиве", sum)
/*Имеется массив сотрудников it отдела, подсчитать
 среднее арефметическое зарплат сотрудников*/
const it_department_employees = [
    {
        name: 'Roman',
        salary: 1200
    },
    {
        name: 'Aijan',
        salary: 2000
    },
    {
        name: 'Asel',
        salary: 8000
    },
    {
        name: 'Timur',
        salary: 2100
    },
    {
        name: 'Altynai',
        salary: 300
    }
]

let array_zarplata = it_department_employees.map(item => (item.salary))
let all_zarplata = array_zarplata.reduce((a, b) => a + b)
let credoi_zarplata = all_zarplata / array_zarplata.length
console.log("Среднее арефметическое зарплата сотрудников", credoi_zarplata)
