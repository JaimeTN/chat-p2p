import { noise } from '@chainsafe/libp2p-noise'
import { yamux } from '@chainsafe/libp2p-yamux'
import { tcp } from '@libp2p/tcp'
import { webSockets } from '@libp2p/websockets'
import defaultsDeep from '@nodeutils/defaults-deep'
import { createLibp2p as create } from 'libp2p'
import { mdns } from '@libp2p/mdns'
import { mplex } from '@libp2p/mplex'

export async function createLibp2p (_options) {
  const defaults = {
    transports: [
      tcp(),
      webSockets()
    ],
    streamMuxers: [
        yamux(),mplex()
    ],
    connectionEncryption: [
      noise()
    ],
    peerDiscovery: [
        mdns({
          interval: 20e3
        })
      ],
  }

  return create(defaultsDeep(_options, defaults))
}
