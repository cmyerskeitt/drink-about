function peopleWithAgeDrink(old) {
    switch(old){
        case (old < 14):
          return "drink toddy";
          break;
        case (old > 14 && old < 18):
          return "drink coke";
          break;
        case (old > 18 && old < 21):
          return "drink beer";
          break;
        default:
          return "drink whisky";
          break;
    }
};