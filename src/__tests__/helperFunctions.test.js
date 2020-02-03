import React from 'react'
import * as Helper from '../helperFunctions'

describe('Helper Functions', () => {
    
    it('Correctly calculates 3 + 7', () => {
        expect(Helper.getSum(3,7)).toEqual(10)
    })

    it('Returns clear sky icon', () => {
        expect(Helper.getWeatherIcon('Clear Sky')).toEqual(<i className="far fa-sun" title="Clear Skies" />)
    })

    it('Receives API Dummy Data', () => {
        Helper.getPlaceholderData().then(data => {
            expect(data[0].title).toBe('delectus aut autem')
        })
    })
    
})