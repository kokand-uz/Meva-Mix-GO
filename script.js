
"use strict";

// ==========================================
// MEVA MIX — ASOSIY SOZLAMALAR
// ==========================================

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwyOZn3fIw6Fbv2u8FI3CnFP9wz6XwgIHrVLD3WTGd2LDJqFicyG3Mp_ExnG7__9lDL2A/exec";

const $ = id => document.getElementById(id);
const grid = $("fruitGrid");

// ==========================================
// MEVALAR
// ==========================================

const fruits = [
  {id:1,name:"Tarvuz",price:5000,unit:"kg",tag:"Yozgi tanlov",img:"https://dostavo4ka.uz/upload-file/2021/05/05/5919/932eb989-adad-4623-b913-c58fdb892aa8.jpg"},
  {id:2,name:"Qovun",price:8000,unit:"kg",tag:"Shirin",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8WDra8m9iPDVeEoeTFzEyIHNagtFhcNdcWiW15sq08w&s=10"},
  {id:3,name:"Mango",price:20000,unit:"dona",tag:"Tropik",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcMNi6WAbyesx5sPfFA7HRcjDbTa9qjEaNh-rUsc_V-g&s=10"},
  {id:4,name:"Dragon Fruit",price:25000,unit:"dona",tag:"Ekzotik",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhS_dF-LZNupvTOiTAfkFBOL0VyMUAsW95KLtB8BtQQ&s=10"},
  {id:24,name:"Dragon Fruit (Qizil)",price:25000,unit:"dona",tag:"Ekzotik",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsk-2spF9jt9ru5M1f2U2Rdpx2CeZvqZhQVUUbyuIs3A&s=10"},
  {id:5,name:"Shaftoli",price:25000,unit:"kg",tag:"Yangi",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKLC0R9jZH1zcq-g1Bkguc4fCNrdk3rM0KTMg-DPGBQQ&s=10"},
  {id:6,name:"Junli shaftoli",price:25000,unit:"kg",tag:"Mavsumiy",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIBGP2JYYr8T4v-yDOqScI3vFY2QhwN_sDdfjAywC-jA&s=10"},
  {id:27,name:"Oq shaftoli",price:25000,unit:"kg",tag:"Nozik ta'm",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnWhuznXnCZdQZFNduaR2EsPeTDww4xLVAsZJnYwIeVg&s=10"},
  {id:29,name:"Anjir shaftoli",price:25000,unit:"kg",tag:"Mavsumiy",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZvWehKpmkjwfrPSORJN5Oq--uyU6IBSUiDkhu7TkvDw&s=10"},
  {id:7,name:"Uzum",price:30000,unit:"kg",tag:"Saralangan",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOWLd6cqIvr5n4tLoDwgS4Svs5t3LYaGdXdxyB8t3Mw&s=10"},
  {id:30,name:"Uzum (Yashil)",price:30000,unit:"kg",tag:"Saralangan",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPGfCmd4xrwls_A8hEC8i8j9CS2dOab3SdRQ3RPUf3qQ&s=10"},
  {id:8,name:"Apelsin",price:30000,unit:"kg",tag:"C vitamin",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjnojljd4DuoT2X4nN9FEAasL3UM2un1ggCaXH8gSIQQ&s=10"},
  {id:9,name:"Yashil olma",price:25000,unit:"kg",tag:"Qarsildoq",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOqa2Soj6c3fHdsEIswD0XSck6q-1zom2wnkHp0gXqdA&s=10"},
  {id:31,name:"Qizil olma",price:25000,unit:"kg",tag:"Qarsildoq",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSohMPc7GwNIW5NOsWJKpCOasEICBOoEo3OHmuGWrg7QQ&s=10"},
  {id:32,name:"Sariq olma",price:25000,unit:"kg",tag:"Qarsildoq",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI1-Wxzh3cP1U6tdPN0WFm5AwQ0a_3tml-uDqABymmjQ&s=10"},
  {id:10,name:"Banan",price:20000,unit:"kg",tag:"Sevimli",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMuiGNJxq7-uadINEvI21nfKnn6MtnwSHg88GET4KDQ&s=10"},
  {id:11,name:"Anjir",price:25000,unit:"kg",tag:"Mavsumiy",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV0wU2Zw5QuZ3KH7pjm3X7er8eaysVr8Fsqdr66HZ07A&s=10"},
  {id:12,name:"Nok",price:40000,unit:"kg",tag:"Shirali",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPwIFXyyCUgUHW438wuvAU_Lnvqg4prMw4IixFstVMg&s=10"},
  {id:13,name:"Qulupnay",price:100000,unit:"kg",tag:"Yorqin ta'm",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbtUp1yEmtaoFFmvlRTRETj_vskwhWg7RdQzrGFaFJWA&s=10"},
  {id:14,name:"Ananas",price:50000,unit:"dona",tag:"Tropik",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgV3IVozw0cU_eQvN6KUO_MQgY_v-_YLLBHruZ-sR0w&s=10"},
  {id:15,name:"Laym",price:100000,unit:"kg",tag:"Nordon",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBl9hohKJoPmuV8ihuH7YorPhNYMzxu6di7RfYQ6yuQA&s=10"},
  {id:16,name:"Limon",price:50000,unit:"kg",tag:"Tetiktiradi",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx9kajjfh1tzVoC3R96t2-w-ois9X0cW0aQg2NEfpskQ&s=10"},
  {id:17,name:"Golubika",price:40000,unit:"kg",tag:"Mayda va mazali",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAZh0PUNPcLgrtV6iHtG_LukNmp9yXKW2L0gfVFEvNrA&s=10"},
  {id:18,name:"Kiwi",price:70000,unit:"kg",tag:"Yashil quvvat",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1cLK-iLFQxIX-kdc7l6wZb5a1f-Pc_OFp-Uc8rBcnMA&s=10"},
  {id:19,name:"Malina",price:100000,unit:"kg",tag:"Nozik meva",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTusd-skP5iLmJbee6eaFV9dNKqEiC9guh4qxWgu9eU5g&s=10"},
  {id:25,name:"Ejevika",price:70000,unit:"kg",tag:"Mayda va mazali",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Ja65TFVosAeuLojlmqinCZJuQvzvj0x7146cOjgD4g&s=10"},
  {id:20,name:"Mandarin",price:40000,unit:"kg",tag:"Xushbo'y",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNe7F80x9_WV_ZU-OCdWjPX5GamAx1hGi0_gNdaDMUQ&s=10"},
  {id:21,name:"Kakos",price:50000,unit:"dona",tag:"Tropik",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmHeyAM7XY5e-zOmLxPy9-epqcASFcgaYSvRwnvfcddw&s=10"},
  {id:22,name:"Avacado",price:30000,unit:"dona",tag:"Yumshoq",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGjO7BkY5vJF3qDWVNk9M1tBOy-sPHTW9tbJaGCqbeSw&s=10"},
  {id:23,name:"Olxo'ri",price:10000,unit:"kg",tag:"Mavsumiy",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcQkF1uaEY8QHqaej3LVPVUD6P60bePY0-WigIyLyCRQ&s"}
];

// ==========================================
// SAVATCHA VA HOLAT
// ==========================================

let cart = [];
let activeCategory = "Barchasi";
let coupon = false;
let sendingOrder = false;

try {
  const saved = JSON.parse(localStorage.getItem("mevaMixCart") || "[]");

  if (Array.isArray(saved)) {
    cart = saved.filter(item =>
      item &&
      fruits.some(fruit => fruit.id === Number(item.id)) &&
      Number.isInteger(Number(item.qty)) &&
      Number(item.qty) > 0 &&
      Number(item.qty) <= 1000
    ).map(item => ({
      id: Number(item.id),
      qty: Number(item.qty)
    }));
  }
} catch (error) {
  cart = [];
}

// ==========================================
// YORDAMCHI FUNKSIYALAR
// ==========================================

function money(number) {
  return new Intl.NumberFormat("uz-UZ").format(number) + " so'm";
}

function saveCart() {
  try {
    localStorage.setItem("mevaMixCart", JSON.stringify(cart));
  } catch (error) {
    console.warn("Savatchani saqlab bo'lmadi.", error);
  }
}

function safe(text) {
  return String(text).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function showOrderMessage(text, type = "") {
  const message = $("orderMessage");

  if (!message) {
    alert(text);
    return;
  }

  message.textContent = text;
  message.className = type;
}

// ==========================================
// MEVALARNI CHIQARISH
// ==========================================

function renderFruits() {
  if (!grid) return;

  const input = $("searchInput");
  const sort = $("sortSelect");
  const query = input ? input.value.trim().toLowerCase() : "";

  let list = fruits.filter(fruit => {
    const matchesName = fruit.name.toLowerCase().includes(query);
    const matchesCategory =
      activeCategory === "Barchasi" ||
      fruit.cat === activeCategory;

    return matchesName && matchesCategory;
  });

  if (sort && sort.value === "cheap") {
    list.sort((a, b) => a.price - b.price);
  } else if (sort && sort.value === "expensive") {
    list.sort((a, b) => b.price - a.price);
  } else if (sort && sort.value === "name") {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }

  if ($("productCount")) {
    $("productCount").textContent = list.length + " ta meva";
  }

  if (!list.length) {
    grid.innerHTML =
      '<div class="empty-results"><strong>Meva topilmadi</strong>Boshqa nom bilan qidirib ko‘ring.</div>';
    return;
  }

  grid.innerHTML = list.map(fruit => `
    <article class="fruit-card">
      <div class="fruit-picture">
        <img src="${safe(fruit.img)}" alt="${safe(fruit.name)}" loading="lazy">
        <div class="fruit-fallback">🍎</div>
        <span class="fruit-tag">${safe(fruit.tag)}</span>
        <button type="button" class="fruit-quick-add" data-add="${fruit.id}">+</button>
      </div>
      <div class="fruit-info">
        <span class="fruit-category">MEVALAR</span>
        <h3>${safe(fruit.name)}</h3>
        <div class="fruit-bottom">
          <div class="fruit-price">
            <strong>${money(fruit.price)}</strong>
            <small>/ ${safe(fruit.unit)}</small>
          </div>
          <button type="button" class="add-button" data-add="${fruit.id}">+ Qo‘shish</button>
        </div>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll("img").forEach(img => {
    img.onerror = function () {
      this.style.display = "none";
      const fallback = this.parentElement.querySelector(".fruit-fallback");
      if (fallback) fallback.classList.add("visible");
    };
  });
}

// ==========================================
// SAVATCHAGA MEVA QO'SHISH
// ==========================================

function addFruit(id) {
  const fruit = fruits.find(item => item.id === Number(id));
  if (!fruit) return;

  const existing = cart.find(item => item.id === fruit.id);

  if (existing) {
    if (existing.qty >= 1000) {
      alert("Bir mahsulotdan 1000 tadan ko‘p qo‘shib bo‘lmaydi.");
      return;
    }

    existing.qty++;
  } else {
    cart.push({id: fruit.id, qty: 1});
  }

  saveCart();
  renderCart();
}

function changeQty(id, change) {
  const item = cart.find(product => product.id === Number(id));
  if (!item) return;

  item.qty += change;

  if (item.qty <= 0) {
    cart = cart.filter(product => product.id !== Number(id));
  } else if (item.qty > 1000) {
    item.qty = 1000;
    alert("Miqdor 1000 dan oshmasligi kerak.");
  }

  saveCart();
  renderCart();
}

function subtotal() {
  return cart.reduce((sum, item) => {
    const fruit = fruits.find(product => product.id === item.id);
    return sum + (fruit ? fruit.price * item.qty : 0);
  }, 0);
}

// ==========================================
// SAVATCHANI KO'RSATISH
// ==========================================

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  if ($("cartCount")) {
    $("cartCount").textContent = count;
  }

  if ($("cartProducts")) {
    if (!cart.length) {
      $("cartProducts").innerHTML =
        '<div class="cart-empty"><span>🛒</span><h3>Savatcha bo‘sh</h3><p>Mevalarni tanlang!</p></div>';
    } else {
      $("cartProducts").innerHTML = cart.map(item => {
        const fruit = fruits.find(product => product.id === item.id);
        if (!fruit) return "";

        return `
          <article class="cart-item">
            <img src="${safe(fruit.img)}" alt="${safe(fruit.name)}">
            <div class="cart-item-content">
              <h3>${safe(fruit.name)}</h3>
              <p>${money(fruit.price)} / ${safe(fruit.unit)}</p>
              <div class="quantity">
                <button type="button" data-qty="${fruit.id}" data-change="-1">−</button>
                <span>${item.qty}</span>
                <button type="button" data-qty="${fruit.id}" data-change="1">+</button>
              </div>
            </div>
            <div class="cart-item-total">${money(fruit.price * item.qty)}</div>
          </article>
        `;
      }).join("");

      $("cartProducts").querySelectorAll("img").forEach(img => {
        img.onerror = function () {
          this.style.visibility = "hidden";
        };
      });
    }
  }

  const sum = subtotal();
  const discountAmount = coupon ? Math.round(sum * 0.1) : 0;

  if ($("subtotal")) $("subtotal").textContent = money(sum);
  if ($("discount")) $("discount").textContent = "-" + money(discountAmount);
  if ($("total")) $("total").textContent = money(sum - discountAmount);

  if ($("checkoutButton")) {
    $("checkoutButton").disabled = cart.length === 0 || sendingOrder;
  }
}

// ==========================================
// SAVATCHANI OCHISH VA YOPISH
// ==========================================

function openCart() {
  if ($("cartPanel")) $("cartPanel").classList.add("open");
  if ($("overlay")) $("overlay").classList.add("visible");

  document.body.classList.add("no-scroll");
}

function closeCart() {
  if ($("cartPanel")) $("cartPanel").classList.remove("open");
  if ($("overlay")) $("overlay").classList.remove("visible");

  document.body.classList.remove("no-scroll");
}

// ==========================================
// TUGMALAR VA QIDIRUV
// ==========================================

if (grid) {
  grid.addEventListener("click", event => {
    const button = event.target.closest("[data-add]");
    if (button) addFruit(button.dataset.add);
  });
}

if ($("cartProducts")) {
  $("cartProducts").addEventListener("click", event => {
    const button = event.target.closest("[data-qty]");

    if (button) {
      changeQty(button.dataset.qty, Number(button.dataset.change));
    }
  });
}

if ($("categoryList")) {
  $("categoryList").addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;

    activeCategory = button.dataset.category;

    document.querySelectorAll(".category").forEach(item => {
      item.classList.toggle("active", item === button);
    });

    renderFruits();
  });
}

if ($("searchInput")) {
  $("searchInput").addEventListener("input", renderFruits);
}

if ($("sortSelect")) {
  $("sortSelect").addEventListener("change", renderFruits);
}

if ($("clearSearch")) {
  $("clearSearch").addEventListener("click", () => {
    if (!$("searchInput")) return;

    $("searchInput").value = "";
    renderFruits();
    $("searchInput").focus();
  });
}

if ($("openCart")) $("openCart").addEventListener("click", openCart);
if ($("closeCart")) $("closeCart").addEventListener("click", closeCart);
if ($("overlay")) $("overlay").addEventListener("click", closeCart);

// ==========================================
// PROMOKOD
// ==========================================

if ($("applyCoupon")) {
  $("applyCoupon").addEventListener("click", () => {
    const code = $("couponInput")
      ? $("couponInput").value.trim().toUpperCase()
      : "";

    const message = $("couponMessage");

    if (code === "MEVAMIX10" && cart.length > 0) {
      coupon = true;

      if (message) {
        message.textContent = "10% chegirma qo‘llandi!";
        message.className = "success";
      }
    } else {
      coupon = false;

      if (message) {
        message.textContent = cart.length === 0
          ? "Avval savatchaga meva qo‘shing."
          : "Promokod noto‘g‘ri.";

        message.className = "error";
      }
    }

    renderCart();
  });
}

if ($("copyPromo")) {
  $("copyPromo").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("MEVAMIX10");
      $("copyPromo").textContent = "✓ Kod nusxalandi!";
    } catch (error) {
      if ($("couponInput")) {
        $("couponInput").value = "MEVAMIX10";
      }

      $("copyPromo").textContent = "Kod: MEVAMIX10";
    }
  });
}

// ==========================================
// BUYURTMA OYNASINI OCHISH
// ==========================================

if ($("checkoutButton") && $("orderDialog")) {
  $("checkoutButton").addEventListener("click", () => {
    if (cart.length && $("orderDialog").showModal) {
      $("orderDialog").showModal();
    }
  });
}

if ($("closeDialog") && $("orderDialog")) {
  $("closeDialog").addEventListener("click", () => {
    $("orderDialog").close();
  });
}

// ==========================================
// BUYURTMANI TELEGRAMGA YUBORISH
// ==========================================

if ($("orderForm")) {
  $("orderForm").addEventListener("submit", async event => {
    event.preventDefault();

    if (sendingOrder) return;

    if (!cart.length) {
      showOrderMessage("Savatcha bo‘sh!", "error");
      return;
    }

    const name = $("customerName")
      ? $("customerName").value.trim()
      : "";

    const phone = $("customerPhone")
      ? $("customerPhone").value.trim()
      : "";

    const address = $("customerAddress")
      ? $("customerAddress").value.trim()
      : "";

    if (!name || !phone || !address) {
      showOrderMessage("Ism, telefon va manzilni to‘ldiring!", "error");
      return;
    }

    const sum = subtotal();
    const discountAmount = coupon ? Math.round(sum * 0.1) : 0;

    const items = cart.map(item => {
      const fruit = fruits.find(product => product.id === item.id);

      return {
        id: fruit.id,
        name: fruit.name,
        quantity: item.qty,
        unit: fruit.unit,
        price: fruit.price,
        total: fruit.price * item.qty
      };
    });

    const order = {
      shop: "MEVA MIX",
      customer: {
        name,
        phone,
        address
      },
      items,
      promoCode: coupon ? "MEVAMIX10" : null,
      subtotal: sum,
      discount: discountAmount,
      total: sum - discountAmount,
      date: new Date().toISOString()
    };

    const button = $("checkoutButton");
    const submitButton = $("orderForm").querySelector(
      'button[type="submit"], button:not([type])'
    );

    sendingOrder = true;

    if (button) button.disabled = true;

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Yuborilmoqda...";
    }

    showOrderMessage("⏳ Buyurtma yuborilmoqda...", "");

    try {
      // Google Apps Script bilan oddiy POST so'rovi.
      // no-cors sababli javobni brauzer o'qiy olmaydi.
      // Shu sababli bu yerda haqiqiy yetkazilganini tasdiqlab bo'lmaydi.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(order)
      });

      showOrderMessage(
        "📨 So‘rov yuborildi. Telegramdagi chatlarni tekshirib, buyurtma kelganini tasdiqlang.",
        "success"
      );

      // Yetkazilganini tasdiqlamaguncha savatchani o'chirmaymiz.
      // Mijoz buyurtma kelganini tekshirishi mumkin.

    } catch (error) {
      console.error("Buyurtma yuborish xatosi:", error);

      showOrderMessage(
        "❌ So‘rov yuborilmadi. Internetni tekshirib qayta urinib ko‘ring.",
        "error"
      );
    } finally {
      sendingOrder = false;

      if (button) button.disabled = cart.length === 0;

      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Buyurtma berish";
      }
    }
  });
}

// ==========================================
// MOBIL MENYU
// ==========================================

if ($("menuToggle") && $("navigation")) {
  $("menuToggle").addEventListener("click", () => {
    $("navigation").classList.toggle("menu-visible");
  });

  document.querySelectorAll(".navigation a").forEach(link => {
    link.addEventListener("click", () => {
      $("navigation").classList.remove("menu-visible");
    });
  });
}

// ==========================================
// YIL VA BOSHLANG'ICH HOLAT
// ==========================================

if ($("year")) {
  $("year").textContent = new Date().getFullYear();
}

renderFruits();
renderCart();
