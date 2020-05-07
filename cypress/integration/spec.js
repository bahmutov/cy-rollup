/// <reference types="cypress" />
import { add } from './calc'

describe('Rollup preprocessor', () => {
  it('works', () => {
    expect(2).to.equal(2)
    expect(add(3, 4)).to.equal(7)
  })
})
