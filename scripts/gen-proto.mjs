import { execSync } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(process.cwd());
const outDir = resolve(root, 'tmp/proto-generated');

if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}

const protoFiles = [
  {
    name: 'conversation',
    input: resolve(root, 'docs/proto/conversation.proto')
  },
  {
    name: 'msg',
    input: resolve(root, 'docs/proto/msg.proto')
  }
];

for (const protoFile of protoFiles) {
  const outJs = resolve(outDir, `${protoFile.name}.js`);
  execSync(`npx --yes --package protobufjs-cli pbjs -t static-module -w es6 -o "${outJs}" "${protoFile.input}"`, {
    stdio: 'inherit'
  });
  console.log(`[proto] generated: ${outJs}`);
}
