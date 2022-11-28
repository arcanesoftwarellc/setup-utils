const { execSync } = require('child_process')

const execute = cmd => {
    console.log('Executing command: ', cmd)
    return execSync(cmd, {
        cwd: process.env.INIT_CWD || process.cwd(),
    }).toString()
}

const isPackage = name => execute(`npm pkg get name`).includes(name)

const setPackageJson = config =>
    Object.entries(config).forEach(([key, value]) => {
        execute(`npm pkg set ${key}=${value}`)
    })

module.exports = { execute, isPackage, setPackageJson }
