import { render } from '@testing-library/react'

import Box from './Box'

describe('<Box />', () => {
  it('renders without crashing', () => {
    const wrapper = render(<Box children={} />)

    expect(wrapper).toBeTruthy()
  })
})
