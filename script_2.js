//2.2.1 Calculs rapides



let number_chosen= prompt("De quel nombre veux-tu calculer la factorielle ?")
num = number_chosen
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
    
   console.log(`La factorielle de ${number_chosen} est ${result}`);


/*let a = 1;
let b = 1;
a++
console.log(a);
console.log(b+=2);
*/