const cien = 100;

//Nuevo array con cupones para el reto
const coupons = [
    {
        name: "CUPON_TUTI_2022",
        discount: 15,
    },
    {
        name: "CUPON_SUPER_DESCUENTOS",
        discount: 35,
    },
    {
        name: "CUPON_PARA_AMOR_AMISTAD",
        discount: 20,
    },
];

//Con esta función obtenemos el valor a pagar una vez aplicadao el descuento
function calcularPrecioConDescuento (precio, descuento){
    const porcentajePrecioConDescuento = cien - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / cien;

    return precioConDescuento
}

// Con esta función imprimimos en nuestro documento el texto con el valor a pagar una vez aplicado el descuento
function onClickButtonPriceDiscount () {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    // const inputDiscount = document.getElementById("InputDiscount");
    // const discountValue = inputDiscount.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;  

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    if (!userCoupon) {
        alert(`El cupón ${couponValue} no es valido`);
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

        const ResultPrice = document.getElementById("ResultPrice");
        ResultPrice.innerText = `El precio con descuento es de: $ ${precioConDescuento}`;
    }
}