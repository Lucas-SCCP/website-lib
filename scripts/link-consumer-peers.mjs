import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { createRequire } from 'node:module'

const consumerPathArg = process.argv[2]

if (!consumerPathArg) {
  console.error('Uso: npm run link:consumer-peers -- /caminho/para/projeto-consumidor')
  process.exit(1)
}

const libRoot = process.cwd()
const consumerPath = path.resolve(consumerPathArg)
const libNodeModules = path.join(libRoot, 'node_modules')
const packageJsonPath = path.join(libRoot, 'package.json')
const consumerPackageJsonPath = path.join(consumerPath, 'package.json')

if (!fs.existsSync(libNodeModules)) {
  console.error('node_modules não encontrado na lib. Rode npm install na lib primeiro.')
  process.exit(1)
}

if (!fs.existsSync(packageJsonPath)) {
  console.error('package.json não encontrado na raiz da lib.')
  process.exit(1)
}

if (!fs.existsSync(consumerPackageJsonPath)) {
  console.error(`package.json não encontrado no consumidor: ${consumerPackageJsonPath}`)
  process.exit(1)
}

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
const peerDependencies = Object.keys(packageJson.peerDependencies ?? {})

if (peerDependencies.length === 0) {
  console.error('Nenhuma peer dependency encontrada para linkar.')
  process.exit(1)
}

const consumerRequire = createRequire(consumerPackageJsonPath)
const consumerRootReal = fs.realpathSync(consumerPath)

const resolveConsumerDepPath = (dep) => {
  const direct = path.join(consumerPath, 'node_modules', dep)
  if (fs.existsSync(direct)) {
    return direct
  }

  try {
    const resolvedPkgJson = consumerRequire.resolve(`${dep}/package.json`)
    const resolvedDir = path.dirname(resolvedPkgJson)
    const resolvedReal = fs.realpathSync(resolvedDir)

    if (!resolvedReal.startsWith(`${consumerRootReal}${path.sep}`) && resolvedReal !== consumerRootReal) {
      return null
    }

    return resolvedDir
  } catch {
    return null
  }
}

const linked = []
const skipped = []

for (const dep of peerDependencies) {
  const consumerDepPath = resolveConsumerDepPath(dep)
  const libDepPath = path.join(libNodeModules, dep)

  if (!consumerDepPath) {
    skipped.push(dep)
    continue
  }

  fs.rmSync(libDepPath, { recursive: true, force: true })
  fs.mkdirSync(path.dirname(libDepPath), { recursive: true })
  fs.symlinkSync(consumerDepPath, libDepPath, 'dir')
  linked.push(dep)
}

if (linked.length === 0) {
  console.error('Nenhuma peer dependency encontrada no consumidor para linkar.')
  console.error('Verifique se você executou npm/yarn/pnpm install no consumidor e se o caminho informado está correto.')
  console.error(`Consumidor analisado: ${consumerPath}`)
  console.error(`Peers esperadas pela lib: ${peerDependencies.join(', ')}`)
  process.exit(1)
}

console.log(`\nPeers linkadas com sucesso (${linked.length}): ${linked.join(', ')}`)
if (skipped.length > 0) {
  console.log(`Peers ignoradas (não encontradas no consumidor): ${skipped.join(', ')}`)
}
