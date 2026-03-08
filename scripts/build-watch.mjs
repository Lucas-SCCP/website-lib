import { spawn } from 'node:child_process'
import process from 'node:process'

const tsc = spawn('npx', ['tsc', '--watch', '--preserveWatchOutput'], {
  stdio: ['inherit', 'pipe', 'pipe'],
  shell: true,
})

let fixRunning = false
let fixQueued = false

const runEsmFix = () => {
  if (fixRunning) {
    fixQueued = true
    return
  }

  fixRunning = true
  const fix = spawn('npx', ['tsc-esm-fix', 'dist'], {
    stdio: 'inherit',
    shell: true,
  })

  fix.on('close', () => {
    fixRunning = false
    if (fixQueued) {
      fixQueued = false
      runEsmFix()
    }
  })
}

const onOutput = (chunk) => {
  const message = chunk.toString()
  process.stdout.write(message)

  const match = message.match(/Found\s+(\d+)\s+errors?\.\s+Watching for file changes\./)
  if (match && Number(match[1]) === 0) {
    runEsmFix()
  }
}

tsc.stdout.on('data', onOutput)
tsc.stderr.on('data', (chunk) => process.stderr.write(chunk.toString()))

tsc.on('close', (code) => {
  process.exit(code ?? 0)
})

process.on('SIGINT', () => {
  tsc.kill('SIGINT')
})
process.on('SIGTERM', () => {
  tsc.kill('SIGTERM')
})
