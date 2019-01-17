import 'purecss'
import Vue from 'vue'

import component from './component'
import './main.css'

new Vue()

console.log('hello world')
console.log('hello world')
console.log('hello world')

console.log('hello world')

document.body.appendChild(component())

const out = {
  chunkFilename: '[name].[chunkhash:4].js',
  filename:      '[name].[chunkhash:4].js'
}

console.log(out)
