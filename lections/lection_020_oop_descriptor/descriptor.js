
/* 
    Object.defineProperty(obj, prop, descriptor)
        obj - Объект, в котором будум настраивать свойство.
        prop - имя настраемого свойства
        descriptor - объект настройки свойства.

    descriptor: {
        value: значение свойства. по умолчанию undefined,
        writable: значение свойства можно менять, если true. По умолчанию false,
        configurable: если true, то свойство можно удалят/менять его в
                       дальнейшем при помощи новых вызовов defineProperty.
                       По умолчанию false,
        enumerable: если true, то свойство просматривается 
                    в цикле for..in и методе Object.keys(). По умолчанию false.,
        get – функция, которая возвращает значение свойства. По умолчанию undefined
        set – функция, которая записывает значение свойства. По умолчанию undefined.
    }


    Запрещено использовать:
    * одновременно get/set и value
    * указывать writable при наличии get/set-функций.
*/

// ----- descriptors ------

const obj = {
    name: 'Valera',
    get b1() {
        return `${this.a} Hello!`
    },
    set b1(v) {
        this._b1 = v;
    }
};

obj.b1 = 'valera';


/* -- 

Object.defineProperty(
    target, 
    'propertyName', 
    descriptor
)

*/

// base
const baseDescriptor = {
    configurable: false, // true or false(default), 
    enumerable: false // true or false (default)
};


// data

const dataDescriptor = {
    value: '3.14',
    writable: false // true or false
}


// or access

const accessDescriptor = {
    get() {
        return '3.14';
    },
    set(v) {}
};


// Object.defineProperty(obj, 'firstName', {...baseDescriptor, ...dataDescriptor})

Object.defineProperty(obj, 'PI', {...baseDescriptor, ...accessDescriptor})


// exmp base:
// delete obj.firstName;
// Object.defineProperty(obj, 'PI', {configurable: true}); //Error
// console.log(Object.keys(obj))

// for(let key in obj) {
//     console.log(key)
// }


// -----
console.log(obj.PI);//read
// obj.PI = '5.15';
// delete obj.PI;

console.log(obj);

//--------------------------------



