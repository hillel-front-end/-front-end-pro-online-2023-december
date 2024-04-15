/// ----- Local Storage ------

// get
console.log(localStorage, "localstorage");
console.log(localStorage["profile"]);
console.log(localStorage.profile);
console.log(localStorage.getItem("key"));

// write
// localStorage.profile = "aaaa";

localStorage.setItem("key", "123");

/// ---------------------- JSON ------------------------

// JSON.stringify() --> TO JSON
// JSON.parse() --> From JSON

console.log({} + "12");

console.log(String([1, 2, 3]));

console.log(JSON.stringify({ a: 12 }));

// JSON поддерживает следующие типы данных:
//     Объекты { ... }
//     Массивы [ ... ]
//     Примитивы:
//     строки,
//     числа,
//     логические значения true/false,
//     null.

// ----------------
// const profile = { login: "aaa", password: "123" };

// localStorage.setItem("profile", JSON.stringify(profile));

// let profileFromLS = localStorage.getItem("profile");

// if (profileFromLS) {
//   console.log(profileFromLS, "profileFromLS");
//   profileFromLS = JSON.parse(profileFromLS);
//   console.log(profileFromLS, "profileFromLS");
// }

const firstName = document.querySelector('input[name="first-name"]');
const lastName = document.querySelector('input[name="last-name"]');
const signIn = document.querySelector("#sign-in");
const formItems = [...signIn];

function onHandler(key) {
  console.log(this.value, "value");
  localStorage.setItem(key, this.value);
}

firstName.addEventListener("input", () =>
  onHandler.call(firstName, "first-name")
);
lastName.addEventListener("change", () =>
  onHandler.call(lastName, "last-name")
);

signIn.addEventListener("submit", function (event) {
  event.preventDefault();

  const payload = formItems
    .filter((item) => item.tagName.toLowerCase() !== "button") // { [field-name]: field-value }
    .reduce(
      (accum, item) => ({
        ...accum,
        [item.name]: item.value,
      }),
      {}
    );

  console.log(213, "123");

  localStorage.setItem("sign-in-form", JSON.stringify(payload));
});

function onInit() {
  //   firstName.value = localStorage.getItem("first-name");
  //   lastName.value = localStorage.getItem("last-name");
  const payload = localStorage.getItem("sign-in-form");

  if (payload) {
    const parsedPayload = JSON.parse(payload);

    formItems.forEach((item) => {
      if (parsedPayload[item.name]) {
        item.value = parsedPayload[item.name];
      }
    });
  }
  // formItems.forEach(item )
}

// onInit();

// ----- event storage ---

// localStorage

// localStorage.getItem/ setItem

window.addEventListener("storage", function (event) {
  console.log(event, "event");
  console.log("----storage---");
});

// localStorage.setItem("aaa", "22222");

document.querySelector("button").addEventListener("click", function (event) {
  event.preventDefault();
  console.log("click");
  localStorage.setItem("a2", 13);
});
