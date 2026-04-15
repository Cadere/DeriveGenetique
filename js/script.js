/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

// setup()
//
// Description of setup

var oujabeIcon;
let geneBank;

function preload() {
  oujabeIcon = loadImage("assets/images/smallOujabeIcon.jpg")
  geneBank = loadJSON("data/geneBank.json");
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background("#61a08e")
  image(oujabeIcon,50,50,500,500)
  // let baby = new Blob({
  //   genotype: ["a","a"],
  //   parents: []
  // });
  let founderBlob1 = Blob.generateFounderBlob();
  let founderBlob2 = Blob.generateFounderBlob();
  let babyBlob = Blob.generateBlobFromParents(founderBlob1,founderBlob2);
  console.log("Baby", babyBlob);
}

function draw() {
}
