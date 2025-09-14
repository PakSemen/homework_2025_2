'use strict';

/**
 * Функция, отчищающая объект от пустых полей
 * @param {Object} obj - объект
 * 
 * @example
 * //returns { name: "Андрей", country: "Россия" }
 * compressObject({
            name: "Андрей",
            age: null,
            city: "",
            country: "Россия",
            occupation: undefined
        });
 * 
 * @returns {Object}
 */

const compressObject = function(obj){
    if (obj !== null && obj.toString() === "[object Object]") {
        for (let key in obj) {
            if (!obj[key] || !obj[key].toString()) {
                delete obj[key];
            }
        }
        return obj;
    } 
    throw new Error("ожидался объект");
}
