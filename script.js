const computerPlay = () => {
  let options = ["Rock", "Paper", "Scissors"];
  const optionsIndex = Math.floor(Math.random() * options.length);
  const compOption = options[optionsIndex];
  console.log(compOption);
};
