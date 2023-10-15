let myobj = {
    name: 'Saumya',
    age: 26
};

let myobj_serialized = JSON.stringify(myobj)

localStorage.setItem('myobj' , myobj_serialized);
console.log(myobj_serialized);

let myobj_desialized =  JSON.parse(localStorage.getItem("myobj"));
console.log(myobj_desialized);