import { render } from '@testing-library/react'

import Tags from './Tags'

describe('<Tags />', () => {
  it('renders without crashing', () => {
    const wrapper = render(<Tags />)

    expect(wrapper).toBeTruthy()
  })
})
