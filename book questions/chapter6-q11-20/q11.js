//   (Financial application: compute commissions) Write a method that computes the 
// commission, using the scheme in Programming Exercise 5.39. The header of the 
// method is as follows:
// public static double computeCommission(double salesAmount)
// Write a test program that displays the following table:


function computeCommission(salesAmount){
    let commission = 0
    if (salesAmount<= 5000){
        commission = (salesAmount * 8) / 100
        return commission

    }else if (salesAmount>5000 && salesAmount<= 10000){
        let firstcommisstion = (5000 * 8 ) / 100
        let reminder1 = salesAmount - 5000
        commission = (reminder1 * 10) / 100
        commission = commission + firstcommisstion
        return commission

    }else{
        let firstcommisstion = (5000 * 8 ) / 100
        let secondcommission = (5000 * 10 ) / 100
        let reminder2 = salesAmount - 10000
        commission = (reminder2 * 12 ) / 100
        commission = commission + firstcommisstion + secondcommission 
        return commission

    }
}
console.log( "Sales Amount" + "      " + " commission")
for( i = 10000 ; i <= 100000 ; i += 5000 ){
let commission = computeCommission(i)
console.log( i + "              " + commission)
}

