"use strict";
let num1 = 458;
document.write('<i>the given no is  = </i>', num1.toString());
let cn = num1;
let rn = 0;
while (num1 > 0) {
    let rever_no = num1 % 10;
    rn = (rn * 10) + rever_no;
    num1 = Math.floor(num1 / 10);
}
document.write('<br> <i>the revers no</i> = ' + rn);
// Q2.Develop a program to check whether a number is a palindrome.
document.write(' <h3><i>Q2.Develop a program to check whether a number is a palindrome.</i></h3>');
let num2 = 121;
let clone_num2 = num2;
let rever_num2 = 0;
while (num2 > 0) {
    let digit2 = num2 % 10;
    rever_num2 = (rever_num2 * 10) + digit2;
    num2 = Math.floor(num2 / 10);
}
document.write('<i>the given no is  = </i> ', rever_num2.toString());
if (clone_num2 == rever_num2) {
    document.write('<br><i>the given no is palindrome no </i>');
}
else {
    document.write('<i>the given no is not palindrome </i>');
}
//Q3. Write a program to print the Fibonacci series up to n terms using a loop.
document.write(' <h3><i>Q3. Write a program to print the Fibonacci series up to n terms using a loop.</i></h3>');
let no_3 = 7;
document.write("<i>the given no is = </i> ", no_3 + "<br>");
let a = 0;
let b = 1;
document.write('the Fibonacci serise for the given number of times = `');
for (let f = 1; f < no_3; f++) {
    document.write(a + " ");
    let next = a + b;
    a = b;
    b = next;
}
//Q4. Create a program to find the factorial of a number using a loop.
document.write('<h3><i>Q4. Create a program to find the factorial of a number using a loop.<br></h3></i>');
let no_4 = 5;
let sum_1 = 1;
document.write('<i>the given no</i> = <br> ', +no_4 + "<br>".toString());
for (let f4 = 1; f4 <= no_4; f4++) {
    sum_1 = sum_1 * f4;
}
document.write('the factorial no ' + no_4 + '   is =  ' + sum_1 + "<br>");
// Q5. Develop a program to check whether a number is a prime number.
document.write("<h3><i>Q5.Develop a program to check whether a number is a prime number.</i></h3>");
let no_5 = 7;
let count = 0;
document.write('<i>the given no is = </i>' + no_5 + "<br>");
for (let p5 = 1; p5 <= 1; p5++) {
    if (no_5 % p5 == 0) {
        count++;
    }
}
if (count == 2) {
    document.write('<i>the given no is prime </i>=', "<br>");
}
else {
    document.write('<i>the given no is not prime</i> ');
}
// Q6. Write a program to count the total number of digits in a given number.
document.write("<h3><i>Q6 Write a program to count the total number of digits in a given number.</i></h3>");
let no_6 = 7898787;
document.write('<i>the given no is =</i>' + no_6 + "<br>");
let count_2 = 0;
while (no_6 > 0) {
    no_6 = Math.floor(no_6 / 10);
    count_2++;
}
document.write('<i>total no of digit present in the given no</i> = ' + count_2 + "<br>".toString());
// Q7. Create a program to calculate the sum of digits of a number.
document.write("<h3><i> Q7. Create a program to calculate the sum of digits of a number.</i></h3>");
let n0_7 = 12345;
document.write('<i>the given no is = </i>' + n0_7 + "<br>");
let sum_3 = 0;
while (n0_7 > 0) {
    let digit_7 = n0_7 % 10;
    sum_3 = sum_3 + digit_7;
    n0_7 = Math.floor(n0_7 / 10);
}
document.write("<i>Sum of digits = </i> " + sum_3 + "<br>".toString());
// Q8. Develop a program to check whether a number is an Armstrong number.
document.write("<h3><i>Q8. Develop a program to check whether a number is an Armstrong number. </i></h3>");
let num_8 = 153;
document.write('the given no is =' + num_8 + "<br>".toString());
let original_no = num_8;
let sum_8 = 0;
let digits_8 = num_8;
while (num_8 > 0) {
    let digit_8 = num_8 % 10;
    sum_8 = sum_8 + Math.floor(digit_8 * digit_8 * digit_8);
    num_8 = Math.floor(num_8 / 10);
}
// <i></i>
if (sum_8 === original_no) {
    document.write("<i>the given no is a Armstrong number. </i>");
}
else {
    document.write("<i>the given no is not a Armstrong number. </i>");
}
// Q9. Write a program to calculate the power of a number using a loop.
document.write("<h3><i>Q9. Write a program to calculate the power of a number using a loop.</i></h3>");
let num_9 = 2;
let power_9 = 5;
let result_9 = 1;
for (let i_9 = 1; i_9 <= power_9; i_9++) {
    result_9 = result_9 * num_9;
}
document.write("Power = " + result_9);
// Q10. Create a program to print the following number pattern.
document.write("<h3><i>Q10.Create a program to print the following number pattern</i></h3>");
let p_10 = document.write('');
let star_10 = '';
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        star_10 += j + " ";
    }
    star_10 += "<br/>";
}
document.write(star_10 + "<hr>");
// Q11. Create a program to print the following number pattern:
document.write("<h3><i>Q11.Create a program to print the following number pattern</i></h3>");
let p = document.write('<br>');
let star = '';
for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        star += j + " ";
    }
    star += "<br/>";
}
document.write(star + "<hr>");
document.write("<h3><i>Q12.Create a program to print the following number pattern</i></h3>");
let i = document.write('<br>');
let empty_star = '';
for (let i = 5; i >= 1; i--) {
    for (let s = 5; s > i; s--) {
        empty_star += "_ ";
    }
    for (let j = 1; j <= i; j++) {
        empty_star += j + " ";
    }
    empty_star += "<br/>";
}
document.write(empty_star + "<hr>");
document.write("<h3><i>Q13.Create a program to print the following number pattern</i></h3>");
let i_2 = document.write('');
let star_2 = '';
for (let i_2 = 1; i_2 <= 5; i_2++) {
    for (let s = 5; s > i_2; s--) {
        star_2 += "_ ";
    }
    for (let j = 1; j <= i_2; j++) {
        star_2 += j + " ";
    }
    star_2 += "<br/>";
}
document.write(star_2 + "<hr>");
