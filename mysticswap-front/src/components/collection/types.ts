export type CollectionNftsAPIRes = {
    nfts: Nft[];
    next: string;
}

export type Nft = {
    identifier: string;
    collection: Collection;
    contract: Contract;
    token_standard: TokenStandard;
    name: string;
    description: Description;
    image_url: string;
    metadata_url: string;
    opensea_url: string;
    updated_at: Date;
    is_disabled: boolean;
    is_nsfw: boolean;
}

export enum Collection {
    MysticalWizards = "mystical-wizards",
}

export enum Contract {
    The0X74Cb5611E89078B2E5Cb638A873Cf7Bddc588659 = "0x74cb5611e89078b2e5cb638a873cf7bddc588659",
}

export enum Description {
    NFTCollectionOf1234UniquelyGeneratedWizards = "NFT collection of 1,234 uniquely generated wizards",
}

export enum TokenStandard {
    Erc721 = "erc721",
}
