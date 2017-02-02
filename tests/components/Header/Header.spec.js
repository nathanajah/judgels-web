import React from 'react'
import { Header } from 'components/Header/Header'
import { render } from 'enzyme'

describe('(Component) Header', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = render(<Header />)
  })

  it('Should render a logo', () => {
    const logo = _wrapper.find('img')
    expect(logo).to.exist
    expect(logo.attr('alt')).to.match(/Logo/)
  })
})
