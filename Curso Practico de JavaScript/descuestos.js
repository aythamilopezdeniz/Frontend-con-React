const coupons = [
    {
        name: "Cupón 1",
        discount: 15
    },
    {
        name: "Cupón 2", 
        discount: 30
    },
    {
        name: "Cupón 3",
        discount: 25
    }
];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

// console.log({ precioOriginal, descuento, porcentajePrecioConDescuento, precioConDescuento });

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice").value;
    const inputCoupon = document.getElementById("InputCoupon").value;

    // let descuento;
    // switch(inputCoupon) {
    //     case
    //         coupons[0]: descuento = 15;
    //         break;
    //     case
    //         coupons[1]: descuento = 30;
    //         break;
    //     case
    //         coupons[2]: descuento = 25;
    //         break;
    // }

    // if (!coupons.includes(inputCoupon)) {
    //     alert("El cupón " + inputCoupon + " no es válido");
    // } else if (inputCoupon === "Cupón 1") {
    //     descuento = 15;
    // } else if (inputCoupon === "Cupón 2") {
    //     descuento = 30;
    // } else if (inputCoupon === "Cupón 3") {
    //     descuento = 25;
    // }

    const isCouponValueValid = function(coupon) {
        return coupon.name === inputCoupon;
    };

    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupón " + inputCoupon + " no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(inputPrice, descuento);
        
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
    }
}