function App() {
  const button = <button> click</button>;
  const firstName = 'Valera 22 '


  const onClickHandler = () => {
    console.log('---click----');
  }

  const onInputHandler = (e) => {
    console.log(e.target.value, '---e----')
  };

  const styles = {
    color: 'red',
    border: '2px solid red',
  };
  const flag = true;

  const className = 'accent';

  let content = null;

  // case -1 (Cond)
  if (flag) {
    content = <div className="true">Render TRUE</div>
  } else {
    content = <section>Render False</section>
  }

  /// loop

  const fruits = ['fruit-1', 'fruit-2'];
  const fruitsTemplate = fruits.map(fruit => <li>{ fruit }</li>);

  return (
      <div className="app">
        <h3> Render content </h3>
        {button}
        {firstName}
        <hr/>
        <h3>Bind event</h3>
        <input
            type="text"
            value={firstName}
            onInput={onInputHandler}
        />
        <hr/>
        <h3>Apply Attrs</h3>
        <button
            onClick={onClickHandler}
            style={styles}
            disabled={!flag}
            className={`base-class ${className}`}
        >click
        </button>

        <hr/>
        <h3>Render under condition</h3>
        {content}

        {!flag ? 'TRUE --- 2' : 'false --- 3'}

        { flag && <div> HELLo</div>}


        <hr/>

        <h3>Loop</h3>


        <ul>
          { fruits.length > 0 && (
              // fruits.map(fruit => <li>{ fruit }</li>)
              fruitsTemplate
          )}
        </ul>

      </div>
  )
}

export default App;