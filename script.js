// ========================================
// 🍓 MEVA MIX — PREMIUM SHOP
// ========================================

let cart = [];
let promoApplied = false;

const DISCOUNT = 0.10;


// ========================================
// 🖼️ RASMLAR
// ========================================

const images = {
    apple: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=85",
    banana: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=85",
    strawberry: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=800&q=85",
    mango: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=85",
    orange: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=800&q=85",
    grapes: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=800&q=85",

    chocolate: "https://images.unsplash.com/photo-1575377427642-087cf684f04d?auto=format&fit=crop&w=800&q=85",
    candy: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=800&q=85",
    lollipop: "https://images.unsplash.com/photo-1581798459219-318e76aecc7f?auto=format&fit=crop&w=800&q=85",
    cookies: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=85",

    juice: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=85",
    smoothie: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=85",
    berries: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=800&q=85",

    fruitBasket: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=1000&q=85",
    premiumBasket: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=85"
};


// ========================================
// 🍎 MAHSULOTLAR
// ========================================

const products = [

    {
        id: 1,
        name: "Premium Qulupnay",
        price: 55000,
        category: "fruit",
        image: images.strawberry
    },

    {
        id: 2,
        name: "Qizil Olma",
        price: 39000,
        category: "fruit",
        image: images.apple
    },

    {
        id: 3,
        name: "Premium Banan",
        price: 42000,
        category: "fruit",
        image: images.banana
    },

    {
        id: 4,
        name: "Premium Mango",
        price: 79000,
        category: "fruit",
        image: images.mango
    },

    {
        id: 5,
        name: "Shirin Apelsin",
        price: 45000,
        category: "fruit",
        image: images.orange
    },

    {
        id: 6,
        name: "Premium Uzum",
        price: 65000,
        category: "fruit",
        image: images.grapes
    },

    // 🍫 SHOKOLAD

    {
        id: 7,
        name: "Premium Shokolad",
        price: 85000,
        category: "sweet",
        image: images.chocolate
    },

    {
        id: 8,
        name: "Shokolad Mix",
        price: 120000,
        category: "sweet",
        image: images.chocolate
    },

    // 🍬 KONFET

    {
        id: 9,
        name: "Rangli Konfetlar",
        price: 65000,
        category: "sweet",
        image: images.candy
    },

    {
        id: 10,
        name: "Premium Konfet Mix",
        price: 95000,
        category: "sweet",
        image: images.candy
    },

    // 🍭 BOLALAR

    {
        id: 11,
        name: "Bolalar Lollipop Mix",
        price: 75000,
        category: "kids",
        image: images.lollipop
    },

    {
        id: 12,
        name: "Bolalar Shirinlik Mix",
        price: 110000,
        category: "kids",
        image: images.cookies
    },

    // 🥤 ICHIMLIKLAR

    {
        id: 13,
        name: "Fresh Orange Juice",
        price: 65000,
        category: "drink",
        image: images.juice
    },

    {
        id: 14,
        name: "Strawberry Smoothie",
        price: 75000,
        category: "drink",
        image: images.smoothie
    },

    {
        id: 15,
        name: "Berry Fresh",
        price: 70000,
        category: "drink",
        image: images.berries
    }

];


// ========================================
// 🧺 TAYYOR SAVATLAR
// ========================================

const baskets = [

    {
        id: 101,
        name: "Premium Mevali Savat",
        price: 390000,
        type: "fruit",
        image: images.fruitBasket
    },

    {
        id: 102,
        name: "Shokolad + Konfet Savati",
        price: 450000,
        type: "sweet",
        image: images.chocolate
    },

    {
        id: 103,
        name: "Meva + Shirinlik Savati",
        price: 590000,
        type: "mix",
        image: images.premiumBasket
    },

    {
        id: 104,
        name: "Ichimlikli Savat",
        price: 420000,
        type: "drink",
        image: images.berries
    },

    {
        id: 105,
        name: "Bolalar Savati",
        price: 350000,
        type: "kids",
        image: images.candy
    },

    {
        id: 106,
        name: "Luxury Premium Mix",
        price: 890000,
        type: "premium",
        image: images.premiumBasket
    }

];


// ========================================
// 💰 NARXNI CHIROYLI KO'RSATISH
// ========================================

function formatPrice(number) {
    return number.toLocaleString("uz-UZ") + " so'm";
}


// ========================================
// 🍓 MAHSULOTLARNI KO'RSATISH
// ========================================

function showProducts(category) {

    const productBox = document.getElementById("productsList");

    if (!productBox) {
        return;
    }

    let list = products;

    if (category && category !== "all") {
        list = products.filter(function(product) {
            return product.category === category;
        });
    }

    productBox.innerHTML = "";

    list.forEach(function(product, index) {

        const card = document.createElement("article");

        card.className = "product";

        card.style.animationDelay = (index * 0.08) + "s";

        card.innerHTML = `
            <img
                class="product-img"
                src="${product.image}"
                alt="${product.name}"
            >

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>${formatPrice(product.price)}</p>

                <button
                    class="add-btn"
                    onclick="addProduct(${product.id})"
                >
                    🛒 Savatga qo'shish
                </button>

            </div>
        `;

        productBox.appendChild(card);
    });
}


// ========================================
// 🧺 TAYYOR SAVATLARNI KO'RSATISH
// ========================================

function showBaskets(type) {

    const basketBox = document.getElementById("basketsList");

    if (!basketBox) {
        return;
    }

    let list = baskets;

    if (type && type !== "all") {

        if (type === "mix") {

            list = baskets.filter(function(basket) {
                return basket.type === "mix";
            });

        } else {

            list = baskets.filter(function(basket) {
                return basket.type === type;
            });

        }
    }

    basketBox.innerHTML = "";

    list.forEach(function(basket, index) {

        const card = document.createElement("article");

        card.className = "basket-card";

        card.style.animationDelay = (index * 0.08) + "s";

        card.innerHTML = `
            <img
                src="${basket.image}"
                alt="${basket.name}"
            >

            <div class="basket-info">

                <h3>${basket.name}</h3>

                <p>${formatPrice(basket.price)}</p>

                <button
                    class="add-btn"
                    onclick="addBasket(${basket.id})"
                >
                    🧺 Savatga qo'shish
                </button>

            </div>
        `;

        basketBox.appendChild(card);
    });
}


// ========================================
// 🛒 SAVAT TANLASH OYNASI
// ========================================

function openBasketChooser() {

    const modal = document.getElementById("basketChooser");

    if (modal) {
        modal.classList.add("show");
    }
}


function closeBasketChooser() {

    const modal = document.getElementById("basketChooser");

    if (modal) {
        modal.classList.remove("show");
    }
}


// ========================================
// 🧺 SAVAT TURINI TANLASH
// ========================================

function chooseBasket(type) {

    closeBasketChooser();

    showBaskets(type);

    const section = document.getElementById("baskets");

    if (section) {

        setTimeout(function() {

            section.scrollIntoView({
                behavior: "smooth"
            });

        }, 200);
    }
}


// ========================================
// ➕ MAHSULOTNI SAVATGA QO'SHISH
// ========================================

function addProduct(id) {

    const product = products.find(function(item) {
        return item.id === id;
    });

    if (product) {
        addToCart(product);
    }
}


// ========================================
// 🧺 TAYYOR SAVATNI QO'SHISH
// ========================================

function addBasket(id) {

    const basket = baskets.find(function(item) {
        return item.id === id;
    });

    if (basket) {
        addToCart(basket);
    }
}


// ========================================
// 🛒 SAVATGA QO'SHISH
// ========================================

function addToCart(item) {

    const existing = cart.find(function(product) {
        return product.id === item.id;
    });

    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: 1
        });
    }

    updateCart();

    showAddAnimation();
}


// ========================================
// ✨ QO'SHILGANDA ANIMATSIYA
// ========================================

function showAddAnimation() {

    const cartButton = document.querySelector(".cart-btn");

    if (!cartButton) {
        return;
    }

    cartButton.style.transform = "scale(1.15)";

    setTimeout(function() {
        cartButton.style.transform = "";
    }, 180);
}


// ========================================
// 🔄 SAVATNI YANGILASH
// ========================================

function updateCart() {

    const count = cart.reduce(function(total, item) {
        return total + item.quantity;
    }, 0);

    const countElement = document.getElementById("cartCount");

    if (countElement) {
        countElement.textContent = count;
    }

    renderCart();
}


// ========================================
// 🛒 SAVAT ICHIDAGI MAHSULOTLAR
// ========================================

function renderCart() {

    const box = document.getElementById("cartItems");

    if (!box) {
        return;
    }

    if (cart.length === 0) {

        box.innerHTML = `
            <div style="
                text-align:center;
                padding:35px;
            ">
                <div style="font-size:60px;">
                    🛒
                </div>

                <p>
                    Savatingiz hozircha bo'sh
                </p>
            </div>
        `;

        calculateTotal();

        return;
    }

    box.innerHTML = "";

    cart.forEach(function(item) {

        const row = document.createElement("div");

        row.className = "cart-item";

        row.innerHTML = `
            <img
                src="${item.image}"
                alt="${item.name}"
            >

            <div class="cart-item-info">

                <strong>${item.name}</strong>

                <div>
                    ${formatPrice(item.price)}
                </div>

            </div>

            <div class="qty">

                <button
                    onclick="changeQuantity(${item.id}, -1)"
                >
                    −
                </button>

                <b>${item.quantity}</b>

                <button
                    onclick="changeQuantity(${item.id}, 1)"
                >
                    +
                </button>

            </div>
        `;

        box.appendChild(row);
    });

    calculateTotal();
}


// ========================================
// ➕➖ MIQDORNI O'ZGARTIRISH
// ========================================

function changeQuantity(id, amount) {

    const item = cart.find(function(product) {
        return product.id === id;
    });

    if (!item) {
        return;
    }

    item.quantity += amount;

    if (item.quantity <= 0) {

        cart = cart.filter(function(product) {
            return product.id !== id;
        });
    }

    updateCart();
}


// ========================================
// 💰 JAMI NARX
// ========================================

function calculateTotal() {

    let total = cart.reduce(function(sum, item) {
        return sum + (item.price * item.quantity);
    }, 0);

    if (promoApplied) {
        total = total * (1 - DISCOUNT);
    }

    const totalElement = document.getElementById("totalPrice");

    if (totalElement) {
        totalElement.textContent = formatPrice(Math.round(total));
    }
}


// ========================================
// 🎟️ PROMOKOD
// ========================================

function applyPromo() {

    const input = document.getElementById("promoInput");
    const message = document.getElementById("promoMessage");

    if (!input || !message) {
        return;
    }

    const code = input.value.trim().toUpperCase();

    if (code === "MEVAMIX10") {

        promoApplied = true;

        message.textContent =
            "🎉 Promokod qabul qilindi! 10% chegirma.";

        message.style.color = "green";

        calculateTotal();

    } else {

        promoApplied = false;

        message.textContent =
            "❌ Promokod noto'g'ri.";

        message.style.color = "red";

        calculateTotal();
    }
}


// ========================================
// 🛒 SAVAT OYNASINI OCHISH
// ========================================

function openCart() {

    const modal = document.getElementById("cartModal");

    if (modal) {
        modal.classList.add("show");
    }

}


// ========================================
// 🛒 SAVAT OYNASINI YOPISH
// ========================================

function closeCart() {

    const modal = document.getElementById("cartModal");

    if (modal) {
        modal.classList.remove("show");
    }
}


// ========================================
// 📦 BUYURTMA OYNASINI OCHISH
// ========================================

function openOrder() {

    if (cart.length === 0) {

        alert("🛒 Avval savatga mahsulot qo'shing.");

        return;
    }

    closeCart();

    const modal = document.getElementById("orderModal");

    if (modal) {
        modal.classList.add("show");
    }
}


// ========================================
// 📦 BUYURTMA OYNASINI YOPISH
// ========================================

function closeOrder() {

    const modal = document.getElementById("orderModal");

    if (modal) {
        modal.classList.remove("show");
    }
}


// ========================================
// 🚀 BUYURTMA YUBORISH
// ========================================

function sendOrder() {

    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const address = document.getElementById("address");

    if (!name || !phone || !address) {
        return;
    }

    if (
        name.value.trim() === "" ||
        phone.value.trim() === "" ||
        address.value.trim() === ""
    ) {

        alert("⚠️ Iltimos, barcha ma'lumotlarni kiriting.");

        return;
    }

    const items = cart.map(function(item) {

        return (
            item.name +
            " × " +
            item.quantity
        );

    }).join("\n");

    const totalElement = document.getElementById("totalPrice");

    const total = totalElement
        ? totalElement.textContent
        : "0 so'm";

    alert(
        "✅ BUYURTMA QABUL QILINDI!\n\n" +
        "👤 Ism: " + name.value + "\n" +
        "📞 Telefon: " + phone.value + "\n" +
        "📍 Manzil: " + address.value + "\n\n" +
        "🛍 Mahsulotlar:\n" +
        items + "\n\n" +
        "💰 Jami: " + total
    );

    cart = [];

    promoApplied = false;

    name.value = "";
    phone.value = "";
    address.value = "";

    updateCart();

    closeOrder();
}


// ========================================
// 🖱️ MODAL TASHQARISINI BOSSA YOPISH
// ========================================

document.addEventListener("click", function(event) {

    const basketModal = document.getElementById("basketChooser");
    const cartModal = document.getElementById("cartModal");
    const orderModal = document.getElementById("orderModal");

    if (event.target === basketModal) {
        closeBasketChooser();
    }

    if (event.target === cartModal) {
        closeCart();
    }

    if (event.target === orderModal) {
        closeOrder();
    }
});


// ========================================
// 🚀 SAYT ISHGA TUSHISHI
// ========================================

document.addEventListener("DOMContentLoaded", function() {

    showProducts("all");

    showBaskets("all");

    updateCart();

});