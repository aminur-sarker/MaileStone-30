const student ={

    name : 'aminur sarker',
    age : 35,
    study : 'Bsc in CSE',
    id: 222,
    isCleaned: true
}
//  keys: sudhu key gula k output hisebe dibe
console.log(Object.keys(student)); // output: [ 'name', 'age', 'study', 'id', 'isCleaned' ]


// Values: Sudhu value gula k output hisebe dibe
console.log(Object.values(student));  //output: [ 'Aminur', 35, 'Bsc in CSE', 222, true ]


// array of array

const entire= Object.entries(student);
console.log(entire); /* output: [
                                    [ 'name', 'aminur' ],
                                    [ 'age', 35 ],
                                    [ 'study', 'Bsc in CSE' ],
                                    [ 'id', 222 ],
                                    [ 'isCleaned', true ]
                                ]
                                */


// delete any keys
delete student.isCleaned;
// console.log(student);  output: { name: 'aminur', age: 35, study: 'Bsc in CSE', id: 222 }


// object a r kono change ana jabe na.
Object.freeze(student);
student.location= 'Rangpur';  //freeze use koray output a change hobe na
console.log(student) //output: { name: 'aminur sarker', age: 35, study: 'Bsc in CSE', id: 222 }
