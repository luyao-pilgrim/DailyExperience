// 组合继承：用原型链实现对原型属性和方法的继承，用借用构造函数技术来实现实例属性的继承。这样原型上的构造函数上的都兼顾到了
// 核心：SuperType.call(this) + SubType.prototype = new SuperType()
function SuperType(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
  }
  SuperType.prototype.sayName = function(){
    alert(this.name);
  };
  
  function SubType(name, age){
    SuperType.call(this, name);
    this.age = age;
  }

  SubType.prototype = new SuperType(); 
  // 这里有了组合的小问题，sub的构造函数上和原型上有了同样名称的属性，虽然会覆盖没事，但是会影响性能
  SubType.prototype.constructor = SubType; 
  SubType.prototype.sayAge = function(){
      alert(this.age);
  };


// 组合寄生继承：也是现在的基本实现方式
// 原型是原型，构造是构造，清晰划分
function inherit(Super, Sub){
    let tmp = Object.create(Super.prototype)
    Sub.prototype = tmp
    tmp.constructor = Sub
}

//+Super.call(this)