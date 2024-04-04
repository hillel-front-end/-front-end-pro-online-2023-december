// --------

// В модели DOM Level 2 события распространяются по следующему принципу:
// На этапе ПЕРЕХВАТА событие распространяется от Document вниз до целевого элемента управления.
// Второй этап - СОБЫТИЕ В ЦЕЛЕВОМ УЗЛЕ.
// На третьем этапе событие ВСПЛЫВАЕТ от целевого элемента обратно вверх до корневого элемента.

// последний параметр в методе addEventListener -
// true - обработать событие на этапе ПЕРЕХВАТА
// false - обработать событие на этапе ВСПЛЫВАНИЕ
// event.stopPropagation();
var isTunnel = true;

window.onload = function () {
  var first = document.getElementById("first");
  var second = document.getElementById("second");
  var third = document.getElementById("third");

  //addEventListener('event', handler, bool);

  document.body.addEventListener(
    "click",
    function (event) {
      console.log("----body----", event.target);
    },
    false
  );

  first.addEventListener(
    "click",
    function (event) {
      // event.stopPropagation();
      this.style.background = "red";
      console.log("---first---", event.target);
    },
    isTunnel
  );

  second.addEventListener(
    "click",
    function (event) {
      // event.stopPropagation();
      this.style.background = "green";
      console.log("---second---", event.target);
    },
    isTunnel
  );

  third.addEventListener(
    "click",
    function (event) {
      this.style.background = "purple";
      console.log("---third---", event.target);
      // event.stopPropagation();
    },
    isTunnel
  );
};

// --- example ---

[...document.querySelectorAll("tr")].forEach((tr, index) => {
  tr.onclick = function () {
    console.log(`User ${index} profile open`);
  };
});

[...document.querySelectorAll("tr td button")].forEach((td, index) => {
  td.onclick = function (event) {
    // event.stopPropagation();
    console.log(`User ${index} edit profile`);
  };
});
