const inquirer = require("inquirer");


const {
	managerQuestions,
	engineerQuestions,
	internQuestions,
} = require("./utils/prompt-questions");
const generatePage = require("./src/page-template");
const { writeFile, copyFile } = require("./utils/generate-site");


const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const personnel = {
	manager: [],
	engineers: [],
	interns: [],
};

// asks the user if he/she want to add an additional Engineer or Intern
const promptAddEmployeeQuestion = () => {
	return inquirer
		.prompt([
			{
				type: "list",
				name: "addEmployee",
				message: "Would you like to add an Engineer or an Intern ?",
				choices: [
					"Add an Engineer",
					"Add an Intern",
					"Don't add any more Employees",
				],
				default: "Add an Engineer",
			},
		])
		.then((addEmployeeData) => {
			
			if (addEmployeeData.addEmployee === "Add an Engineer") {
				return promptEngineer(personnel);
			}
			
			else if (addEmployeeData.addEmployee === "Add an Intern") {
				return promptIntern(personnel);
			}
			
			else {
				return personnel;
			}
		});
};

// creates a new Manager object
const promptManager = () => {
	console.log(`
	=============
	Add a Manager
	=============`);

	
	return inquirer.prompt(managerQuestions).then((managerData) => {
		const { managerName, managerID, managerEmail, managerOffice } = managerData;

	
		const manager = new Manager(
			managerName,
			managerID,
			managerEmail,
			managerOffice
		);

		// push Manager object to personnel object
		personnel.manager.push(manager);
	});
};

// creates a new Engineer object
const promptEngineer = () => {
	console.log(`
	==================
	Add a New Engineer
	==================`);

	return (
		inquirer
			.prompt(engineerQuestions)
			.then((engineerData) => {
				const {
					engineerName,
					engineerID,
					engineerEmail,
					engineerGithub,
				} = engineerData;

				
				const engineer = new Engineer(
					engineerName,
					engineerID,
					engineerEmail,
					engineerGithub
				);

				
				personnel.engineers.push(engineer);
			})
			
			.then(promptAddEmployeeQuestion)
	);
};

//creates a new Intern object
const promptIntern = () => {
	console.log(`
	=================
	Add a New Intern
	=================`);

	return (
		inquirer
			.prompt(internQuestions)
			.then((internData) => {
				const { internName, internID, internEmail, internSchool } = internData;

				
				const intern = new Intern(
					internName,
					internID,
					internEmail,
					internSchool
				);

				
				personnel.interns.push(intern);
			})
			
			.then(promptAddEmployeeQuestion)
	);
};


promptManager()

	.then(promptAddEmployeeQuestion)
	
	.then((personnel) => {
		return generatePage(personnel);
	})
	
	.then((page) => writeFile(page))
	
	.then((writeFileResponse) => {
		console.log(writeFileResponse);
		
	})
		
	.catch((err) => {
		console.log(err);
	});