
     function Perimetr(a,b){
          let per = a + b + Math.sqrt(a**2 + b**2)
          if(a<=0 || b<=0){
               return "Сторона не может быть отрицательной"
          }
          return per
     }
     function Squer(a,b){
          let s = (a*b)
          if(a<=0 || b<=0){
               return "Сторона не может быть отрицательной"
          }
          return s
     }

     // let kat11 = prompt("введите первые два катета")
     // let kat22 = prompt("введите вторые два катета")

    function Sum(kat1, kat2){
          
          kat1 = kat1.split(" ")
          kat2 = kat2.split(" ")
          console.log(kat1.length, kat2.length)
          if(kat1.length != 2 || kat2.length != 2){
               console.log('Вы ввели не два значения')
               return 'Вы ввели не два значения'
          }
          if(Number.isNaN(Number(kat1[0])) || Number.isNaN(Number(kat1[1])) || Number.isNaN(Number(kat2[0])) || Number.isNaN(Number(kat2[1]))){
               console.log('Вы ввели не числа')
               return 'Вы ввели не числа'
          }
          
          let sumPer = Perimetr(Number(kat1[0]),Number(kat1[1])) + Perimetr(Number(kat2[0]),Number(kat2[1]))
          sumPer = sumPer.toFixed(2) 
          return Number(sumPer)
     }
     // Sum(kat11, kat22)


     

module.exports = {Perimetr, Squer, Sum}

