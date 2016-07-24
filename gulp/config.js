let rootDir = process.cwd();
let distributionDir = `${rootDir}/Distribution`;
let sourceDir = `${rootDir}/Source`;

export default {
    paths: {
        html: [
            `!${rootDir}/jspm_packages/**/*`,
            `!${rootDir}/node_modules/**/*`,
            `!${distributionDir}/**/*`,
            `${rootDir}/**/*.html`
        ],

        javascript: [
            `!${rootDir}/jspm_packages/**/*`,
            `!${rootDir}/node_modules/**/*`,
            `!${distributionDir}/**/*`,
            `!${rootDir}/config.js`,
            `!${rootDir}/gulpfile.js`,
            `!${rootDir}/gulp/**/*`,
            `${sourceDir}/**/*.js`
        ],

        less: [
            `!${rootDir}/jspm_packages/**/*`,
            `!${rootDir}/node_modules/**/*`,
            `!${distributionDir}/**/*`,
            `${rootDir}/**/*.less`
        ],

        rootDir: rootDir,
        distributionDir: distributionDir,
        sourceDir: sourceDir
    }
}