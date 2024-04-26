import { baseApiURL } from './config.ts'

export const api = {
  getCollectionInfo: async (collection: string) => {
    return await fetch(`${baseApiURL}/collection/${collection}}`).then(res => res.json())
  },


  getCollectionNfts: async (collection: string) => {
    return await fetch(`${baseApiURL}/collection/${collection}/nfts`).then(res => res.json())
  }

}