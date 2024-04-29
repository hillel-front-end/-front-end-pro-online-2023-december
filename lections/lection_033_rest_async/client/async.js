console.log("1");

setTimeout(() => {
  console.log("1.5");
}, 0);

console.log("2");
// -----------

function hardOperation() {
  const start = Date.now();
  for (let i = 0, sum = 0; i < 1e10; i++) {
    sum += i;
  }
  const finish = Date.now();

  console.log(finish - start);
}

const hoverButton = document.querySelector(".btn-hover");
const openModal = document.querySelector(".open-modal");

hoverButton.addEventListener("click", () => {
  console.log("---hover----");
  sendAjax({
    url: "http://localhost:3000/test",
    method: "PUT",
    data: JSON.stringify({
      userName: "Valera",
      userSureName: "....",
    }),
    success: (JSONData) => {
      console.log(JSONData, "JSONData");
    },
    error: (e) => console.error(e, "error"),
  });
});

openModal.addEventListener("click", function () {
    alert("-HELLO--");
  //   hardOperation();
});

function sendAjax({ url, method = "GET", data = null, success, error }) {
  const xhr = new XMLHttpRequest();

  xhr.onload = () => {
    const response = xhr.responseText;
    if (typeof response === "string") {
      success(JSON.parse(response));
      return;
    }

    success(response);
  };

  xhr.onerror = error;

  xhr.onprogress = function (event) {
    if (event.lengthComputable) {
      console.log(`Получено ${event.loaded} из ${event.total} байт`);
    } else {
      console.log(`Получено ${event.loaded} байт`);
    }
  };

  xhr.open(method, url);

  method === "GET" ? xhr.send() : xhr.send(data);
}
