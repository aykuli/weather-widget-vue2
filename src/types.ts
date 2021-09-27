export interface WeatherData {
  city?: string
  temperature: number
  feelsLike: number
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
