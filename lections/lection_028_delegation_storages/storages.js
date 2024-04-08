// ------ storages ------
const url = new URLSearchParams(location.search);

// result = url.get("result");

// // a = +prompt();
// // b = +prompt();

// console.log(result, "result");
// url.set("a", 12);
// console.log(url.toString(), " url.toString()");

// if (!result) {
//   var result = a + b;
//   url.set("result", result);
//   console.log(url.toString(), "url");

//   location.search = url.toString();
// }

// console.log(result, "result");

// ------- cookies( 1- 4 ) -------

console.log(document.cookie, "cookies"); // 'key=value; optionKey1=optionValue1; ...; ;'

const hour = 3600;
// new Date();

document.cookie = `name=valera;max-age=${hour * 2}`;
document.cookie = `name=valera;expires=expires-date`;
//  https://backend-server/
//  https://backend-server-2/

// https://backend-server/route-1 and https://backend-server/route-1/nested-route

// https://backend-server/route-2

// https://backend-server/

// document.cookie = "name2=pety; path=/";
// ----- localstorage(5mb) -------

// https::/facebook.com
// http::/facebook.com

// twitter.com

// browser - protocol - domain - port

// localStorage.setItem();// key, value
// localStorage.getItem(); // key
// localStorage.removeItem();// key

// if (localStorage.getItem("item")) {
//   alert(localStorage.getItem("item"));
// }

// localStorage.setItem("item", "valera");

const person = { firstName: "valer", lastName: "Ternavsky" };

console.log(JSON.stringify(person));

localStorage.setItem("profile", JSON.stringify(person));

console.log(localStorage.getItem("profile"));
