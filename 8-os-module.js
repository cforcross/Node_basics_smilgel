const os = require('os')

// infor about current user

const user = os.userInfo()
console.log(user)

// return system uptime in seconds
console.log(`the System uptime is ${os.uptime()} seconds`)

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOs)
