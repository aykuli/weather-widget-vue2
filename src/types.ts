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
  state?: string
  country?: string
  latitude?: number
  longitude?: number
}
