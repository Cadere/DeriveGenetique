//Blob object class
//
//does blobs

class Blob {
  genotype;
  phenotype;
  parents;

  constructor(blobParams){
      this.genotype = blobParams.genotype;
      this.phenotype = generatePhenotype(this.genotype);
      this.parents = blobParams.parents;
  }

  function generatePhenotype(genotype){
    return genotype.join("");
  }



   function fakeParent(allele) {
     return new Blob ({
       genotype: [allele,randomAllele()],
       parents: []
     });
   }

   function randomAllele() {
     return random(geneArray);
   }

   function randomGenotype() {
     return [randomAllele(), randomAllele()]
   }

   function breedBlobs(parents) {
     return [random(parents[0].genotype),random(parents[1].genotype)]
   }
}

function generateBlobFromParents(parents) {
  return new Blob({
    genotype: breedBlobs(parents),
    parents: parents
  });
}

function generateFounderBlob()  {
  return new Blob({
    genotype: randomGenotype(),
    parents: [fakeParent(this.genotype[0]),fakeParent(this.genotype[1])]
  });
 }

const geneArray = ["A","a","B","b"];
