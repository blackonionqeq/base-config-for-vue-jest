import { Config } from '@jest/types'

export default {
  moduleFileExtensions: [
    'js',
    'ts',
    'vue',
    'tsx',
    'jsx',
  ],
  transform: {
    "\\.[jt]s$": 'babel-jest',
    ".*\\.(vue)$": 'vue-jest',
    ".*\\.[jt]sx$": 'ts-jest',
  },
  globals: {
    "vue-jest": {
      "tsConfig": "tsconfig.json"
    },
    "ts-jest": {
      "babelConfig": "babel.config.json"
    }
  },
} as Config.InitialOptions