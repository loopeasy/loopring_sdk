import { PublicKey } from "./loopring_defs"

export interface AccountInfo {
    accountId: number
    owner: string
    fronzen: boolean
    publicKey: PublicKey
    tags: string
    nonce: number
    keyNonce: number
    keySeed: string
}
