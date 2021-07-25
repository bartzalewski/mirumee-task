import { render } from '@testing-library/react'

import Table from './Table'

describe('<Table />', () => {
  it('renders without crashing', () => {
    const wrapper = render(<Table />)

    expect(wrapper).toBeTruthy()
  })
})
