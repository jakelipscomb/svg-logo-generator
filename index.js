const fs = require("fs");
const inquirer = require("inquirer");
const svg = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");

class SVG {
    constructor() {
        this.textEl = ""
        this.shapeEl = ""
    }
    render()

    setTextEl()

    setShapeEl()
}

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters for your logo initials'
    },
    {
        type: 'input',
        name: 'shape-color',
        message: 'Enter a color or color code that you want your logo shape to use'
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'Enter the color or color code that you want your logo text to use',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select the shape of your svg logo',
        choices: ['Circle, Square, Triangle'],
    }
];



