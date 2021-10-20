// basic types

let id: number = 5;
let company: string = "firattamur";
let isPublished: boolean = false;
let x: any = "any type to here";

let ids: number[] = [1, 2, 3, 4];
let arr: any[] = [1, true, "string"];

// tuple 

let person: [number, string, boolean] = [1, "firat", true];

let employee: [number, string][]

employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
]

// union

let pid: string | number = 22;

pid = "22";

// enum

enum Direction {

    up = 1,
    down,
    left,
    right

}

console.log(Direction.down)

// objects

// const user: {
//     id: number,
//     name: string
// } = {
//     id: 1,
//     name: "firat"
// }

type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: "firat"
}

// type assertion

let cid: any = 1;

let customerId1 : number = <number>cid
let customerId2 : number = cid as number

// functions

function addNumber(x: number, y: number): number {
    return x + y
}

// void

function log(message: string | number): void {
    console.log(message)
}

// interfaces

interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 10,
    name: "firat"
}

// type vs inteface
// we can use type for basic types

type Point = string | number;
let point: Point = 10;
let point2: Point = "10";

// cannot change because readonly
// user1.id = 3;

interface ArithmeticFunction {
    (x: number, y:number): number
}

const add: ArithmeticFunction = (x: number, y: number) => x + y;
const sub: ArithmeticFunction = (x: number, y: number) => x - y;

// classes

class Person {

    private id: number
    protected name: string

    constructor(id: number, name: string) {
        this.id = id,
        this.name = name
    }

}

const firat = new Person(10, "firat");
const tamur = new Person(11, "tamur");

// subclasses
class Employee extends Person {

    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }

}

// generics or templates

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["firat", "tamur"]);

// error because of type conflict
// numArray.push("firat");
// strArray.push(1);




