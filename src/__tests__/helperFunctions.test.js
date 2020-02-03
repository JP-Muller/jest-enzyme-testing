import React from 'react'
import {getSum, getWeatherIcon} from '../helperFunctions'

describe('Helper Functions', () => {
    
    it('Correctly calculates 3 + 7', () => {
        expect(getSum(3,7)).toEqual(10)
    })

    it('Returns clear sky icon', () => {
        expect(getWeatherIcon('Clear Sky')).toEqual(<i className="far fa-sun" title="Clear Skies" />)
    })
    
})