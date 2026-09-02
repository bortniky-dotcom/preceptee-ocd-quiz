(function () {
  var STORE = "ocdquiz.v1";
  function clearStore() {
    try { localStorage.removeItem(STORE); } catch (e) {}
    document.cookie = STORE + "=;max-age=0;path=/;SameSite=Lax";
  }
  function resetExam() {
    if (!confirm("Erase this attempt and start from question 1?")) return;
    clearStore();
    location.reload();
  }
  function hook(id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener("click", resetExam);
  }
  hook("resetBtn");
  hook("resetBtn2");
})();
