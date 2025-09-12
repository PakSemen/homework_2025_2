'use strict';

QUnit.module("Тестируем функцию compressObject", function() {
    QUnit.test("Сжатие объекта с null, undefined и пустыми строками", function(assert) {
        const result = compressObject({
            name: "Андрей",
            age: null,
            city: "",
            country: "Россия",
            occupation: undefined
        });

        assert.deepEqual(result, { name: "Андрей", country: "Россия" }, "Должны остаться только ключи с ненулевыми значениями.");
    });

    QUnit.test("Работает с объектом без ненулевых значений", function(assert) {
        const result = compressObject({
            a: null,
            b: undefined,
            c: "",
        });

        assert.deepEqual(result, {}, "Объект без ненулевых значений должен вернуть пустой объект.");
    });

    QUnit.test("Работает с пустым объектом", function(assert) {
        const result = compressObject({});

        assert.deepEqual(result, {}, "Пустой объект должен вернуть пустой объект.");
    });

    QUnit.test("Работает с объектом, содержащим только валидные значения", function(assert) {
        const result = compressObject({
            a: 1,
            b: "hello",
            c: true,
            d: [1,2,3]
        });

        assert.deepEqual(result, {
            a: 1,
            b: "hello",
            c: true,
            d: [1,2,3]
        }, "Объект с только валидными значениями должен остаться неизменным");
    });

    QUnit.test("Проверяет обработку undefined значений", function(assert) {
        const result = compressObject({
            defined: "value",
            undefinedProp: undefined,
            anotherDefined: 42
        });

        assert.deepEqual(result, {
            defined: "value",
            anotherDefined: 42
        }, "Свойства с undefined должны быть удалены");
    });

    QUnit.test("Выбрасывает ошибку при передаче строки", function(assert) {
        assert.throws(() => compressObject("Плачу на техно, я плачу на технопарке"),
            new Error("ожидался объект"),
            "Должна выбрасываться ошибка при передаче строки"
        );
    });

    QUnit.test("Выбрасывает ошибку при передаче числа", function(assert) {
        assert.throws(() => compressObject(42), 
            new Error("ожидался объект"),
            "Должна выбрасываться ошибка при передаче числа"
        );
    });
});
