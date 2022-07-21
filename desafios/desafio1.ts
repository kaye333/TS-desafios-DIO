// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";


// Resposta 1
let employee: { code: number, name: string } = {
    code: 10,
    name: "John",    
}

// Resposta 2
let employee2 = {
    code: 10,
    name: "John",
}

//Resposta 3
interface Employee{
    code: number,
    name: string,
}
let employee3:Employee = {
    code: 10,
    name: "John",
} 
