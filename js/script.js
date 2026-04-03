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

function preload() {
  oujabeIcon = loadImage("assets/images/smallOujabeIcon.jpg")
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background("#61a08e")
  image(oujabeIcon,50,50,500,500)
}


function draw() {
}
