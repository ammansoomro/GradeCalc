function updateOutput() {
    var ch01 = parseFloat(document.getElementsByName("CH01")[0].value);
    var gr01 = parseFloat(document.getElementsByName("Grade01")[0].value);
    var ch02 = parseFloat(document.getElementsByName("CH02")[0].value);
    var gr02 = parseFloat(document.getElementsByName("Grade02")[0].value);
    var ch03 = parseFloat(document.getElementsByName("CH03")[0].value);
    var gr03 = parseFloat(document.getElementsByName("Grade03")[0].value);
    var ch04 = parseFloat(document.getElementsByName("CH04")[0].value);
    var gr04 = parseFloat(document.getElementsByName("Grade04")[0].value);
    var ch05 = parseFloat(document.getElementsByName("CH05")[0].value);
    var gr05 = parseFloat(document.getElementsByName("Grade05")[0].value);
    var ch06 = parseFloat(document.getElementsByName("CH06")[0].value);
    var gr06 = parseFloat(document.getElementsByName("Grade06")[0].value);
    var ch07 = parseFloat(document.getElementsByName("CH07")[0].value);
    var gr07 = parseFloat(document.getElementsByName("Grade07")[0].value);
    var ch08 = parseFloat(document.getElementsByName("CH08")[0].value);
    var gr08 = parseFloat(document.getElementsByName("Grade08")[0].value);
    var result = document.getElementsByName("result")[0];

    var TotalCreditHours = (ch01 + ch02 + ch03 + ch04 + ch05 + ch06 + ch07 + ch08);
    
    var SGPA = (((ch01 * gr01) + (ch02 * gr02) + (ch03 * gr03) + (ch04 * gr04) + (ch05 * gr05) + (ch06 * gr06) + (ch07 * gr07) + (ch08 * gr08)) / TotalCreditHours).toFixed(2);
    
    result.value = SGPA;    
}

function updateCGPA() {
    var gpa = document.getElementsByName("resultCGPA")[0];
    var ch1 = parseFloat(document.getElementsByName("ch1")[0].value);
    var gpa1 = parseFloat(document.getElementsByName("gpa1")[0].value);
    var ch2 = parseFloat(document.getElementsByName("ch2")[0].value);
    var gpa2 = parseFloat(document.getElementsByName("gpa2")[0].value);
    var ch3 = parseFloat(document.getElementsByName("ch3")[0].value);
    var gpa3 = parseFloat(document.getElementsByName("gpa3")[0].value);
    var ch4 = parseFloat(document.getElementsByName("ch4")[0].value);
    var gpa4 = parseFloat(document.getElementsByName("gpa4")[0].value);
    var ch5 = parseFloat(document.getElementsByName("ch5")[0].value);
    var gpa5 = parseFloat(document.getElementsByName("gpa5")[0].value);
    var ch6 = parseFloat(document.getElementsByName("ch6")[0].value);
    var gpa6 = parseFloat(document.getElementsByName("gpa6")[0].value);
    var ch7 = parseFloat(document.getElementsByName("ch7")[0].value);
    var gpa7 = parseFloat(document.getElementsByName("gpa7")[0].value);
    var ch8 = parseFloat(document.getElementsByName("ch8")[0].value);
    var gpa8 = parseFloat(document.getElementsByName("gpa8")[0].value);

    var totalHours = (ch1 + ch2 + ch3 + ch4 + ch5 + ch6 + ch7 + ch8);

    console.log(totalHours);
    console.log(gpa1);

    var CGPA = (((ch1 * gpa1) + (ch2 * gpa2) + (ch3 * gpa3) + (ch4 * gpa4) + (ch5 * gpa5) + (ch6 * gpa6) + (ch7 * gpa7) + (ch8 * gpa8))/totalHours).toFixed(2);

    gpa.value = CGPA;
    
    


}