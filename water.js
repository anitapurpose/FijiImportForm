function calculateWater() {
  // Get the number of people from the input field
  const numPeople = document.getElementById("numPeople").value;

  // Assuming an average daily water intake of 2 liters per person
  const waterPerPerson = 2;

  // Calculate total water intake
  const totalWater = numPeople * waterPerPerson;

  // Display the result
  const waterOutput = document.getElementById("waterOutput");
  waterOutput.textContent = `Total daily water intake for ${numPeople} people is approximately ${totalWater} liters.`;
}
