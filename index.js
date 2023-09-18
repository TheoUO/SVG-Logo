const {Circle, Square, Triangle} = require("./lib/shapes");
const inquirer = require("inquirer");
const fs = require('fs');

const questions = [
	{
		type: "input",
		name: "text",
		message: "Enter one to three Characters:",
	},
	{
		type: "input",
		name: "color",
		message: "Enter a color keyword (OR a hexadecimal number):",
	},
	{
		type: "list",
		name: "shape",
		message: "Select a shape below:",
		choices: ["Circle", "Square", "Triangle"],
	},
	{
		type: "input",
		name: "shape-color",
		message: "Enter a color keyword (OR a hexadecimal number):",
	}
]


async function init(){
	inquirer .prompt(questions).then(answers => {
		const svg = new Svg();
		svg.setTextElement(answers.text,answers.color);
		svg.setShapeElement(answers.shape);
		svg.setShapeElement(answers.shape-color);
		svg.render();
		fs.writeFile("index.html", svg.render(), (err) => {
			if(err) throw err
			console.log("Done!")
		})

	})
}

init();
