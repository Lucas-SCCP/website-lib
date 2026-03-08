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

if (!fs.existsSync(libNodeModules)) {
  console.error('node_modules não encontrado na lib. Rode npm install na lib primeiro.')
  process.exit(1)
}

const deps = ['react', 'react-dom']

for (const dep of deps) {
  const consumerDepPath = path.join(consumerPath, 'node_modules', dep)
  const libDepPath = path.join(libNodeModules, dep)

  if (!fs.existsSync(consumerDepPath)) {
    console.error(`Não encontrei ${dep} em ${consumerDepPath}. Rode npm install no consumidor primeiro.`)
    process.exit(1)
  }

  fs.rmSync(libDepPath, { recursive: true, force: true })

  fs.symlinkSync(consumerDepPath, libDepPath, 'dir')
}

console.log('\nReact e ReactDOM da lib agora apontam para a mesma cópia usada pelo consumidor.')
