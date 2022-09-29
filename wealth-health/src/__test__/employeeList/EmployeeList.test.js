import EmployeesList from "../../Pages/EmployeesList";
import { render, waitFor, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'

describe('when I go to the Employee List page', ()  => {
    test('it should be loaded whitout crash', async () => {
        render (
            <Provider store={store}>
                 <EmployeesList />
            </Provider>
        )
        expect(
            screen.getByRole('heading', {level: 1, text: 'Current Employees'})
        ).toBeTruthy()
        
    })
})