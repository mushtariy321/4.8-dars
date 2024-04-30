// let arr = [8, 17., 1, 4, 10]
// let num = +prompt(`son kiriting!`)
// let res = arr.sort((v, i) => v - i)
// console.log(res);
// let result = res.map((arr) => arr * num)
// console.log(result);



// let result = (Math.min(4, 10, 888, 99, 100));
// let result2 = (Math.max(4, 10, 888, 99, 100));
// let number = [4, 10, 888, 99, 100]
// alert(number);
// alert(`Min number - ${result} \n Max number - ${result2}`);



let arr = [2, 4, 9, 10, 45, 67, 8, 90]
var res = arr.filter((v, i, a) => v % 2 == 0)

alert(`Berilgan son: ${arr}\n Juft sonlar: ${res}`)
