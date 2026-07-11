const mcqs = [
  // === 2024 کے MCQs ===
  {q: "مادے کی پلازما حالت میں ذرات کس حالت میں ہوتے ہیں؟", options: ["ٹھوس", "مائع", "گیس", "آئنی گیس"], ans: 3},
  {q: "ایک ایٹم میں پروٹان کی تعداد کو کیا کہتے ہیں؟", options: ["ماس نمبر", "ایٹامک نمبر", "ویلنسی", "آاسوٹوپ"], ans: 1},
  {q: "پانی کے مالیکیول میں کون سا بانڈ ہوتا ہے؟", options: ["آئنی", "کوویلنٹ", "دھاتی", "ہائیڈروجن"], ans: 1},
  {q: "1 مول میں کتنے ذرات ہوتے ہیں؟", options: ["6.02 x 10^22", "6.02 x 10^23", "6.02 x 10^24", "6.02 x 10^25"], ans: 1},
  {q: "تھرموڈائنامک کا پہلا قانون کس کے متعلق ہے؟", options: ["توانائی کی بقا", "ماس کی بقا", "مومنٹم", "چارج"], ans: 0},
  {q: "NaCl میں کون سا بانڈ ہے؟", options: ["کوویلنٹ", "آئنی", "دھاتی", "ہائیڈروجن"], ans: 1},
  {q: "STP پر 1 مول گیس کا حجم کتنا ہوتا ہے؟", options: ["11.2 L", "22.4 L", "24.4 L", "44.8 L"], ans: 1},
  {q: "Endothermic ری ایکشن میں حرارت؟", options: ["خارج ہوتی ہے", "جذب ہوتی ہے", "کوئی تبدیلی نہیں", "پہلے خارج پھر جذب"], ans: 1},
  {q: "الیکٹران دریافت کیا تھا؟", options: ["نیوٹن", "جے جے تھامسن", "رائٹ", "ڈالٹن"], ans: 1},
  {q: "مادے کی کتنی بنیادی حالتیں ہیں؟", options: ["2", "3", "4", "5"], ans: 1},
  {q: "سوڈیم کلورائیڈ کا مالیکیولر ماس کتنا ہے؟", options: ["35.5", "58.5", "40", "23"], ans: 1},
  {q: "Ozone کی پرت ہمیں کس سے بچاتی ہے؟", options: ["UV Rays", "IR Rays", "X-Rays", "Gamma Rays"], ans: 0},
  {q: "کون سا عنصر سب سے زیادہ الیکٹرو نیگیٹو ہے؟", options: ["Li", "F", "Na", "Cl"], ans: 1},
  {q: "کاربن کی 4 بانڈ بنانے کی صلاحیت کو کیا کہتے ہیں؟", options: ["آئسومرزم", "ٹیٹرا ویلنسی", "کیٹینیشن", "پولیمرائزیشن"], ans: 1},
  {q: "Bronsted-Lowry کے مطابق بیس کیا ہے؟", options: ["H+ ڈونر", "H+ ایکسیپٹر", "الیکٹران ڈونر", "الیکٹران ایکسیپٹر"], ans: 1},

  // === 2025 کے MCQs ===
  {q: "ایک ریورسیبل ری ایکشن میں کب توازن قائم ہوتا ہے؟", options: ["جب آگے اور پیچھے ریٹ برابر ہوں", "جب ری ایکٹنٹ ختم ہوں", "جب درجہ حرارت زیادہ ہو", "جب دباؤ کم ہو"], ans: 0},
  {q: "سرکہ میں کون سا ایسڈ پایا جاتا ہے؟", options: ["ہائیڈروکلورک ایسڈ", "سلفیورک ایسڈ", "ایسیٹک ایسڈ", "نائٹرک ایسڈ"], ans: 2},
  {q: "دورانی جدول میں ایک ہی گروپ کے عناصر میں کیا مشترک ہوتا ہے؟", options: ["ایٹامک ماس", "ویلنس الیکٹران", "ایٹامک سائز", "کثافت"], ans: 1},
  {q: "ہیلوجن گروپ کا آخری عنصر کون سا ہے؟", options: ["فلورین", "کلورین", "برومائین", "آیوڈین"], ans: 3},
  {q: "تیزابی بارش کا سبب بننے والی گیس کون سی ہے؟", options: ["O2", "N2", "CO2 اور SO2", "H2"], ans: 2},
  {q: "pH اسکیل کی رینج کیا ہے؟", options: ["0-7", "0-14", "1-14", "7-14"], ans: 1},
  {q: "pH 7 کیا ظاہر کرتا ہے؟", options: ["ایسڈ", "بیس", "نیوٹرل", "سالٹ"], ans: 2},
  {q: "دورانی جدول کا سب سے بڑا دور کون سا ہے؟", options: ["دور 2", "دور 3", "دور 4", "دور 6"], ans: 3},
  {q: "Alkali Metals پانی سے ری ایکٹ کر کے کیا بناتے ہیں؟", options: ["ایسڈ", "بیس", "سالٹ", "آکسائیڈ"], ans: 1},
  {q: "Equilibria میں Kc کی اکائی کس پر منحصر ہے؟", options: ["درجہ حرارت", "دباؤ", "مولر کنسنٹریشن", "حجم"], ans: 2},
  {q: "Strong Acid کی مثال کون سی ہے؟", options: ["CH3COOH", "H2CO3", "HCl", "H2O"], ans: 2},
  {q: "Periodic Table میں دائیں سے بائیں جانے پر ایٹامک سائز؟", options: ["بڑھتا ہے", "گھٹتا ہے", "برابر رہتا ہے", "پہلے بڑھے پھر گھٹے"], ans: 0},
  {q: "Environmental Chemistry میں PM2.5 سے کیا مراد ہے؟", options: ["گیس", "ذرات", "مائع", "پلازما"], ans: 1},
  {q: "Group 1 کے عناصر کو کیا کہتے ہیں؟", options: ["Alkali Metals", "Alkaline Earth", "Halogens", "Noble Gases"], ans: 0},
  {q: "Hydrocarbons کی سب سے چھوٹی چین کون سی ہے؟", options: ["Ethane", "Methane", "Propane", "Butane"], ans: 1},

  // === 2026 کے MCQs - نیا SNC پیٹرن ===
  {q: "میتھین کا کیمیائی فارمولا کیا ہے؟", options: ["C2H6", "CH4", "C3H8", "C4H10"], ans: 1},
  {q: "Empirical Data جمع کرنے کا بہترین طریقہ کون سا ہے؟", options: ["قیاس", "مشاہدہ اور تجربہ", "کتاب پڑھنا", "اندازہ"], ans: 1},
  {q: "لیبارٹری میں تیزاب کو پتلا کرنے کے لیے کیا کرتے ہیں؟", options: ["تیزاب میں پانی ڈالتے ہیں", "پانی میں تیزاب ڈالتے ہیں", "دونوں مکس کرتے ہیں", "گرم کرتے ہیں"], ans: 1},
  {q: "کسی مادے کے ابلنے کے نقطہ پر کون سی حالت غالب ہوتی ہے؟", options: ["ٹھوس", "مائع", "گیس", "پلازما"], ans: 2},
  {q: "الیکٹران شیل K میں زیادہ سے زیادہ کتنے الیکٹران آ سکتے ہیں؟", options: ["2", "8", "18", "32"], ans: 0},
  {q: "Phase Change میں Enthalpy of Vaporization کس کے لیے ہے؟", options: ["ٹھوس سے مائع", "مائع سے گیس", "گیس سے مائع", "ٹھوس سے گیس"], ans: 1},
  {q: "Atomic Structure میں Nucleus میں کیا ہوتا ہے؟", options: ["الیکٹران", "پروٹان اور نیوٹران", "صرف پروٹان", "صرف نیوٹران"], ans: 1},
  {q: "Chemical Bonding میں Octet Rule کس نے دی؟", options: ["بوہر", "لیوس", "رائڈبرگ", "پلانک"], ans: 1},
  {q: "Stoichiometry میں Limiting Reagent کیا ہے؟", options: ["زیادہ مقدار والا", "کم مقدار والا", "کیٹالسٹ", "پروڈکٹ"], ans: 1},
  {q: "Laboratory میں Bunsen Burner کی نیلی شعلہ کس چیز کی علامت ہے؟", options: ["نامکمل جلنا", "مکمل جلنا", "گیس لیک", "خطرہ"], ans: 1}
];

let current = 0;
let score = 0;
let shuffled = [];

// پیج لوڈ ہوتے ہی سوالات کو Mix کر دیں
window.onload = function() {
  shuffled = mcqs.sort(() => Math.random() - 0.5);
  loadQuestion();
}

function loadQuestion() {
  document.getElementById("result").innerText = "";
  if(current >= shuffled.length) {
    document.getElementById("question").innerText = "🎉 کوئز ختم! 🎉";
    document.getElementById("options").innerHTML = "";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("score").innerText = "فائنل سکور: " + score + " / " + shuffled.length;
    return;
  }
  let q = shuffled[current];
  document.getElementById("question").innerText = "سوال " + (current+1) + ": " + q.q;
  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach((opt, i) => {
    let btn = document.createElement("button");
    btn.innerText = opt;
    btn.className = "option-btn";
    btn.onclick = () => checkAnswer(i, btn);
    optionsDiv.appendChild(btn);
  });
  document.getElementById("score").innerText = "Score: " + score + " / " + current;
  document.getElementById("nextBtn").style.display = "inline-block";
}

function checkAnswer(i, btn) {
  let allBtns = document.querySelectorAll(".option-btn");
  allBtns.forEach(b => b.disabled = true); // دوبارہ کلک بند

  if(i == shuffled[current].ans) {
    score++;
    btn.style.background = "#16a34a";
    btn.style.color = "white";
    document.getElementById("result").innerText = "✅ شاباش! صحیح جواب";
  } else {
    btn.style.background = "#dc2626";
    btn.style.color = "white";
    allBtns[shuffled[current].ans].style.background = "#16a34a";
    allBtns[shuffled[current].ans].style.color = "white";
    document.getElementById("result").innerText = "❌ غلط! صحیح جواب: " + shuffled[current].options[shuffled[current].ans];
  }
  document.getElementById("score").innerText = "Score: " + score + " / " + (current+1);
}

document.getElementById("nextBtn").onclick = () => {
  current++;
  loadQuestion();
}

// PWA Service Worker Register
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
