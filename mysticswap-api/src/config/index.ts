export const baseAccountsURL = 'https://api.opensea.io/api/v2/accounts'
export const baseCollectionURL = 'https://api.opensea.io/api/v2/collections'
export const baseNftnURL = 'https://api.opensea.io/api/v2/collection'

interface ApiOptions {
  method: string
  headers: {
    "X-API-KEY": string
  }
}

export const getOptions = (method: string): ApiOptions => ({
  method,
  headers: {
    "X-API-KEY": process.env.DEV_API_KEY,
  }
})

