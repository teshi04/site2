import { MDCRipple } from '@material/ripple/index'

const selector =
  '.mdc-button, .mdc-icon-button, .content-card, .mdc-card__primary-action, .mdc-fab, .link-icon, .mdc-list-item'
const ripples = [].map.call(document.querySelectorAll(selector), function (el) {
  return new MDCRipple(el)
})
