function getDay(days){
    switch(days){
        case 0:
            day = "luni";
            break;
          case 1:
            day = "marti";
            break;
          case 2:
            day = "miercuri";
            break;
          case 3:
            day = "joi";
            break;
          case 4:
            day = "vineri";
            break;
          case 5:
            day = "sambata";
            break;
          case  6:
            day = "duminica";
  }

}

console.log(getDay(3));

