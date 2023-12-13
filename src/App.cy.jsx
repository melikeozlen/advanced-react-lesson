import React from 'react'
import App from './App'

describe('App test', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)
    cy.get('[data-testid="list-element-1"]').should('exist')
    .invoke('text').should('include', 'ss');
  })
})