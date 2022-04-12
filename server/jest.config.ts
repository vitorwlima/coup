export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  preset: 'ts-jest',
  modulePathIgnorePatterns: ['<rootDir>/build/'],
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  }
}
