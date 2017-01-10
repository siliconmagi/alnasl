const Button = {
  button: '<button id="myButton">Press Me</button>',
  attachEl: () => {
    document.getElementById('myButton').addEventListener('click',
      () => {
        console.log('clicked')
      }
    )
  }
};

export default Button;
