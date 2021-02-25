//2.2.1 Calculs rapides

let numberChosen= prompt("De quel nombre veux-tu calculer la factorielle ?")
num = numberChosen
result = num 

   if (num < 0) {
      result = -1;
   } else if (num==0) {
      result = 1
   } 

   while (num > 1) {
      num --;
      result = result * num
   }
    
   console.log(`La factorielle de ${NumberChosen} est ${result}`);

