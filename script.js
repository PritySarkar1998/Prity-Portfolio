// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Fetch the skills data from the JSON file
  fetch("skills.json")
    .then((response) => response.json()) // Parse the JSON response
    .then((data) => {
      // Get references to the left and right columns in the HTML
      const leftColumn = document.getElementById("left-column");
      const rightColumn = document.getElementById("right-column");

      // Iterate over each skill in the fetched data
      data.skills.forEach((skill, index) => {
        // Create a new div element for the skill section
        const skillSection = document.createElement("div");
        skillSection.innerHTML = `<h3>${skill.name}</h3>`; // Set the skill name as a heading

        // Iterate over each concept within the skill
        skill.concepts.forEach((concept) => {
          // Create a new card for each concept
          const card = document.createElement("div");
          card.className = "card"; // Assign the card class for styling
          // Set the content of the card with terminology, description, and example
          card.innerHTML = `<h4>${concept.terminology}</h4><p>${concept.description}</p><pre><code>${concept.example}</code></pre>`;
          skillSection.appendChild(card); // Append the card to the skill section
        });

        // Append the skill section to the appropriate column
        if (skill.name === "Schematic Design:") {
          rightColumn.appendChild(skillSection); // Append to right column for Schematic Design
        } else if (index % 2 === 0) {
          leftColumn.appendChild(skillSection); // Append to left column for even index
        } else {
          rightColumn.appendChild(skillSection); // Append to right column for odd index
        }
      });
    })
    .catch((error) => console.error("Error fetching skills:", error)); // Log any errors that occur during the fetch
});