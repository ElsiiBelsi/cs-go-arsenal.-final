const arsenal = [
    { id: 1, name: "AK-47", category: "Rifles", price: 2700, image: "https://static.wikia.nocookie.net/cswikia/images/0/0c/CS2_AK-47_Inventory.png", stats: { dmg: 36, rate: 75, acc: 60, rec: 72, mob: 65, pen: 78, rel: "2.4" } },
    { id: 2, name: "M4A4", category: "Rifles", price: 3100, image: "https://static.wikia.nocookie.net/cswikia/images/7/77/CS2_M4A4_Inventory.png", stats: { dmg: 33, rate: 80, acc: 70, rec: 60, mob: 70, pen: 70, rel: "3.1" } },
    { id: 3, name: "AWP", category: "Rifles", price: 4750, image: "https://static.wikia.nocookie.net/cswikia/images/5/50/CS2_AWP_Inventory.png", stats: { dmg: 95, rate: 20, acc: 98, rec: 30, mob: 40, pen: 100, rel: "3.7" } },
    { id: 4, name: "Desert Eagle", category: "Pistols", price: 700, image: "https://static.wikia.nocookie.net/cswikia/images/1/1e/CS2_Desert_Eagle_Inventory.png", stats: { dmg: 63, rate: 45, acc: 55, rec: 85, mob: 80, pen: 81, rel: "2.2" } },
    { id: 5, name: "Glock-18", category: "Pistols", price: 200, image: "https://static.wikia.nocookie.net/cswikia/images/0/06/CS2_Glock-18_Inventory.png", stats: { dmg: 28, rate: 65, acc: 50, rec: 40, mob: 90, pen: 47, rel: "2.3" } },
    { id: 6, name: "Karambit", category: "Knives", price: 500, image: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapons/base_weapons/weapon_knife_karambit.8b491b581a4b9c7b5298071425f2b29a39a2a12f.png", stats: { dmg: 40, rate: 90, acc: 100, rec: 10, mob: 100, pen: 5, rel: "0.0" } },
    { id: 7, name: "USP-S", category: "Pistols", price: 200, image: "https://static.wikia.nocookie.net/cswikia/images/b/bb/CS2_USP-S_Inventory.png", stats: { dmg: 35, rate: 60, acc: 75, rec: 35, mob: 85, pen: 50, rel: "2.2" } },
    { id: 8, name: "Butterfly Knife", category: "Knives", price: 600, image: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapons/base_weapons/weapon_knife_butterfly.794147e84a4e9426202d45145910cbb007797ce5.png", stats: { dmg: 40, rate: 95, acc: 100, rec: 10, mob: 100, pen: 5, rel: "0.0" } },
    { id: 9, name: "M4A1-S", category: "Rifles", price: 2900, image: "https://static.wikia.nocookie.net/cswikia/images/4/4d/CS2_M4A1-S_Inventory.png", stats: { dmg: 38, rate: 70, acc: 85, rec: 45, mob: 75, pen: 70, rel: "3.1" } },
    { id: 10, name: "P250", category: "Pistols", price: 300, image: "https://static.wikia.nocookie.net/cswikia/images/3/3b/CS2_P250_Inventory.png", stats: { dmg: 38, rate: 65, acc: 60, rec: 55, mob: 85, pen: 64, rel: "2.2" } },
    { id: 11, name: "Galil AR", category: "Rifles", price: 1800, image: "https://static.wikia.nocookie.net/cswikia/images/0/0a/CS2_Galil_AR_Inventory.png", stats: { dmg: 30, rate: 85, acc: 55, rec: 65, mob: 70, pen: 78, rel: "3.0" } },
    { id: 12, name: "FAMAS", category: "Rifles", price: 2050, image: "https://liquipedia.net/commons/images/a/a8/Famas_new.png", stats: { dmg: 30, rate: 85, acc: 60, rec: 60, mob: 75, pen: 70, rel: "3.3" } },
    { id: 13, name: "MAC-10", category: "SMGs", price: 1050, image: "https://static.wikia.nocookie.net/cswikia/images/f/f0/CS2_MAC-10_Inventory.png", stats: { dmg: 29, rate: 95, acc: 40, rec: 45, mob: 95, pen: 58, rel: "2.6" } },
    { id: 14, name: "MP9", category: "SMGs", price: 1250, image: "https://static.wikia.nocookie.net/cswikia/images/5/5e/CS2_MP9_Inventory.png", stats: { dmg: 26, rate: 98, acc: 45, rec: 40, mob: 95, pen: 50, rel: "2.1" } },
    { id: 15, name: "P90", category: "SMGs", price: 2350, image: "https://static.wikia.nocookie.net/cswikia/images/c/ce/CS2_P90_Inventory.png", stats: { dmg: 26, rate: 98, acc: 50, rec: 45, mob: 85, pen: 65, rel: "3.3" } },
    { id: 16, name: "M9 Bayonet", category: "Knives", price: 450, image: "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XuWbwcuyMESA4Fdl-4nnpU7iQA3-kKnr8ytd6s2jMZtvIemcAGKEj7ojtOIwSnrrkEt25WiEw438cXuUaQB0WcBxFrUItxa6lNezMOKzsVPAy9USYWigJ8Q/360fx360f", stats: { dmg: 40, rate: 90, acc: 100, rec: 10, mob: 100, pen: 5, rel: "0.0" } }
];

let inventory = JSON.parse(localStorage.getItem('cs_inv')) || [];

function render(filter) {
    console.log("Filter applied:", filter || 'All');
    let activeFilter = filter || 'All';
    let grid = document.getElementById('grid');
    grid.innerHTML = "";

    for (let i = 0; i < arsenal.length; i++) {
        let weapon = arsenal[i];
        if (activeFilter === 'All' || weapon.category === activeFilter) {
            let formattedPrice = weapon.price.toLocaleString();
            grid.innerHTML += `
                <div class="weapon-box" onclick="openWeapon(${weapon.id})">
                    <img src="${weapon.image}">
                    <h3>${weapon.name}</h3>
                    <p style="color:var(--accent); font-weight:bold;">$${formattedPrice}</p>
                </div>`;
        }
    }
}

function openWeapon(id) {
    console.log("Details for ID:", id);
    let weapon = arsenal.find(function(item) {
        return item.id === id;
    });
    
    let s = weapon.stats;
    let detailDiv = document.getElementById('weaponDetail');
    let leftSide = createBar("Damage", s.dmg) + createBar("Accuracy", s.acc) + createBar("Mobility", s.mob);
    let rightSide = createBar("Fire Rate", s.rate) + createBar("Recoil", s.rec) + createBar("Penetration", s.pen);
    let categoryName = weapon.category.toUpperCase().slice(0, -1);

    detailDiv.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:start;">
            <div>
                <h1 style="margin:0;">${weapon.name}</h1>
                <p style="color:#8b949e; font-size:10px; letter-spacing:1px;">${categoryName}</p>
            </div>
            <div style="color:var(--accent); font-size:24px; font-weight:bold;">$${weapon.price.toLocaleString()}</div>
        </div>
        <img src="${weapon.image}" style="width:100%; height:180px; object-fit:contain; margin:15px 0;">
        <div class="stats-container">
            <div>${leftSide}</div>
            <div>${rightSide}</div>
        </div>
        <div class="reload-box">
            <label>Reload Time</label>
            <span>${s.rel} SEC</span>
        </div>
        <button id="addBtn" class="add-btn" onclick="addToCart('${weapon.name}', ${weapon.price})">ADD TO INVENTORY</button>
    `;

    document.getElementById('weaponModal').style.display = "block";
}

function createBar(label, val) {
    return `
        <div class="stat-row">
            <div class="label-group">
                <span>${label}</span>
                <span>${val}</span>
            </div>
            <div class="bar-outer">
                <div class="bar-inner" style="width:${val}%"></div>
            </div>
        </div>`;
}

function addToCart(name, price) {
    console.log("Added:", name);
    inventory.push({ name: name, price: price });
    localStorage.setItem('cs_inv', JSON.stringify(inventory));
    document.getElementById('cartCount').innerText = inventory.length;

    let btn = document.getElementById('addBtn');
    btn.innerText = "ADDED! +1";
    btn.style.background = "#238636";

    setTimeout(function() {
        btn.innerText = "ADD TO INVENTORY";
        btn.style.background = "var(--accent)";
    }, 800);
}

function openCart() {
    console.log("Inv open. Count:", inventory.length);
    let list = document.getElementById('cartItems');
    let totalArea = document.getElementById('totalPrice');
    let total = 0;
    list.innerHTML = "";

    for (let i = 0; i < inventory.length; i++) {
        let item = inventory[i];
        list.innerHTML += `
            <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #21262d;">
                <span>${item.name}</span>
                <b>$${item.price} <span onclick="removeItem(${i})" style="color:#f85149; cursor:pointer; margin-left:10px;">✖</span></b>
            </div>`;
        total += item.price;
    }
    totalArea.innerText = "TOTAL: $" + total.toLocaleString();
    document.getElementById('cartModal').style.display = "block";
}

function removeItem(index) {
    console.warn("Item removed at index:", index);
    inventory.splice(index, 1);
    localStorage.setItem('cs_inv', JSON.stringify(inventory));
    document.getElementById('cartCount').innerText = inventory.length;
    openCart();
}

function clearInv() {
    console.log("Inventory cleared.");
    inventory = [];
    localStorage.removeItem('cs_inv');
    document.getElementById('cartCount').innerText = 0;
    openCart();
}

function toggleTheme() {
    let body = document.body;
    let btn = document.getElementById('themeBtn');
    body.classList.toggle('light-theme');
    btn.innerText = body.classList.contains('light-theme') ? "🌙 DARK" : "☀️ LIGHT";
}

function openReg() {
    document.getElementById('regModal').style.display = "block";
}

function closeM() {
    document.querySelectorAll('.modal').forEach(function(m) {
        m.style.display = "none";
    });
}

function saveUser() {
    let nameInput = document.getElementById('fName').value;
    if (nameInput) {
        console.log("User profile saved:", nameInput);
        localStorage.setItem('cs_user', nameInput);
        location.reload();
    }
}

function logout() {
    console.log("User logged out.");
    localStorage.removeItem('cs_user');
    location.reload();
}

window.onload = function() {
    console.log("App ready.");
    let savedUser = localStorage.getItem('cs_user');
    if (savedUser) {
        let userZone = document.getElementById('userZone');
        userZone.innerHTML = `
            <span class="welcome-msg">WELCOME, ${savedUser.toUpperCase()}</span>
            <button onclick="logout()" class="logout-btn">LOG OUT</button>
        `;
    }
    document.getElementById('cartCount').innerText = inventory.length;
    render('All');
};