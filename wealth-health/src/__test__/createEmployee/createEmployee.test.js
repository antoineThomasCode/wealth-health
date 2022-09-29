import { render, waitFor, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import Home from '../../Pages/Home';

import { store } from '../../redux/store'

describe('Create Employee component ', () => {
    test('test create EMployee', () => {
        const result = 5
        expect(result).toEqual(5)
    })
})
describe('Create Employee', () => {
    test('Should render without crash', async () => {
        render(
            <Provider store={store}>
                 <Home/>
            </Provider>
        );
        expect(
            screen.getByRole('heading', {level: 1, text: 'Create Employee'})
        ).toBeTruthy()
        expect(
            screen.getByRole('main-form')
        ).toBeTruthy()
    })
    
})
describe('Should be display in create employee form',  () => {
    test('it should have inputs', async () => {
        render(
            <Provider store={store}>
                 <Home/>
            </Provider>
        );

        expect(
            screen.getByTestId('firstname')
        ).toBeTruthy()
        expect(
            screen.getByTestId('lastname')
        ).toBeTruthy()
        expect(
            screen.getByTestId('street')
        ).toBeTruthy()
        expect(
            screen.getByTestId('city')
        ).toBeTruthy()
        expect(
            screen.getByTestId('zipcode')
        ).toBeTruthy()
    })
})

