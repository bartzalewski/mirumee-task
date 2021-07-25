import { render } from '@testing-library/react'

import BoxMovie from './BoxMovie'

describe('<BoxMovie />', () => {
  it('renders without crashing', () => {
    const wrapper = render(<BoxMovie />)

    expect(wrapper).toBeTruthy()
  })
})
