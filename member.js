function skillsMember() {
  var skills = ["HTML", "CSS", "JS", "PHP"];
  var totalSkills = skills.length;
  var result = "You have " + totalSkills + " skills: ";
  var i = 0;

  do {
    result += skills[i] + ", ";
    i++;
  } while (i < totalSkills);

  console.log(result);
}