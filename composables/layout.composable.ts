export const useIsNavbarFloat = () => {
  return useState('isNavbarFloat', () => false)
}

export const useBgColor = () => {
  return useState('bgColor', () => 'white')
}

export const useIsMobileNavOpen = () => {
  return useState('isMobileNavOpen', () => false)
}