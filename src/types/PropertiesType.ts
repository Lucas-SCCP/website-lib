export interface PropertiesType {
  name?: string
  title?: string
  message?: string
  type?: string
  startHidden?: boolean
  size?: {
    xs?: {
      span?: number
      offset?: number
    }
    sm?: {
      span?: number
      offset?: number
    }
    md?: {
      span?: number
      offset?: number
    }
    lg?: {
      span?: number
      offset?: number
    }
  }
}
