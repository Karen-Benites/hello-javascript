// 9. Exporta una función, una constante y una clase desde una carpeta

export class Order{
    constructor(products, total){
        this.products = products
        this.total = total
    }
}

//products has to be an array with a map, in the map, it includes: quantity and unitary price

export function getProductsInfo(object){
    return object.products
}

export function totalCalculator(purchaseInfo, tax){
    let subtotalPerProduct = 0
    let totalTaxes
    let productInfo = getProductsInfo(purchaseInfo)
    for (let product of productInfo){
        subtotalPerProduct += product.quantity*product.unitaryPrice
    }
    totalTaxes = subtotalPerProduct*tax
    return subtotalPerProduct + totalTaxes
}