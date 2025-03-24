function makeWorker() {
    let name = 'Pete';
    return function () {
      alert(name);
    };
  }
  let name = 'John';
  let work = makeWorker();
  
  work(); //  Pete because the variable name has been declared in global scope and in local scope. 
          //  The local scope has higher priority than the global scope.So when we call makeWorker() function,
          //  it will alert the name variable which is declared in the local scope.