import { render } from '@testing-library/react'

import BoxList from './BoxList'

describe('<BoxList />', () => {
  it('renders without crashing', () => {
    const wrapper = render(<BoxList />)

    expect(wrapper).toBeTruthy()
  })
})
