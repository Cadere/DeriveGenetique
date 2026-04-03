//Blob object class
//
//does blobs

class Blob{
  genotype;
  phenotype;
  parents;

  constructor(genotype){
    this.genotype = genotype;
    this.phenotype = generatePhenotype(this.genotype);
    this.parents = [];
  }

  constructor(parent1, parent2){
    this.genotype = breed(parent1, parent2);
    this.phenotype = generatePhenotype(this.genotype);
    this.parents = [parent1, parent2];
  }

  function generatePhenotype(genotype){
    return genotype.join("");
  }

  function breed(parent1, parent2){
    return [random(parent1.genotype), random(parent2.genotype)];
  }
}
