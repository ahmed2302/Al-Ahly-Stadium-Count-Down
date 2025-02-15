function updateCounter() {
  // 🔹 تحديد تاريخ البداية يدويًا
  const startDate = new Date("2025-02-14T22:30:00");

  // 🔹 حساب تاريخ النهاية بعد 1400 يوم
  const countdownDuration = 1400 * 24 * 60 * 60 * 1000; // 1400 يوم بالميلي ثانية
  const targetDate = new Date(startDate.getTime() + countdownDuration);

  // 🔊 تحميل ملف الصوت
  const audio = new Audio("./sound effect.MP3");

  // ✅ تحديث العد التنازلي كل ثانية
  setInterval(() => {
    const now = new Date();
    const timeLeft = targetDate - now; // حساب الوقت المتبقي

    if (timeLeft <= 0) {
      document.getElementById("weeks").innerText = 0;
      document.getElementById("days").innerText = 0;
      document.getElementById("hours").innerText = 0;
      document.getElementById("minutes").innerText = 0;
      document.getElementById("seconds").innerText = 0;
      return;
    }

    // 🔹 حساب القيم المختلفة
    const weeks = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
    );
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // 🔹 عرض القيم في الصفحة
    document.getElementById("weeks").innerText = weeks;
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // 🔊 تشغيل الصوت عند تغيير الثواني
    audio
      .play()
      .catch((error) => console.log("🔇 الصوت لم يعمل تلقائيًا:", error));
  }, 1000);
}

// ✅ تشغيل الدالة عند تحميل الصفحة
updateCounter();

document.getElementById("close-btn").onclick = function () {
  document.querySelector(".overlay").classList.add("hidden");
  document.getElementById("close-btn").classList.add("hiden");
  // 🔊 تشغيل الصوت عند تغيير الثواني
  audio
    .play()
    .catch((error) => console.log("🔇 الصوت لم يعمل تلقائيًا:", error));
};
