function speedDetector(){

    const velocity = document.getElementById('numSpeed').value;
  
// switch statement with ternary expressions 
    switch(
        (velocity >= 0 && velocity <= 70) ? 1 : 
        (velocity >= 71 && velocity <= 75) ? 2 : 
        (velocity >= 76 && velocity <= 80) ? 3 : 
        (velocity >= 81 && velocity <= 85) ? 4 :  
        (velocity >= 86 && velocity <= 90) ? 5: 
        (velocity >= 91 && velocity <= 95) ? 6 : 
        (velocity >= 96 && velocity <= 100) ? 7 : 
        (velocity >= 101 && velocity <= 105) ? 8 : 
        (velocity >= 106 && velocity <= 110) ? 9 : 
        (velocity >= 111 && velocity <= 115) ? 10 : 
        (velocity >= 116 && velocity <= 120) ? 11 : 
        (velocity >= 121 && velocity <= 125) ? 12 : 
        (velocity >= 126 && velocity <= 130) ? 13 : 0
    )
     
        {
                case 1 :points = "OK";break;
                case 2 :points = "Points: 1";break;
                case 3 :points = "Points: 2";break;
                case 4 :points = "Points: 3";break;
                case 5 :points = "Points: 4";break;
                case 6 :points = "Points: 5";break;
                case 7 :points = "Points: 6";break;
                case 8 :points = "Points: 7";break;
                case 9 :points = "Points: 8";break;
                case 10 :points = "Points: 9";break;
                case 11 :points = "Points: 10";break;
                case 12 :points = "Points: 11";break;
                case 13 :points = "Points: 12";break;
                case 0 :points = "License suspended";break;
        }

//printing the results
document.getElementById('detectorResponse').value = points;   


}
