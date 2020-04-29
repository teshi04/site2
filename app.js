import { MDCRipple } from '@material/ripple/index'

const selector = '.mdc-button, .content-card, .mdc-card__primary-action'
const ripples = [].map.call(document.querySelectorAll(selector), function (el) {
  return new MDCRipple(el)
})
