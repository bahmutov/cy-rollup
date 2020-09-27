/// <reference types="cypress" />
import { sub } from './calc'

describe('examples', () => {
  context('code coverage', () => {
    it('sub', () => {
      expect(sub(3, 4)).to.equal(-1)
    })
  })
})
