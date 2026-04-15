//Blob object class
//
//does blobs

class Blob {
  constructor(blobParams){
      this.genotype = blobParams.genotype;
      // this.phenotype = this.generatePhenotype(this.genotype);
      this.parents = blobParams.parents;
  }

  static generateFounderBlob()  {
    const gamete1 = this.randomGamete(geneBank);
    const gamete2 = this.randomGamete(geneBank);
    return new Blob({
      genotype: this.fecundation(gamete1,gamete2),
      parents: [this.fakeParent(gamete1), this.fakeParent(gamete2)]
    });
  }

  static fakeParent(gamete) {
    return new Blob ({
      genotype: this.fecundation(gamete,this.randomGamete(geneBank)),
      parents: []
    });
  }

  static randomGamete(genotype) {
    const oneGamete = {};
    Object.entries(genotype).forEach(([locus, alleles]) => {
      oneGamete[locus] = random(alleles);
    })
    return oneGamete;
  }

  static fecundation(gamete1,gamete2) {
    const genotype = {};
    Object.keys(geneBank).forEach((locus) => {
      genotype[locus] = [gamete1[locus], gamete2[locus]]
    })
    return genotype;
  }

  static generateBlobFromParents(parent1, parent2) {
    return new Blob({
      genotype: this.fecundation(this.randomGamete(parent1.genotype), this.randomGamete(parent2.genotype)),
      parents: [parent1, parent2]
    });
  }

  generatePhenotype(genotype){
    return genotype.join("");
  }
}


//const geneArray = ["A","a","B","b"];
