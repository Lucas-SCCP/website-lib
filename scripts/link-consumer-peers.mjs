import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const consumerPathArg = process.argv[2]

if (!consumerPathArg) {
  console.error('Uso: npm run link:consumer-peers -- /caminho/para/projeto-consumidor')
  process.exit(1)
}

const libRoot = process.cwd()
const consumerPath = path.resolve(consumerPathArg)
const libNodeModules = path.join(libRoot, 'node_modules')
const packageJsonPath = path.join(libRoot, 'package.json')

if (!fs.existsSync(libNodeModules)) {
  console.error('node_modules não encontrado na lib. Rode npm install na lib primeiro.')
  process.exit(1)
}

if (!fs.existsSync(packageJsonPath)) {
  console.error('package.json não encontrado na raiz da lib.')
  process.exit(1)
}

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
const peerDependencies = Object.keys(packageJson.peerDependencies ?? {})

if (peerDependencies.length === 0) {
  console.error('Nenhuma peer dependency encontrada para linkar.')
  process.exit(1)
}

const linked = []
const skipped = []

for (const dep of peerDependencies) {
  const consumerDepPath = path.join(consumerPath, 'node_modules', dep)
  const libDepPath = path.join(libNodeModules, dep)

  if (!fs.existsSync(consumerDepPath)) {
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
  process.exit(1)
}

console.log(`\nPeers linkadas com sucesso (${linked.length}): ${linked.join(', ')}`)
if (skipped.length > 0) {
  console.log(`Peers ignoradas (não encontradas no consumidor): ${skipped.join(', ')}`)
}
