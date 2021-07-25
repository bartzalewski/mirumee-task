import { render } from '@testing-library/react'

import Loader from './Loader'

describe('<Loader />', () => {
  it('renders without crashing', () => {
    const wrapper = render(<Loader />)

    expect(wrapper).toBeTruthy()
  })
})
