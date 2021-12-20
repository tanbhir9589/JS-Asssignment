function brickCalculatot(hight) {
    var count = 0;
    var  feetCount = 0; 
    var feet = 1000;
      if (hight < 0){
          return console.log("Hight must be less than ZERO !");
      }
      if (hight <= 10) {
               console.log("Your Floor Number Is : ", hight);
               count = hight * 15;
               feetCount = count * feet;
               console.log("Total Brick Is :", feetCount);
               return count;
      }
       else if (hight <= 20 ){
                console.log("Your Floor Number Is : ", hight);
                count = hight * 12;
                feetCount = count * feet;
                console.log("Total Brick Is :", feetCount);
                return count;
                 
      }else(hight > 20)
                console.log("Your Floor Number Is : ", hight);
                count = hight * 10;
                feetCount = count * feet;
                console.log("Total Brick Is :", feetCount);
                return count;
                            
}
brickCalculatot(10);