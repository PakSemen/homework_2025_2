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
    var copyObj = structuredClone(obj);
    if (copyObj !== null && copyObj.toString() === "[object Object]") {
        for (let key in copyObj) {
            if (!copyObj[key] || !copyObj[key].toString()) {
                delete copyObj[key];
            }
        }
        return copyObj;
    } 
    throw new Error("ожидался объект");
}
