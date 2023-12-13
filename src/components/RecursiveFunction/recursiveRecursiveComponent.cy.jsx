import React from 'react'
import { RecursiveComponent } from './recursive'

describe('test first', () => {
  it('renders', () => {
    const sampleData = {
      key1: "value 1",
      key2: {
        innerKey1: "hello i'm inner 1!",
        innerKey2: "hello i'm inner 2!"
      },
      key3: "value 3"
    };
    cy.mount(<RecursiveComponent data={sampleData} />);
    cy.get('[data-testid="list-element-1"]').should('exist')
    .invoke('text').should('include', 'hello');
  })

  
})
