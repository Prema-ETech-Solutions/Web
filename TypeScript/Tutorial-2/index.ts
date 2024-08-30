function sum(num1: number, num2: number): number {
    return num1 + num2;
}
const sub = (num1: number, num2: number): number => {
    return num1 - num2;
};
const println = (data: any): void => {
    console.log(data);
};
const YourInfo = (name: string, age?: number): string => {
    if (age) {
        return `Your name is ${name} and Age is ${age}`;
    }
    return `Your name is ${name} `;
};
const YourInfo2 = (name: string, age?: number): string => {
    return `Your name is ${name}${age ? ` and Age is ${age}` : ``}`;
};

println(sum(10, 10));
println(sub(10, 20));
println(YourInfo('Hello', 10));
println(YourInfo('Hello'));
println(YourInfo2('Hello'));
println(YourInfo2('Hello', 2));
