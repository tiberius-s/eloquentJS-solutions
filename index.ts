#!/usr/bin/env node -r @swc-node/register
import { Command } from 'commander';

const program = new Command();

async function main() {
  program.command('ch <chapter>').action(async (ch: number) => {
    try {
      await import(`./ejs/ch${ch}.ts`);
    } catch (error) {
      console.error(error);
    }
  });

  program.exitOverride();

  try {
    await program.parseAsync(process.argv);
  } catch (err) {
    // handle the exit your way
    console.error(`ERR: ${err}`);
    process.exit(1);
  }
}

main();
