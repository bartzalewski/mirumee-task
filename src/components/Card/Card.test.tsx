import { render } from '@testing-library/react'

import Card from './Card'

describe('<Card />', () => {
  it('renders without crashing', () => {
    const wrapper = render(<Card />)

    expect(wrapper).toBeTruthy()
  })
})
