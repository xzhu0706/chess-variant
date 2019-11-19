import React from 'react'
import {render, cleanup, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CreateGameDialog from '../../pages/CreateGameDialog'

afterEach(cleanup)

test('desc', () =>{
    const handleSubmit = jest.fn()

    const {getByLabelText,getByText} = render(
        <CreateGameDialog
          onSubmit={handleSubmit}
        />,
    )
    
    // Open dialog box
    fireEvent(
        getByText('Create A Game'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,}
        )
      )
    
    // Select Variant
    getByLabelText('Variant').value = 1

    // click submit
    getByText('Submit').click()

    expect(handleSubmit).toHaveBeenCalledTimes(1)
    // expect(handleSubmit).toHaveBeenCalledWith({
    //   variant: 1,
    // })

})