const getGithubLink = (engineer) => {
	return `https://github.com/${engineer.getGithub()}`;
};


const generateManager = (personnel) => {
	const manager = personnel.manager[0];

	return `
    <article>
        <div>
            <h2>${manager.getName()}</h2>
            <h3>${manager.getRole()}</h3>
        </div>
        <ul class="list-group">
            <li class="list-group-item"><b>ID: </b>${manager.getId()}</li>
            <li class="list-group-item"><b>Email: </b><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">
                <b>Office Number: </b>${manager.officeNumber}
            </li>
        </ul>
    </article>`;
};


const generateEngineer = (personnel) => {

	return personnel.engineers
		.map((engineer) => {
			return `
            <article>
            <div>
                <h2>${engineer.getName()}</h2>
                <h3>${engineer.getRole()}</h3>
            </div>
            <ul class="list-group">
                <li class="list-group-item"><b>ID: </b>${engineer.getId()}</li>
                <li class="list-group-item"><b>Email: </b><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">
                    <b>GitHub: </b> 
                    <a href="${getGithubLink(engineer)}" target="_blank">
                        ${engineer.getGithub()}
                    </a>
                </li>
            </ul>
        </article>`;
		})
		.join("");
};


const generateIntern = (personnel) => {
	
	return personnel.interns
		.map((intern) => {
			return `
            <article>
            <div>
                <h2>${intern.getName()}</h2>
                <h3>${intern.getRole()}</h3>
            </div>
            <ul class="list-group">
                <li class="list-group-item"><b>ID: </b>${intern.getId()}</li>
                <li class="list-group-item"><b>Email: </b><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">
                    <b>School: </b>${intern.getCollege()}
                </li>
            </ul>
        </article>`;
		})
		.join("");
};


module.exports = (personnel) => {
	return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
            <link rel="stylesheet" href="./style.css">
        </head>
        <body>
            <header class="bg-dark text-light">
                <h1>Team Profile</h1>
            </header>
            <main>
                <section>
                    ${generateManager(personnel)}
                    ${generateEngineer(personnel)}
                    ${generateIntern(personnel)}
                </section>
            </main>
        </body>
    </html>
    `;
};