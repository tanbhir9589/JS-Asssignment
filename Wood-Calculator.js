function WoodCalcultor(number1,number2,number3) {
    if(number1){
        console.log("Chair Vaule :",number1);
        var chair = 1;
        var result = number1 * chair;
        
    }
    if (number2) 
    {
        console.log("Table Vaule :",number2);
          var table = 3;
          var result1 = number2 * table;
    } 
    else (number3)
        console.log("Bad Vaule :",number3);
        var bad = 5;
        var result3 = number3 * bad;

        var output = result + result1 + result3 ;
        console.log("Total Wood Is : ", output ,"Feet");
        return output;  
}
WoodCalcultor(2,6,8);