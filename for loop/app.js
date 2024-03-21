//q1
for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

// q2

document.write(" <br>")
document.write("<br>")
document.write(" q2<br>")
document.write("<br>")

for (var i = 1; i <= 20; i++) {
    if (i % 2 === 0){
        document.write(i + "<br>");
    }
}
 
//q3
document.write(" <br>")
document.write("<br>")
document.write(" q3<br>")
document.write("<br>")

for (var i = 1; i <= 15; i++) {
    if (i % 2 === 1){
        document.write(i + "<br>");
    }
}

//q4
document.write(" <br>")
document.write("<br>")
document.write(" q4<br>")
document.write("<br>")

for (var i = 1; i <= 10; i++) {
    document.write(7 + " X " + i + " = " + 7*i + "<br>");
}

//q5
document.write(" <br>")
document.write("<br>")
document.write(" q5(squaring)<br>")
document.write("<br>")

for (var i = 1; i <= 10; i++) {
    document.write(i*i + "<br>");
}


//q6
document.write(" <br>")
document.write("<br>")
document.write(" q6(largest num in array)<br>")
document.write("<br>")
var number = [3,7,2,9,5];
var largest = number[0];

for (var i = 1; i <= number.length; i++) {
    if(number[i] > largest){
        largest = number[i]
    }
    
}
document.write(largest);


//q7
document.write(" <br>")
document.write("<br>")
document.write(" q7(reverse string)<br>")
document.write("<br>")
var str = "hello"
var revstr = "";

for (var i = str.length - 1; i >= 0; i--) {
    revstr = str[i];
    document.write(revstr);
}
