const geneDecoder = {
  "locusA": (genotype) => {
    if (genotype.locusA.includes("aY")) {
      return "Yellow";
    }
    if (genotype.locusA.includes("aW")) {
      return "Wildtype";
    }
    if (genotype.locusA.includes("aC")) {
      return "Clean";
    }
    return "Blue";
  }
}
