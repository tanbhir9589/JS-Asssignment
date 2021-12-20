function FeetToMile(number) {
    console.log("Enter Your Feet Number Is :",number);
    if (number < 0){
        console.log("Distance Can't be negative!");
        return "Wrong Input"
    }
    else{
        var mile = 0.000189394;
        var feet = number * mile;
        console.log("Your  Mile  : ",feet);
    }  
    
    return feet ; 
}
 FeetToMile(-5);

