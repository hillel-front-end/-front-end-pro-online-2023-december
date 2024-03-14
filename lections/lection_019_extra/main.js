// destruction 


const arr = [{name: "alex"}, {name: "aaa"}, {name: 1, a: false}, {name: "ccc"}];

// const alex = arr[0];

// const [ ,, alex ] = arr;

/// --- swap ----

// const save = arr[0]; 
// arr[0] = arr[1];
// arr[1] = save;

// ---- swap splice ---------

// arr[1] = arr.splice(0, 1, arr[1])[0];

// console.log(arr, 'arr')


// --- swap destruction ---

// [arr[0], arr[1]] = [arr[1], arr[0]]; // [{n: 'aaa'}, {n: 'alex'}]



//--------- rest spread --------



// -- exmp 1

// function foo({ b, a, ...args }) {

//     console.log(a, b, args);

// }

// const obj = { a: 1, b: 2, c: 3, d: 4};

// const { d, ...valera } = obj;

// // console.log(d, valera);
// foo({ a: 1, b: 2, c: 3, d: 4})



// --- exmp 2

function sum(a, b, c) {
    return a + b + c;
}



const obj = { a: 1, b: 2, c: 3, d: 4};


const arr2 = [1, 2, 3];

sum(...arr2)


function sum2(a, b, ...args) {
    // const args = [...arguments];
    console.log(args, 'args');


}

sum2(1, 2, 3, 4);


// --- copy ---

const obj1 = { f: 1, f2: 2, f3: 3};

const obj2 = { ...obj1, f2: 'another' }; //copy and add property

console.log(obj2 === obj1);

const mass1 = [1, 2, 3];
const mass2 = [...mass1, 4]; //copy and push

console.log(mass1 === mass2)



//-----------------------



const history = {
    records: [],
    
    add(item) {
      if (item) {
        this.records.push(item);
      }
    },
  
    draw() {
      let html = "<ol>";
      html += this.records
        .map((record) => "<li>" + JSON.stringify(record) + "</li>")
        .join("");
      html += "</ol>";
  
      document.write(html);
    },
  };
  
  const shape = {
    props: {
      left: 100,
      right: 200,
      top: 100,
      bottom: 400,
    },
  
    get perimeter() {
      // ----------------
      // -----------------
      const total = Object.values(this.props).reduce(
        (accum, item) => accum + item,
        0
      );
  
      history.add({
        total: total,
        props: this.props,
      });
  
      return total;
    },
  };
  
  console.log(shape.perimeter);
  
  console.log(shape.perimeter);
  console.log(shape.perimeter);
  
  shape.props.right = 600;
  
  // shape.props.foo = 'aaa';
  // console.log(shape.props);
  
  console.log(shape.perimeter);
  
  // console.log(history.records);
  
  history.draw();
  