import { requiredCollection } from '../../services/config.ts'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { type CollectionNftsAPIRes } from './types.ts'
import NftCard from './NftCard'

const NftCollection = () => {
  const [nfts, setNfts] = useState<CollectionNftsAPIRes['nfts'] | []>([])

  useEffect(() => {
    api.getCollectionNfts(requiredCollection)
      .then(response => setNfts(response['nfts']))
  }, [])

  return (
    <div className='px-10 w-full grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4'>
      {
        nfts && (
          nfts.map(nft => {
            return (
              <NftCard key={nft.identifier} nft={nft} />
            )
          })
        )
      }
    </div>
  )
}


export default NftCollection