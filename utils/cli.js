const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	// clear: {
	// 	type: `boolean`,
	// 	default: false,
	// 	alias: `c`,
	// 	desc: `Clear the console`
	// },
	// noClear: {
	// 	type: `boolean`,
	// 	default: true,
	// 	desc: `Don't clear the console`
	// },
	// debug: {
	// 	type: `boolean`,
	// 	default: false,
	// 	alias: `d`,
	// 	desc: `Print debug info`
	// },
	// version: {
	// 	type: `boolean`,
	// 	alias: `v`,
	// 	desc: `Print CLI version`
	// }
	// version: {
	// 	type: `boolean`,
	// 	alias: `v`,
	// 	desc: `Print CLI version`
	// }
};

const commands = {
	tolong: { desc: `Print kambing info` },
	mula: {desc: `Bina git`},
	status: {desc: `Semak status perubahan`},
	laku: { desc: `Sahkan perubahan, contoh: [ laku -- -m "laku pertama" ]`},
	cari: {desc: `Cari perubahan terbaru`},
	tarik: { desc: `Tarik perubahan terbaru`},
	tolak: { desc: `Hantar laku, contoh: [ hantar -- -u asal main ]`},
	asing: { desc: `Tambah asal, contoh: [ asing tambah asal http://github.com/projek1.git ]`},

};

const helpText = meowHelp({
	name: `gitbm`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	// flags
};

module.exports = meow(helpText, options);
