import { render } from '@testing-library/react'

import AddMovie from './AddMovie'

describe('<AddMovie />', () => {
  it('renders without crashing', () => {
    const wrapper = render(<AddMovie />)

    expect(wrapper).toBeTruthy()
  })
})
