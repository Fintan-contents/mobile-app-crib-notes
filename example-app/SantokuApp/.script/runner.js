#!/usr/bin/env node

const {createInterface} = require('readline');
const {execute} = require('./internals/task-executor');

const ask = (cui, task) => {
  return new Promise((resolve) => {
    const option = task.enabled ? 'Y/n' : 'y/N';
    cui.question(`${task.question || task.name + '?'} (${option}): `, (answer) => {
      const ans = checkAnswer(answer, task.enabled);
      if (ans === 'invalid') {
        console.log();
        console.log("🚫 Please select 'y' for yes, or 'n' for no.");
        ask(cui, task.question).then((a) => resolve(a === 'yes'));
      } else {
        resolve(ans === 'yes');
      }
    });
  });
};

const checkAnswer = (answer, defaultValue) => {
  if (['Y', 'y'].includes(answer)) {
    return 'yes';
  } else if (answer === 'n') {
    return 'no';
  } else if (answer === '') {
    return defaultValue ? 'yes' : 'no';
  }
  return 'invalid';
};

const platforms = {
  darwin: 'macos',
  win32: 'windows',
  win64: 'windows',
  linux: 'linux',
  cygwin: 'linux',
};

const main = async () => {
  // TODO: Check arguments
  const job = process.argv[2];
  const args = process.argv.slice(3);

  const platform = platforms[process.platform];
  if (!platform) {
    console.error(`Unknown platform is detected. platform: ${process.platform}`);
    process.exit(1);
  }

  const tasks = require(`./jobs/${job}-${platform}`);
  // TODO: Check if task is found

  if (args.includes('--all') || args.includes('-a')) {
    for (let task of tasks) {
      task.enabled = true;
    }
  }
  if (args.includes('--interactive') || args.includes('-i')) {
    const cui = createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    for (let task of tasks) {
      task.enabled = await ask(cui, task);
    }

    cui.close();
  }

  for (let task of tasks) {
    await execute(task);
  }
};

(async () => main())();
