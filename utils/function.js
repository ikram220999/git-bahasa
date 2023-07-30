const { exec } = require('child_process');

const runCommand = input => {
	exec(`git ${input}`, (error, stdout, stderr) => {
		if (error) {
			console.error(`Error: ${error.message}`);
			return;
		}
		console.log(stdout);
	});
};

const init2 = () => {
	runCommand('init');
};

const add = data => {
	if (data[1] == '.') {
		runCommand('add .');
	} else {
		runCommand(`add ${data[1]}`);
	}
	// console.log('add called !');
};

const commit = data => {
    console.log(data);
	if (data[1] == "-m") {
		runCommand(`commit -m "${data[2]}"`);
	} else {
		console.log('Sila letak [-- -m "mesej anda"] untuk tanda mesej');
	}
	console.log('commit called !');
};

const pull = data => {
	runCommand('pull');
	console.log('pull called !');
};

const push = data => {
	if (data[1] == '-u') {
		if (data[2] == 'asal') {
			runCommand(`push -u origin ${data[3]}`);
		} 
	} else {
        runCommand('push')
    }
	console.log('push called !');
};

const fetch = data => {
	runCommand('fetch');
	console.log('fetch called !');
};

const remote = data => {
	if (data[1] == 'tambah') {
		if (data[2] == 'asal') {
			runCommand(`remote add origin ${data[3]}`);
		}
	}
	console.log('remote called !');
};

const status = data => {
	runCommand('status');
	console.log('remote called !');
};

module.exports = {
	runCommand,
	init2,
	add,
	commit,
	pull,
	push,
	fetch,
	remote,
	status
};
