import React from 'react'
import {shallow, mount, render} from 'enzyme'
import toJSON from 'enzyme-to-json'
import HooksCounter from '../Components/HooksCounter/HooksCounter'

const setUp = () => {
    const wrapper = shallow(<HooksCounter />)
    return wrapper
}

describe('<HooksCounter />', () => {
    it('Should render without error', () => {
        const wrapper = setUp()
        expect(wrapper).not.toBeNull()
    })

    it('Should render the decrement button', () => {
        const wrapper = setUp()
        const decrementButton = wrapper.find('.fa-minus-square')
        expect((decrementButton).exists()).toBeTruthy()
    })

    it('Should render the increment button', () => {
        const wrapper = setUp()
        const decrementButton = wrapper.find('.fa-plus-square')
        expect((decrementButton).exists()).toBeTruthy()
    })

    it('Does not show count amount on initial render', () => {
        const wrapper = render(<HooksCounter />)
        expect(wrapper.find('h1').text()).toEqual('')

    })

    it('Shows proper count value on mount (Lifecycle check)', () => {
        const wrapper = mount(<HooksCounter />)
        expect(wrapper.find('h1').text()).toEqual('0')
    })

    it('Increments count amount correctly', () => {
        const wrapper = mount(<HooksCounter />)
        wrapper.find('.fa-plus-square').simulate('click')
        expect(wrapper.find('h1').text()).toEqual('1')
    })

    it('Decrements count amount correctly', () => {
        const wrapper = mount(<HooksCounter />)
        wrapper.find('.fa-minus-square').simulate('click')
        wrapper.find('.fa-minus-square').simulate('click')
        wrapper.find('.fa-minus-square').simulate('click')
        expect(wrapper.find('h1').text()).toEqual('-3')
    })
})
