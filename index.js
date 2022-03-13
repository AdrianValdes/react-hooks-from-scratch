
const React = (() => {
  let hooks = [];
  let idx = 0
  function useState(initValue) {
    const state = hooks[idx] || initValue;
    const _idx = idx
    const setState = (newValue) => {
      hooks[_idx] = newValue;
    };
    idx++
    return [state, setState];
  }
  function render(Component) {
      idx = 0
      const C = Component()
      C.render()
      return C
  }

  return { useState, render };
})();

function Component() {
  const [count, setCount] = React.useState(1);
  const [text, setText] = React.useState("book");
  return {
    render: () => console.log({count, text}),
    click: () => setCount(count + 1),
    type: (word) => setText(word)
  };
}

let App = React.render(Component)
App.click()
App = React.render(Component)
App.type("magazine")
App = React.render(Component)




