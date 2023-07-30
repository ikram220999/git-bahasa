#!/usr/bin/env node

/**
 * git-melayu
 * Git bahasa melayu
 *
 * @author lalat putih <kambing.com>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const {
	init2,
	remote,
	fetch,
	push,
	pull,
	commit,
	add,
	status
} = require('./utils/function');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

const inputCommand = input => {
	switch (input[0]) {
		case 'mula':
			init2();
			break;
		case 'tambah':
			add(input);
			break;
		case 'laku':
			commit(input);
			break;
		case 'tarik':
			pull(input);
			break;
		case 'tolak':
			push(input);
			break;
		case 'cari':
			fetch(input);
			break;
		case 'asing':
			remote(input);
			break;
		case 'status':
			status(input);
			break;
	}
};

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	debug && log(flags);

	input && inputCommand(input);
})();
