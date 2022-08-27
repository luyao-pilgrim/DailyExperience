let name = "The Window";

var object = {
    name: "My Object",

    getNameFunc: function () {
        return function () {
            return this.name;
        };

    }

};

console.log(object.getNameFunc()());
console.log(1);