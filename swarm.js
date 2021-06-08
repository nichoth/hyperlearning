const hyperswarm = require('hyperswarm')
var blake2s = require('blake2s')

const swarm = hyperswarm()

swarm.join(blake2s('my-hyperswarm-dkey'), {
    lookup: true, // find & connect to peers
    announce: true // optional- announce self as a connection target
})

swarm.on('connection', (socket, details) => {
    console.log('new connection!', details)

    // you can now use the socket as a stream, eg:
    // process.stdin.pipe(socket).pipe(process.stdout)
})

