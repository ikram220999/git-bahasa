const welcome = require('cli-welcome');
const pkg = require('./../package.json');
const unhandled = require('cli-handle-unhandled');

module.exports = ({ clear = false }) => {
	unhandled();
	// welcome({
	// 	title: `git-melayu`,
	// 	tagLine: `by lalat putih`,
	// 	description: pkg.description,
	// 	version: pkg.version,
	// 	bgColor: '#36BB09',
	// 	color: '#000000',
	// 	bold: true,
	// 	clear
	// });
};
