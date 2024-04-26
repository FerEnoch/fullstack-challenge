import { requiredCollection } from '../../services/config'
import { useEffect, useState } from 'react'
import Navigation from './Navigation'
import { api } from '../../services/api'
import { OpenSeaCollectionAPIRes } from '../../services/index.d'

const Header = () => {
  const [collectionInfo, setCollectionInfo] = useState<OpenSeaCollectionAPIRes | null>(null)

  useEffect(() => {
    api.getCollectionInfo(requiredCollection)
      .then(setCollectionInfo)
  }, [])

  return (
    <header>
      <Navigation />
      {collectionInfo && (
        <>
          <img
            className='w-full py-5 relative scale-150'
            alt={collectionInfo.name}
            src={collectionInfo.banner_image_url}
            width={100}
            height={100}
          />
          <div className='px-10 relative bottom-20'>
            <img
              className='w-[10%] rounded-lg'
              src={collectionInfo.image_url}
            />
            <h1 className='font-bold text-3xl'>{collectionInfo.name}</h1>
            <p className='max-w-[50%]'>{collectionInfo.description}</p>
          </div>
        </>
      )
      }
    </header>
  )
}

export default Header