import { Injectable } from '@nestjs/common';
import { baseCollectionURL, baseNftnURL, getOptions } from 'src/config';


@Injectable()
export class CollectionsService {

  getCollection(collection: string) {
    return fetch(`${baseCollectionURL}/${collection}`, getOptions('GET'))
  }

  getCollectionStats(collection: string) {
    return fetch(`${baseCollectionURL}/${collection}/stats`, getOptions('GET'))
  }

  getCollectionNfts(collection: string) {
    return fetch(`${baseNftnURL}/${collection}/nfts`, getOptions('GET'))
  }
}
