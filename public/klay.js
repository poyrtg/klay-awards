// ================== NOMINATIONS ==================
const categories = {
  "KLAY KING": [
    { name: "Жора", img: "klay_king.jpg" },
    { name: "Дима", img: "klay_king.jpg" },
    { name: "Богдан", img: "klay_king.jpg" },
    { name: "Денис", img: "klay_king.jpg" },
    { name: "Вова", img: "klay_king.jpg" },
    { name: "Максим", img: "klay_king.jpg" },
    { name: "Андрей", img: "klay_king.jpg" },
    { name: "Серега", img: "klay_king.jpg" }
  ],

  "KLAY QUEEN": [
    { name: "Маша", img: "klay_queen.jpg" },
    { name: "Влада", img: "klay_queen.jpg" },
    { name: "Николь", img: "klay_queen.jpg" },
    { name: "Лиза", img: "klay_queen.jpg" },
    { name: "Диана", img: "klay_queen.jpg" },
    { name: "Сара", img: "klay_queen.jpg" },
    { name: "Соня", img: "klay_queen.jpg" },
    { name: "Ира", img: "klay_queen.jpg" },
    { name: "Арина", img: "klay_queen.jpg" },
    { name: "Виоллета", img: "klay_queen.jpg" },
    { name: "Света", img: "klay_queen.jpg" },
    { name: "Вика", img: "klay_queen.jpg" },
    { name: "Алина", img: "klay_queen.jpg" }
  ],
  "Мем года": [
    { name: "Маша", img: "klay_mem.jpg" },
    { name: "Влада", img: "klay_mem.jpg" },
    { name: "Николь", img: "klay_mem.jpg" },
    { name: "Лиза", img: "klay_mem.jpg" },
    { name: "Диана", img: "klay_mem.jpg" },
    { name: "Сара", img: "klay_mem.jpg" },
    { name: "Соня", img: "klay_mem.jpg" },
    { name: "Ира", img: "klay_mem.jpg" },
    { name: "Арина", img: "klay_mem.jpg" },
    { name: "Виоллета", img: "klay_mem.jpg" },
    { name: "Света", img: "klay_mem.jpg" },
    { name: "Вика", img: "klay_mem.jpg" },
    { name: "Алина", img: "klay_mem.jpg" },
    { name: "Жора", img: "klay_mem.jpg" },
    { name: "Дима", img: "klay_mem.jpg" },
    { name: "Богдан", img: "klay_mem.jpg" },
    { name: "Денис", img: "klay_mem.jpg" },
    { name: "Вова", img: "klay_mem.jpg" },
    { name: "Максим", img: "klay_mem.jpg" },
    { name: "Андрей", img: "klay_mem.jpg" },
    { name: "Серега", img: "klay_mem.jpg" }
  ],
  "Стиль года": [
    { name: "Маша", img: "klay_style.jpg" },
    { name: "Влада", img: "klay_style.jpg" },
    { name: "Николь", img: "klay_style.jpg" },
    { name: "Лиза", img: "klay_style.jpg" },
    { name: "Диана", img: "klay_style.jpg" },
    { name: "Сара", img: "klay_style.jpg" },
    { name: "Соня", img: "klay_style.jpg" },
    { name: "Ира", img: "klay_style.jpg" },
    { name: "Арина", img: "klay_style.jpg" },
    { name: "Виоллета", img: "klay_style.jpg" },
    { name: "Света", img: "klay_style.jpg" },
    { name: "Вика", img: "klay_style.jpg" },
    { name: "Алина", img: "klay_style.jpg" },
    { name: "Жора", img: "klay_style.jpg" },
    { name: "Дима", img: "klay_style.jpg" },
    { name: "Богдан", img: "klay_style.jpg" },
    { name: "Денис", img: "klay_style.jpg" },
    { name: "Вова", img: "klay_style.jpg" },
    { name: "Максим", img: "klay_style.jpg" },
    { name: "Андрей", img: "klay_style.jpg" },
    { name: "Серега", img: "klay_style.jpg" }
  ],
  "Учитель года": [
    { name: "Вікторія Янева", img: "klay_teacher.jpg" },
    { name: "Світлана Кривенька", img: "klay_teacher.jpg" },
    { name: "Ірина Середа", img: "klay_teacher.jpg" },
    { name: "Олена Черкасова", img: "klay_teacher.jpg" },
    { name: "Оксана Гущіна", img: "klay_teacher.jpg" },
    { name: "Марина Окольнича", img: "klay_teacher.jpg" },
    { name: "Микола Шевела", img: "klay_teacher.jpg" },
    { name: "Яна Караконстантин", img: "klay_teacher.jpg" },
    { name: "Галина Власова", img: "klay_teacher.jpg" },
    { name: "Олена Лещинська", img: "klay_teacher.jpg" },
    { name: "Ірина Бойміструк", img: "klay_teacher.jpg" },
    { name: "Катерина Далеченко", img: "klay_teacher.jpg" }
  ],
  "Ботан года": [
    { name: "Маша", img: "klay_botan.jpg" },
    { name: "Влада", img: "klay_botan.jpg" },
    { name: "Николь", img: "klay_botan.jpg" },
    { name: "Лиза", img: "klay_botan.jpg" },
    { name: "Диана", img: "klay_botan.jpg" },
    { name: "Сара", img: "klay_botan.jpg" },
    { name: "Соня", img: "klay_botan.jpg" },
    { name: "Ира", img: "klay_botan.jpg" },
    { name: "Арина", img: "klay_botan.jpg" },
    { name: "Виоллета", img: "klay_botan.jpg" },
    { name: "Света", img: "klay_botan.jpg" },
    { name: "Вика", img: "klay_botan.jpg" },
    { name: "Алина", img: "klay_botan.jpg" },
    { name: "Жора", img: "klay_botan.jpg" },
    { name: "Дима", img: "klay_botan.jpg" },
    { name: "Богдан", img: "klay_botan.jpg" },
    { name: "Денис", img: "klay_botan.jpg" },
    { name: "Вова", img: "klay_botan.jpg" },
    { name: "Максим", img: "klay_botan.jpg" },
    { name: "Андрей", img: "klay_botan.jpg" },
    { name: "Серега", img: "klay_botan.jpg" }
  ],
  "Спортсмен года": [
    { name: "Маша", img: "klay_sport.jpg" },
    { name: "Влада", img: "klay_sport.jpg" },
    { name: "Николь", img: "klay_sport.jpg" },
    { name: "Лиза", img: "klay_sport.jpg" },
    { name: "Диана", img: "klay_sport.jpg" },
    { name: "Сара", img: "klay_sport.jpg" },
    { name: "Соня", img: "klay_sport.jpg" },
    { name: "Ира", img: "klay_sport.jpg" },
    { name: "Арина", img: "klay_sport.jpg" },
    { name: "Виоллета", img: "klay_sport.jpg" },
    { name: "Света", img: "klay_sport.jpg" },
    { name: "Вика", img: "klay_sport.jpg" },
    { name: "Алина", img: "klay_sport.jpg" },
    { name: "Жора", img: "klay_sport.jpg" },
    { name: "Дима", img: "klay_sport.jpg" },
    { name: "Богдан", img: "klay_sport.jpg" },
    { name: "Денис", img: "klay_sport.jpg" },
    { name: "Вова", img: "klay_sport.jpg" },
    { name: "Максим", img: "klay_sport.jpg" },
    { name: "Андрей", img: "klay_sport.jpg" },
    { name: "Серега", img: "klay_sport.jpg" }
  ],
  "Человек улыбка": [
    { name: "Маша", img: "klay_smile.jpg" },
    { name: "Влада", img: "klay_smile.jpg" },
    { name: "Николь", img: "klay_smile.jpg" },
    { name: "Лиза", img: "klay_smile.jpg" },
    { name: "Диана", img: "klay_smile.jpg" },
    { name: "Сара", img: "klay_smile.jpg" },
    { name: "Соня", img: "klay_smile.jpg" },
    { name: "Ира", img: "klay_smile.jpg" },
    { name: "Арина", img: "klay_smile.jpg" },
    { name: "Виоллета", img: "klay_smile.jpg" },
    { name: "Света", img: "klay_smile.jpg" },
    { name: "Вика", img: "klay_smile.jpg" },
    { name: "Алина", img: "klay_smile.jpg" },
    { name: "Жора", img: "klay_smile.jpg" },
    { name: "Дима", img: "klay_smile.jpg" },
    { name: "Богдан", img: "klay_smile.jpg" },
    { name: "Денис", img: "klay_smile.jpg" },
    { name: "Вова", img: "klay_smile.jpg" },
    { name: "Максим", img: "klay_smile.jpg" },
    { name: "Андрей", img: "klay_smile.jpg" },
    { name: "Серега", img: "klay_smile.jpg" }
  ],
  "Человек помощь": [
    { name: "Маша", img: "klay_help.jpg" },
    { name: "Влада", img: "klay_help.jpg" },
    { name: "Николь", img: "klay_help.jpg" },
    { name: "Лиза", img: "klay_help.jpg" },
    { name: "Диана", img: "klay_help.jpg" },
    { name: "Сара", img: "klay_help.jpg" },
    { name: "Соня", img: "klay_help.jpg" },
    { name: "Ира", img: "klay_help.jpg" },
    { name: "Арина", img: "klay_help.jpg" },
    { name: "Виоллета", img: "klay_help.jpg" },
    { name: "Света", img: "klay_help.jpg" },
    { name: "Вика", img: "klay_help.jpg" },
    { name: "Алина", img: "klay_help.jpg" },
    { name: "Жора", img: "klay_help.jpg" },
    { name: "Дима", img: "klay_help.jpg" },
    { name: "Богдан", img: "klay_help.jpg" },
    { name: "Денис", img: "klay_help.jpg" },
    { name: "Вова", img: "klay_help.jpg" },
    { name: "Максим", img: "klay_help.jpg" },
    { name: "Андрей", img: "klay_help.jpg" },
    { name: "Серега", img: "klay_help.jpg" }
  ],
  "Человек спокойствие": [
    { name: "Маша", img: "klay_relax.jpg" },
    { name: "Влада", img: "klay_relax.jpg" },
    { name: "Николь", img: "klay_relax.jpg" },
    { name: "Лиза", img: "klay_relax.jpg" },
    { name: "Диана", img: "klay_relax.jpg" },
    { name: "Сара", img: "klay_relax.jpg" },
    { name: "Соня", img: "klay_relax.jpg" },
    { name: "Ира", img: "klay_relax.jpg" },
    { name: "Арина", img: "klay_relax.jpg" },
    { name: "Виоллета", img: "klay_relax.jpg" },
    { name: "Света", img: "klay_relax.jpg" },
    { name: "Вика", img: "klay_relax.jpg" },
    { name: "Алина", img: "klay_relax.jpg" },
    { name: "Жора", img: "klay_relax.jpg" },
    { name: "Дима", img: "klay_relax.jpg" },
    { name: "Богдан", img: "klay_relax.jpg" },
    { name: "Денис", img: "klay_relax.jpg" },
    { name: "Вова", img: "klay_relax.jpg" },
    { name: "Максим", img: "klay_relax.jpg" },
    { name: "Андрей", img: "klay_relax.jpg" },
    { name: "Серега", img: "klay_relax.jpg" }
  ],
  "Человек солнце": [
    { name: "Маша", img: "klay_good.jpg" },
    { name: "Влада", img: "klay_good.jpg" },
    { name: "Николь", img: "klay_good.jpg" },
    { name: "Лиза", img: "klay_good.jpg" },
    { name: "Диана", img: "klay_good.jpg" },
    { name: "Сара", img: "klay_good.jpg" },
    { name: "Соня", img: "klay_good.jpg" },
    { name: "Ира", img: "klay_good.jpg" },
    { name: "Арина", img: "klay_good.jpg" },
    { name: "Виоллета", img: "klay_good.jpg" },
    { name: "Света", img: "klay_good.jpg" },
    { name: "Вика", img: "klay_good.jpg" },
    { name: "Алина", img: "klay_good.jpg" },
    { name: "Жора", img: "klay_good.jpg" },
    { name: "Дима", img: "klay_good.jpg" },
    { name: "Богдан", img: "klay_good.jpg" },
    { name: "Денис", img: "klay_good.jpg" },
    { name: "Вова", img: "klay_good.jpg" },
    { name: "Максим", img: "klay_good.jpg" },
    { name: "Андрей", img: "klay_good.jpg" },
    { name: "Серега", img: "klay_good.jpg" }
  ],
  "Красота года": [
    { name: "Маша", img: "klay_beauty.jpg" },
    { name: "Влада", img: "klay_beauty.jpg" },
    { name: "Николь", img: "klay_beauty.jpg" },
    { name: "Лиза", img: "klay_beauty.jpg" },
    { name: "Диана", img: "klay_beauty.jpg" },
    { name: "Сара", img: "klay_beauty.jpg" },
    { name: "Соня", img: "klay_beauty.jpg" },
    { name: "Ира", img: "klay_beauty.jpg" },
    { name: "Арина", img: "klay_beauty.jpg" },
    { name: "Виоллета", img: "klay_beauty.jpg" },
    { name: "Света", img: "klay_beauty.jpg" },
    { name: "Вика", img: "klay_beauty.jpg" },
    { name: "Алина", img: "klay_beauty.jpg" },
    { name: "Жора", img: "klay_beauty.jpg" },
    { name: "Дима", img: "klay_beauty.jpg" },
    { name: "Богдан", img: "klay_beauty.jpg" },
    { name: "Денис", img: "klay_beauty.jpg" },
    { name: "Вова", img: "klay_beauty.jpg" },
    { name: "Максим", img: "klay_beauty.jpg" },
    { name: "Андрей", img: "klay_beauty.jpg" },
    { name: "Серега", img: "klay_beauty.jpg" }
  ],
  "Легенда года": [
    { name: "Маша", img: "klay_legend.jpg" },
    { name: "Влада", img: "klay_legend.jpg" },
    { name: "Николь", img: "klay_legend.jpg" },
    { name: "Лиза", img: "klay_legend.jpg" },
    { name: "Диана", img: "klay_legend.jpg" },
    { name: "Сара", img: "klay_legend.jpg" },
    { name: "Соня", img: "klay_legend.jpg" },
    { name: "Ира", img: "klay_legend.jpg" },
    { name: "Арина", img: "klay_legend.jpg" },
    { name: "Виоллета", img: "klay_legend.jpg" },
    { name: "Света", img: "klay_legend.jpg" },
    { name: "Вика", img: "klay_legend.jpg" },
    { name: "Алина", img: "klay_legend.jpg" },
    { name: "Жора", img: "klay_legend.jpg" },
    { name: "Дима", img: "klay_legend.jpg" },
    { name: "Богдан", img: "klay_legend.jpg" },
    { name: "Денис", img: "klay_legend.jpg" },
    { name: "Вова", img: "klay_legend.jpg" },
    { name: "Максим", img: "klay_legend.jpg" },
    { name: "Андрей", img: "klay_legend.jpg" },
    { name: "Серега", img: "klay_legend.jpg" }
  ],
  "Душа класса": [
    { name: "Маша", img: "klay_soul.jpg" },
    { name: "Влада", img: "klay_soul.jpg" },
    { name: "Николь", img: "klay_soul.jpg" },
    { name: "Лиза", img: "klay_soul.jpg" },
    { name: "Диана", img: "klay_soul.jpg" },
    { name: "Сара", img: "klay_soul.jpg" },
    { name: "Соня", img: "klay_soul.jpg" },
    { name: "Ира", img: "klay_soul.jpg" },
    { name: "Арина", img: "klay_soul.jpg" },
    { name: "Виоллета", img: "klay_soul.jpg" },
    { name: "Света", img: "klay_soul.jpg" },
    { name: "Вика", img: "klay_soul.jpg" },
    { name: "Алина", img: "klay_soul.jpg" },
    { name: "Жора", img: "klay_soul.jpg" },
    { name: "Дима", img: "klay_soul.jpg" },
    { name: "Богдан", img: "klay_soul.jpg" },
    { name: "Денис", img: "klay_soul.jpg" },
    { name: "Вова", img: "klay_soul.jpg" },
    { name: "Максим", img: "klay_soul.jpg" },
    { name: "Андрей", img: "klay_soul.jpg" },
    { name: "Серега", img: "klay_soul.jpg" }
  ]
};

const categoryDescriptions = {
  "KLAY KING": "Самый лучший парень класса.",
  "KLAY QUEEN": "Самая лучшая девочка класса.",
  "Мем года": "Даже молча будет смешить всех.",
  "Стиль года": "Стиль-его жизнь.",
  "Учитель года": "Лучший учитель.",
  "Ботан года": "Учиться на одни пятерки.",
  "Спортсмен года": "Спорт-его второе имя.",
  "Человек улыбка": "Улыбаеться больше чем спит.",
  "Человек помощь": "Всегда протянет руку помощи.",
  "Человек спокойствие": "Само спокойствие.",
  "Человек солнце": "Самый добрый человек класса.",
  "Красота года": "Самый красивый ученик.",
  "Легенда года": "Человек которого все уважают.",
  "Душа класса": "Человек без которого класс-не класс."
};




import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// ===== Firebase config =====
const firebaseConfig = {
  apiKey: "AIzaSyCWUCq7KPuSpjcupztqnQZJyMugRTMv3uw",
  authDomain: "klay-awards-2025.firebaseapp.com",
  databaseURL: "https://klay-awards-2025-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "klay-awards-2025",
  storageBucket: "klay-awards-2025.appspot.com",
  messagingSenderId: "600782741860",
  appId: "1:600782741860:web:4e7e2b4f5837a7244a1a71"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

let uid = null; // UID текущего пользователя
const votes = {}; // локальные голоса

// ===== Авторизация =====
signInAnonymously(auth)
  .then(() => console.log("Анонимная авторизация прошла успешно"))
  .catch((err) => console.error("Ошибка авторизации:", err));

onAuthStateChanged(auth, (user) => {
  if (user) {
    uid = user.uid;
    loadVotes(); // загружаем голосование после авторизации
  }
});

// ===== Modal элементы =====
const modal = document.getElementById("nomineeModal");
const modalTitle = document.getElementById("categoryTitle");
const modalDesc = document.getElementById("categoryDescription");
const nomineeList = document.getElementById("nomineeList");
const confirmVoteBtn = document.getElementById("confirmVoteBtn");
const closeBtn = document.querySelector(".close");

let selectedCategory = null;
let selectedNominee = null;

// ===== Открытие модалки =====
function openModal(category) {
  selectedCategory = category;
  selectedNominee = null;
  modalTitle.textContent = category;
  modalDesc.textContent = categoryDescriptions[category] || "";
  nomineeList.innerHTML = "";

  categories[category].forEach(nominee => {
    const div = document.createElement("div");
    div.className = "nominee";
    div.innerHTML = `<img src="${nominee.img}" alt="${nominee.name}"><span>${nominee.name}</span><button>Выбрать</button>`;
    
    div.querySelector("button").addEventListener("click", ()=> {
      nomineeList.querySelectorAll(".nominee").forEach(n=>n.classList.remove("selected"));
      div.classList.add("selected");
      selectedNominee = nominee.name;
    });
    
    nomineeList.appendChild(div);
  });

  modal.style.display = "flex";
  modal.scrollTop = 0;
}

// ===== Закрытие модалки =====
closeBtn.onclick = () => modal.style.display="none";
window.onclick = e => { if(e.target===modal) modal.style.display="none"; }

// ===== Клик по карточкам =====
document.querySelectorAll(".card, .main-card").forEach(card => {
  const category = card.dataset.category;

  card.addEventListener("click", async () => {
    if (!uid) {
      alert("Ошибка авторизации!");
      return;
    }

    // Проверяем, голосовал ли уже пользователь
    const voteRef = ref(db, `votes/${uid}/${category}`);
    try {
      const snapshot = await get(voteRef);
      if (snapshot.exists()) {
        const votedNominee = snapshot.val();
        const sel = card.querySelector(".selected-vote") || document.createElement("div");
        sel.className = "selected-vote";
        sel.textContent = `Вы выбрали: ${votedNominee}`;
        card.appendChild(sel);
        return; // модалка не открывается
      }
    } catch (err) {
      console.error(err);
      alert("Ошибка проверки голосования");
      return;
    }

    openModal(category);
  });
});

// ===== Подтверждение голоса =====
confirmVoteBtn.addEventListener("click", async () => {
  if (!selectedNominee) {
    alert("Выберите кандидата!");
    return;
  }

  if (!uid) {
    alert("Ошибка авторизации!");
    return;
  }

  votes[selectedCategory] = selectedNominee;

  // Сохраняем голос в Firebase
  try {
    await set(ref(db, `votes/${uid}/${selectedCategory}`), selectedNominee);
    console.log("Голос сохранён");

    // Обновляем карточку
    const card = document.querySelector(`.card[data-category="${selectedCategory}"], .main-card[data-category="${selectedCategory}"]`);
    let sel = card.querySelector(".selected-vote");
    if (!sel) {
      sel = document.createElement("div");
      sel.className = "selected-vote";
      card.appendChild(sel);
    }
    sel.textContent = `Вы выбрали: ${selectedNominee}`;
    modal.style.display = "none";
  } catch(err) {
    console.error(err);
    alert("Ошибка сохранения голоса!");
  }
});

// ===== Загрузка голосов после авторизации =====
async function loadVotes() {
  for (const category in categories) {
    const voteRef = ref(db, `votes/${uid}/${category}`);
    try {
      const snapshot = await get(voteRef);
      if (snapshot.exists()) {
        const votedNominee = snapshot.val();
        votes[category] = votedNominee;
        const card = document.querySelector(`.card[data-category="${category}"], .main-card[data-category="${category}"]`);
        if (card) {
          let sel = card.querySelector(".selected-vote");
          if (!sel) {
            sel = document.createElement("div");
            sel.className = "selected-vote";
            card.appendChild(sel);
          }
          sel.textContent = `Вы выбрали: ${votedNominee}`;
        }
      }
    } catch(err) {
      console.error(err);
    }
  }
}