function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateCompanyName() {
  const prefixes = ["Neuro", "Meta", "Grift", "Cryo", "Quantum", "Yapple", "Dogeco", "Auto"];
  const suffixes = ["DAO", "Corp", "Solutions", "Verse", "Stack", "Fund", "Systems", "Network"];
  return `${random(prefixes)}${random(suffixes)}`;
}
