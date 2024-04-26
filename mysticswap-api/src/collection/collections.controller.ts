import { Controller, Get, Param } from '@nestjs/common';
import { CollectionsService } from './collections.service';

@Controller('collection')
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionsService) { }

  @Get('/:collection')
  async getCollection(@Param('collection') collection: string) {
    const response = await this.collectionsService.getCollection(collection);
    if (!response.ok) throw new Error(`Error getting collection ${collection}`)
    return response.json();
  }

  @Get('/:collection/stats')
  async getCollectionStats(@Param('collection') collection: string) {
    const response = await this.collectionsService.getCollectionStats(collection);
    if (!response.ok) throw new Error(`Error getting stats for collection ${collection}`)
    return response.json();
  }

  @Get('/:collection/nfts')
  async getCollectionNfts(@Param('collection') collection: string) {
    const response = await this.collectionsService.getCollectionNfts(collection);
    if (!response.ok) throw new Error(`Error getting NFTs for collection ${collection}`)
    return response.json();
  }
}
