import { browserHistory } from 'react-router'
import decode from 'jwt-decode'

export function isAuthenticated() {
        const token = localStorage.getItem('token')
        if (token) {
            return !isTokenExpired(token)
        } else {
            return false
        }
    }
export function finishAuthentication(token) {
        localStorage.setItem('token', token)
    }

export function getToken() {
        return localStorage.getItem('token')
    }

export function logout() {
        localStorage.removeItem('token')
    }

export function getTokenExpirationDate(token) {
    const decoded = decode(token)
    if(!decoded.exp) {
        return null
    }

    const date = new Date(0) // The 0 here is the key, which sets the date to the epoch
    date.setUTCSeconds(decoded.exp)
    return date
}

export function isTokenExpired(token) {
    const date = getTokenExpirationDate(token)
    const offsetSeconds = 0
    if (date === null) {
        return false
    }
    return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)))
}
