import React from 'react'
import {render, cleanup, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// const CreateGameDialog = require('../../pages/CreateGameDialog.js')
import CreateGameDialog from '../../pages/CreateGameDialog.js'

afterEach(cleanup)

test('submit create a game dialog form', () =>{
    const handleSubmit = jest.fn()
    const handleClose = jest.fn()
    const handleShow = jest.fn()

    const {getByLabelText,getByText,getByDisplayValue} = render(
        <CreateGameDialog
          createGame={handleSubmit}
          closeDialog={handleClose}
          showDialog={handleShow}
        />,
    )
    
    getByDisplayValue('Standard').value="Standard"
    getByLabelText("Minutes per side: 5").value=5
    // click submit
    getByText('BLACK').click()
    getByText('WHITE').click()

    expect(handleSubmit).toHaveBeenCalledTimes(2)
    // expect(handleSubmit).toHaveBeenCalledWith({
    //   variant: 1,
    // })

})