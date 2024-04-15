const signIn = document.querySelector("#sign-in");
const firstName = document.querySelector('input[name="first-name"]');
const lastName = document.querySelector('input[name="last-name"]');
const signInPage = document.querySelector(".sign-in-page");
const mainPage = document.querySelector(".main-page");
const btnLogout = document.querySelector(".main-page button");

window.addEventListener("storage", ({ key, oldValue, newValue, url }) => {
  // console.log(key, oldValue, newValue, url);
  // console.log(newValue, "newValue");
  // newValue = JSON.parse(newValue);
  console.log("---123---", key, oldValue, newValue, url);

  if (key === "isAuth" && document.hidden) {
    // if (newValue) {
    //   onOpenMainPage();
    // } else {
    //   onSignInPage();
    // }
    location.reload();
  }
});

const onInit = () => {
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));

  if (isAuth) {
    onOpenMainPage();
  } else {
    onSignInPage();
  }
};

const onOpenMainPage = () => {
  signInPage.classList.add("hidden");
  mainPage.classList.remove("hidden");
};

const onSignInPage = () => {
  signInPage.classList.remove("hidden");
  mainPage.classList.add("hidden");
};

const updateLSAuth = (isAuth) => localStorage.setItem("isAuth", isAuth);

signIn.addEventListener("submit", function (event) {
  const isSuccess = true;

  if (isSuccess) {
    // onStorageEvent({
    //   key: "isAuth",
    //   oldValue: localStorage.getItem("isAuth"),
    //   newValue: isSuccess,
    // }); // manual call storage event in current tab
    updateLSAuth(isSuccess);
    onOpenMainPage();
  }

  event.preventDefault();
});

btnLogout.addEventListener("click", () => {
  updateLSAuth(false);
  onSignInPage();
});

const onStorageEvent = (params) => {
  window.dispatchEvent(new StorageEvent("storage", params));
};

onInit();
