export interface ResponsiveImage {
  largeUrl: string
  mediumUrl: string
}

export interface Rates {
  displayPeriod: string
  displayPrice: number
}

export interface DisplayableRates {
  displayCurrency: string
  weekdays: Rates
  holiday: Rates
}

export interface HighlightedRoomAmenity {
  type: string
  name: string
}

export interface RoomFeatures {
  roomSquare: number
  bathroomNumber: number
  beddingOption: string
  smoking: boolean
  guestLimit: number
  displayableRates: DisplayableRates
  highlightedRoomAmenities: HighlightedRoomAmenity[]
}

export interface Room {
  images: ResponsiveImage[]
  roomFeatures: RoomFeatures
  type: string
  roomFacilities: string
  displayName: string
  displayNameEN: string
}
