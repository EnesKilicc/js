// 1.SORU
function findPrime(...numbers){
    for (let i = 0; i < numbers.length; i++) {
        let  kontrol = false

        for (let x = 2; x < numbers[i]; x++) {
                if(numbers[i]%x==0)
                    kontrol=true
                         
        }
        if(kontrol==false)
            console.log(numbers[i])
}
}
findPrime(5,8,12,13)


// 2. SORU
function findPrime2(){
    console.log("------1000e kadar olan asal sayılar-----")
    for (let i = 2; i <= 1000; i++) {
        var kontrol = false
        for (let x = 2; x < i; x++) {
           if(i%x==0)
            kontrol=true
       }
        if(kontrol==false)
            console.log(i)
    }
} 
findPrime2()


// 3.SORU
function arkadasSayilar(sayi1,sayi2){
  var  max = Math.max(sayi1,sayi2)
    var toplam1 = 0
    var toplam2 = 0
    for (let i = 1; i < max; i++){
            if(sayi1!=i && sayi1%i== 0)
                toplam1 = toplam1 + i
            if(sayi2 != i && sayi2%i==0)
                toplam2 = toplam2 + i
    }
        if(toplam1 == sayi2 && toplam2 == sayi1)
            console.log(sayi1 + " ve " + sayi2 + " arkadaş sayılardır")
        else
        console.log(sayi1 + " ve " + sayi2 + " arkadaş sayılar DEĞİLDİR")
}
arkadasSayilar(220,265)


//  4.SORU
function mukemmelSayi(sayi){
    var toplam = 0
    for (let i = 1; i < sayi; i++) {
            if(sayi%i==0)
            toplam = toplam + i 
    }
    if(toplam==sayi)
        console.log(sayi +" sayisi mükemmel sayıdır")
    else
    console.log(sayi +" sayisi mükemmel sayı DEĞİLDİR")
}
mukemmelSayi(7)