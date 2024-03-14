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

  function memo(cb) {
    let cache = {};

    return (...args) => {
        const uniqKey = JSON.stringify(args);

        if (cache[uniqKey]) {
            return { result: cache[uniqKey], cache: true };
        }
        
        const result = cb(...args);
        cache = {...cache, [uniqKey]: result }

        return { result, cache: false };
    }
  }
  
  const shape = {
    props: Object.seal({
      left: 100,
      right: 200,
      top: 100,
      bottom: 400,
    }),

    // previous: {},

    calc: memo((props) => {
        return Object.values(props).reduce(
            (accum, item) => accum + item,
            0
        );
    }),

    get perimeter() {


        // if (typeof this.previous.props === 'object') {
            
            // if (this.previous.left === this.props.left && 
            //     this.previous.top === this.props.top
            // ) {
            //     return this.previous.total;
            // }
            // if (JSON.stringify(this.previous.props) === JSON.stringify(this.props)) {
            //     return this.previous.total;
            // }

        // }

        const { result:total, cache } = this.calc(this.props);

        console.log(total);

        // this.previous = { total, props: { ...this.props } }

        if (!cache) {
            history.add({
                total: total,
                props: { ...this.props }, //Object.assign()
            });
        }

  
      return total;
    },
  };
  
shape.perimeter;
shape.perimeter;
shape.perimeter;
  
shape.props.right = 600;
shape.perimeter;

shape.props.left = 40;
shape.props.right = 200;
shape.perimeter;

shape.props.right = 600;
shape.props.left = 100;
shape.perimeter;


history.draw();
  