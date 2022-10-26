import {sum} from './basic-types'

//sum(1,2)

let pid: number | string = 3
pid = '2'

enum direction {
    UP = "UP",
    DOWN = "DOWN"
}

pid = direction.UP


type user ={
    id:number;
    name: string;
}

let khaleeq:user = {
    id: 1,
    name:'khaleeq'
}
khaleeq.id = 1
khaleeq.name = 'Umar'

//console.log(khaleeq)

type myId = string | number

let id: myId = 2
id = '4'
//id = 5

console.log(id)


interface UserInterface {

    id: number;
    name: string;
    register():string

}

class student implements UserInterface {
    id: number;
    name: string;
    register(){
        return this.name + ' is registered'
    }
    constructor(id:number,name:string){
        this.id = id
        this.name = name
    }
}

const aqeel = new student(1,'aqeel')
const ammar = new student(2, 'Ammar Shabbir')
console.log(ammar.register())