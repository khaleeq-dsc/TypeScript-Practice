/* Basic Types */

let id: number = 5
//console.log('id of type number', id)

let userName:string = 'Khaleeq'
//console.log('userName of type string', userName)

let isPresent : boolean = true
isPresent = false
//console.log('isPresent of type boolean', isPresent)

let x : any = 'DynaSoft'
x = 1234
//console.log('x of type any', x)

let idsList: number[] = [1,2,3,5]
//console.log('idsList of type number array', idsList)

let namesList : any[] = ['khaleeq',{'name':'Nouman'}]
//console.log('namesList of type any array', namesList)

export function sum(a:number, b:number):void{
    console.log(a+b)
}
//sum(1,2)

