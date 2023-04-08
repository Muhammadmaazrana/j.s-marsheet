// var subjects=+prompt("Enter the marks of English");
// var b=+prompt("Enter the marks of urdu");
// var c=+prompt("Enter the marks of math");
// var d=+prompt("Enter the marks of physics");
// var e=+prompt("Enter the marks of islamiaat");
// var f=a+b+c+d+e;
// var g=f/500*100
// alert("The total marks you get is:"+" "+f +" "+"out of 500" +" " +"and the percentage you get is:"+" "+g);

var subjects=[];

subjects[0]=+prompt("enter the marks of english");
subjects[1]=+prompt("enter the marks of urdu");
subjects[2]=+prompt("enter the marks of biology");
subjects[3]=+prompt("enter the marks of physics");
subjects[4]=+prompt("enter the marks of islamiaat");


subjects[5]=subjects[0]+subjects[1]+subjects[2]+subjects[3]+subjects[4];
alert("the total marks you get is:"+" "+subjects[5] +" "+"out of 475");

subjects[6]=subjects[5]/475*100;

alert("and the percentage you get is:"+" "+subjects[6]+"%")
