import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render } from '@testing-library/react-native'
import Login from '../../src/pages/Login'
import Home from '../../src/pages/Home'
import AppNavigator from '../../src/routes'


const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
    const actual = jest.requireActual("@react-navigation/native");
    return {
        ...actual,
        useNavigation: () => ({
            navigate: mockedNavigate,
        }),
    };
});


test('if screen is changed', async () => {
    const component = (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    );

    const { getByTestId, getByText, toJSON } = render(<Login />)
    const nameText = 'Bruno Simplicio'

    const input = getByTestId('input')
    fireEvent.changeText(input, nameText)

    const button = getByText('Fake Login')
    fireEvent.press(button)

    const { findByText } = render(<Home />)

    const text = await findByText("You just fake logged in")


    expect(text.props.children).toBe("You just fake logged in")
})