declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      src?: string
      alt?: string
      'auto-rotate'?: boolean | string
      'camera-controls'?: boolean | string
      ar?: boolean | string
      'ar-modes'?: string
      'ios-src'?: string
      poster?: string
      'environment-image'?: string
      exposure?: string
      'shadow-intensity'?: string
      'shadow-softness'?: string
      'tone-mapping'?: string
      style?: React.CSSProperties
    }, HTMLElement>
  }
}
