import React from "react";
import NewBtn from "./NewBtn";

function Intro() {
  function handle(value) {
    alert(value);
  }

  return (
    <div>
      <h1>Hello World</h1>

      <div>
        <NewBtn btnName="Gaming" btnColor="red" handle={handle} />
        <NewBtn btnName="Bikes" btnColor="blue" handle={handle} />
        <NewBtn btnName="Movies" btnColor="violet" handle={handle} />
        <NewBtn btnName="Books" btnColor="green" handle={handle} />
        <NewBtn btnName="Books" btnColor="green" handle={handle} />
        <NewBtn btnName="Books" btnColor="green" handle={handle} />
        <NewBtn btnName="Books" btnColor="green" handle={handle} />
        <NewBtn btnName="Books" btnColor="green" handle={handle} />
        <NewBtn btnName="Books" btnColor="green" handle={handle} />
        <NewBtn btnName="Books" btnColor="green" handle={handle} />
        <NewBtn btnName="Books" btnColor="green" handle={handle} />
        <NewBtn btnName="Flims" btnColor="pink" handle={handle} />
        <NewBtn btnName="Flims" btnColor="pink" handle={handle} />
        <NewBtn btnName="Flims" btnColor="pink" handle={handle} />
        <NewBtn btnName="Flims" btnColor="pink" handle={handle} />
        <NewBtn btnName="Flims" btnColor="pink" handle={handle} />
        <NewBtn btnName="Flims" btnColor="pink" handle={handle} />
      </div>
    </div>
  );
}

export default Intro;
