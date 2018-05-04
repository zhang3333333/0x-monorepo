#!/usr/bin/env node

import * as fs from 'fs';
import lernaGetPackages = require('lerna-get-packages');
import * as _ from 'lodash';
import * as path from 'path';
import { exec as execAsync } from 'promisify-child-process';
import * as rimraf from 'rimraf';

import { utils } from './utils';

(async () => {
    const monorepoRootPath = path.join(__dirname, '../../..');
    const lernaPackages = lernaGetPackages(monorepoRootPath);
    const installablePackages = _.filter(
        lernaPackages,
        lernaPackage =>
            !lernaPackage.package.private &&
            !_.isUndefined(lernaPackage.package.main) &&
            lernaPackage.package.main.endsWith('.js'),
    );
    const packedPackagePathByName: { [packageName: string]: string } = {};
    for (const installableLernaPackage of installablePackages) {
        const packagePath = installableLernaPackage.location;
        const packageName = installableLernaPackage.package.name;
        utils.log(`Packing ${packageName}`);
        const result = await execAsync('npm pack', { cwd: packagePath });
        const packedPackageFileName = result.stdout.trim();
        packedPackagePathByName[packageName] = path.join(packagePath, packedPackageFileName);
    }
    const resolutions = _.mapValues(packedPackagePathByName, val => `file:${val}`);
    for (const installableLernaPackage of installablePackages) {
        const packagePath = installableLernaPackage.location;
        const packageName = installableLernaPackage.package.name;
        utils.log(`Testing ${packageName}`);
        const testDirectory = path.join(monorepoRootPath, '../test-env');
        fs.mkdirSync(testDirectory);
        const result = await execAsync('yarn init --yes', { cwd: testDirectory });
        const packedPackagePath = packedPackagePathByName[packageName];
        utils.log(`Installing ${path.basename(packedPackagePath)}`);
        await execAsync(`yarn add ${packedPackagePath}`, { cwd: testDirectory });
        const packageJSONFilePath = path.join(testDirectory, 'package.json');
        let packageJSONContent = JSON.parse(fs.readFileSync(packageJSONFilePath).toString());
        packageJSONContent = { ...packageJSONContent, resolutions };
        fs.writeFileSync(packageJSONFilePath, JSON.stringify(packageJSONContent));
        const indexFilePath = path.join(testDirectory, 'index.ts');
        fs.writeFileSync(indexFilePath, `import * as Package from '${packageName}';\n`);
        const tsConfig = {
            compilerOptions: {
                typeRoots: ['node_modules/@0xproject/typescript-typings/types', 'node_modules/@types'],
                module: 'commonjs',
                target: 'es5',
                lib: ['es2017', 'dom'],
                declaration: true,
                noImplicitReturns: true,
                pretty: true,
                strict: true,
            },
            include: ['index.ts'],
        };
        const tsconfigFilePath = path.join(testDirectory, 'tsconfig.json');
        fs.writeFileSync(tsconfigFilePath, JSON.stringify(tsConfig, null, 4));
        utils.log(`Compiling ${packageName}`);
        const tscBinaryPath = path.join(monorepoRootPath, './node_modules/typescript/bin/tsc');
        await execAsync(tscBinaryPath, { cwd: testDirectory });
        utils.log(`Successfully compiled with ${packageName} as a dependency`);
        rimraf.sync(testDirectory);
    }
})().catch(err => {
    utils.log(err.stderr);
    utils.log(err.stdout);
    process.exit(1);
});
