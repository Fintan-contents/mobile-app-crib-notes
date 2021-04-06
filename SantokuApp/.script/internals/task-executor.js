const {spawn} = require('child_process');

const elapsedTime = (startTime) => {
  const precision = 0;
  const elapsed = process.hrtime(startTime)[1] / 1000000;
  const secondCount = process.hrtime(startTime)[0];
  const millisecondCount = elapsed.toFixed(precision);

  if (secondCount > 0) return `${secondCount}s`;
  return `${millisecondCount}ms`;
};

const runCommand = (task, command) => {
  return new Promise((resolve, reject) => {
    process.stdout.write(`\t${command.command} ${command.args.join(' ')} @[${command.cwd || './'}]...`);
    const spawnedTask = spawn(command.command, command.args, {shell: true, cwd: command.cwd});

    let stderr = '';
    spawnedTask.stderr.on('data', (data) => {
      stderr += data;
    });

    spawnedTask.on('error', (error) => {
      console.log(`❌ (error: ${error.message})`);
      reject(error);
    });

    spawnedTask.on('exit', (code) => {
      if (code !== 0) {
        console.log(`❌ (code: ${code})`);
        process.stderr.write(`\t\t${stderr}`);
        reject(code);
      } else {
        console.log(`✔️`);
        resolve(code);
      }
    });
  });
};

const execute = async (task) => {
  if (!task.enabled) {
    console.log(`⏭️ Skip '${task.name}'`);
    return;
  }

  console.log(`🚀 '${task.name}' has started.`);
  const startTime = process.hrtime();
  for (let command of task.commands) {
    try {
      await runCommand(task, command);
    } catch (e) {
      console.log(`❌ '${task.name}' has failed in ${elapsedTime(startTime)}.`);
      return;
    }
  }
  console.log(`✅ '${task.name}' has finished running in ${elapsedTime(startTime)}.`);
};

module.exports = {
  execute,
};
