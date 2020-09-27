/// <reference types="cypress" />
import { add } from './calc'

describe('examples', () => {
  context('code coverage', () => {
    it('add', () => {
      expect(add(3, 4)).to.equal(7)
    })
  })
})
