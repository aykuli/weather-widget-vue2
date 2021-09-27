export interface WeatherData {
  city?: string
  temperature: string
  feelsLike: string
  humidity: number
  windSpeed: number
  pressure: number
  icon?: string
}

export interface WidgetGeoLocation {
  city?: string
  stateCode?: string
  countryCode?: string
  latitude?: number
  longitude?: number
}

export interface WidgetConfig {
  city?: string
  latitude?: number
  longitude?: number
}
