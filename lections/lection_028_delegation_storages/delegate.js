function onOpenHandler() {
  console.log("---open---");
}

function onCloseHandler() {
  console.log("---close---");
}

function onSaveHandler() {
  console.log("---save---");
}

function onEditHandler() {
  console.log("---edit---");
}

function newSolution() {
  console.log("---solution---");
}

function newSolution2() {}

// ----> case 1:
const list = document.querySelector(".list");
const lies = document.querySelectorAll(".list li");

console.log(lies, "lies");

// lies.forEach((li) => {
//   const { action = null } = li.dataset; //data-action

//   //   if (!action) return;

//   switch (action) {
//     case "open": {
//       li.addEventListener("click", onOpenHandler);
//       break;
//     }
//     case "save": {
//       li.addEventListener("click", onSaveHandler);
//       break;
//     }
//     case "edit": {
//       li.addEventListener("click", onEditHandler);
//       break;
//     }

//     case "close": {
//       li.addEventListener("click", onCloseHandler);
//       break;
//     }
//   }
// });

// ----> case 2:

// lies.forEach((li) => li.addEventListener("click", onClickHandler));

// function onClickHandler(event) {
//   const { action = null } = this.dataset; //data-action

//   //   console.log(event, "event");
//   //   console.log(this, "this");

//   switch (action) {
//     case "open": {
//       onOpenHandler.call(this, event);
//       break;
//     }
//     case "save": {
//       onSaveHandler.call(this, event);
//       break;
//     }
//     case "edit": {
//       onEditHandler.call(this, event);
//       break;
//     }

//     case "close": {
//       onCloseHandler.call(this, event);
//       break;
//     }
//   }
// }

// setTimeout(() => {
//   const type = 'new_solution';

//   const li = document.createElement("li");
//   li.innerText = "New Feature";

//   if (type === 'new_solution') {
//     li.addEventListener('click', newSolution)
//   }

//   list.append(li);
// }, 3000);

// ----- case 3: event delegation

console.log(list);

const oparation = {
  open: onOpenHandler,
  close: onCloseHandler,
  edit: onEditHandler,
  save: onSaveHandler,
  new_feature: newSolution,
  new_solution() {
    console.log("---feature---");
  },
};

function onClickHandler() {
  // const action = ;// Phase 2 --> target
  const li = event.target;
  const action = li.dataset.action;

  if (typeof oparation[action] === "function") {
    oparation[action](); 
  }
}

list.addEventListener("click", onClickHandler);

// setTimeout(() => {
//   const data = { type: "new_solution", text: "New Feature" };

//   const li = document.createElement("li");
//   li.innerText = data.text;
//   li.dataset.action = data.type;

//   list.append(li);
// }, 3000);


// ------------------------




