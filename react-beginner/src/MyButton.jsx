function MyButton(){
  let time = new Date();
  return (
  <button onClick={() => alert(new Date().toLocaleTimeString())}>
    Show Time
  </button>
);
}

export default MyButton;