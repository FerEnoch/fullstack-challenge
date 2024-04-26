import { type Nft } from './types.ts'

interface NftCardProps {
  nft: Nft
}

const NftCard: React.FC<NftCardProps> = ({ nft }) => {
  const { name, image_url } = nft
  return (
    <div className='rounded-lg bg-gray-500 cursor-pointer'>
      <div>
        <img src={image_url} alt="name" className='rounded-lg' />
      </div>
      <div className='px-5'>
        <h1>{name}</h1>
      </div>
    </div>
  )
}


export default NftCard