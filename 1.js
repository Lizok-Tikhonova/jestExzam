
function Perimetr(a,b){
    let per = a + b + Math.sqrt(a**2+b**2)
    return per 
}

function Square(a,b){
    let sq = (a*b)*1/2
    return sq 
}

function main(){
    let katets1 = prompt('Введите катеты первого треугольника, через пробел').split(' ')
    if (katets1.length < 2 || katets1.length > 2){
        alert('Некоректный ввод')
        return 
    }
    let katets2 = prompt('Введите катеты первого треугольника, через пробел').split(' ')
    if (katets1.length < 2 || katets1.length > 2){
        alert('Некоректный ввод')
        return 
    }
    let a = Number(katets1[0])
    let b = Number(katets1[1])
    let c = Number(katets2[0])
    let d = Number(katets2[1])

    let sumSquare = Square(a,b)+Square(c,d)
    let sumPer = Perimetr(a,b)+Perimetr(c,d)

    console.log(sumSquare, sumPer)

    alert(`Сумма площадей равна ${sumSquare}`)
    alert(`Сумма периметров равна ${sumPer}`)
    return sumPer, sumSquare
}


module.exports = {Perimetr, Square}