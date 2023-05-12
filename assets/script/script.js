let say = () => console.log('"Я учу JavaScript!"');
say();


function isLeap(year){
    if (year % 4 === 0){
        if(year % 100 === 0){
            if (year % 400 === 0){
                return `${year} это високосный год`;
            }
            else{
                return `${year} это не високосный год`;
            }
        } else {
            return `${year} это високосный год`;
        }
    } else {
        return `${year} это не високосный год`;
    }
}

console.log (isLeap(2020));
console.log (isLeap(2021));
console.log (isLeap(2022));
console.log (isLeap(2023));
console.log (isLeap(2024));