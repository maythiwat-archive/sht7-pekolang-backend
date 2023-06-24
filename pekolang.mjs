import { encode as morse_encode, decode as morse_decode } from './morse.mjs'

function to16(str) {
  return str
    .split('')
    .map(v => v.charCodeAt(0).toString(16))
    .join(' ')
}

function from16(str) {
  return str
    .split(' ')
    .map(v => String.fromCharCode(parseInt(v, 16)))
    .join('')
}

function toPeko(str) {
  return str.replace(/\./g, 'ぺ').replace(/\-/g, 'こ')
}

function fromPeko(str) {
  return str.replace(/ぺ/g, '.').replace(/こ/g, '-')
}

export function encode(str) {
  // return toPeko(morse_encode(to16(str)))
  return toPeko(morse_encode(str))
}

export function decode(str) {
  // return from16(morse_decode(fromPeko(str)))
  return morse_decode(fromPeko(str))
}
