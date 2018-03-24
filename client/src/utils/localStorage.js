import docCookies from './cookies'

export function storageAvailable () {
  try {
    // Must use var since old Safari doesn't know const
    // eslint-disable-next-line
    var storage = window['localStorage'],
      x = '__storage_test__'
    storage.setItem(x, x)
    storage.removeItem(x)
    return true
  } catch (e) {
    return (
      e instanceof DOMException &&
      (e.code === 22 ||
        e.code === 1014 ||
        e.name === 'QuotaExceededError' ||
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      storage.length !== 0
    )
  }
}

export function localStorageHelperSet (name, value) {
  if (storageAvailable()) {
    localStorage.setItem(name, value)
  } else {
    const ONE_WEEK = 604800
    docCookies.setItem(name, value, ONE_WEEK)
  }
}

export function localStorageHelperGet (name) {
  if (storageAvailable()) {
    return localStorage.getItem(name)
  } else {
    return docCookies.getItem(name)
  }
}

export function localStorageHelperRemove (name) {
  if (storageAvailable()) {
    return localStorage.removeItem(name)
  } else {
    return docCookies.removeItem(name)
  }
}
