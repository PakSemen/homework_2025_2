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
    const o = obj;
    for (let key in o) {
        if (o[key] == null || o[key] == undefined || o[key] == "") {
            delete o[key];
        }
    }
    return o;
}
