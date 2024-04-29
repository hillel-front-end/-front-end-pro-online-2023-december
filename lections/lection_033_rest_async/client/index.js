// XmlHttpRequest, fetch(), Axios

const xhr = new XMLHttpRequest();

xhr.onload = () => {
  // console.log("---loaded---", xhr.responseText);
  const data = JSON.parse(xhr.responseText);
  console.log(data, "data");
  console.log(xhr.getAllResponseHeaders());
};

xhr.onerror = (error) => {
  console.log(error, "error");
};

//HEADERS: (application/json;)
// Content-type: application/json

// application: JSON, x-www-form-urlencoded, ZIP, XML

// -------------
// Simple HTTP methods: GET, POST,

// NOT SIMPLE: PUT, DELETE

xhr.open("PUT", "http://localhost:3000/test");

xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("Token", "1sadsadsad12d12");

// xhr.send(JSON.stringify({ foo: 123 })); // PUT, POST

// HTTP --> DNS

// ------ CORS -------

// CLIENT: http://127.0.0.1:5500/

// SERVER: http://localhost:3000/

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

// sendAjax({
//   url: "http://localhost:3000/test",
//   method: "PUT",
//   data: JSON.stringify({
//     userName: "Valera",
//     userSureName: "....",
//   }),
//   success: (JSONData) => {
//     console.log(JSONData, "JSONData");
//   },
//   error: (e) => console.error(e, "error"),
// });
