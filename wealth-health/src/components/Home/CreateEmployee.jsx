import React, {useState} from "react";
import Input from '../GenericComponents/Input'
import Form from "../GenericComponents/Form";
import GenericDatePicker from "../GenericComponents/DatePicker";
import SelectInput from "../GenericComponents/SelectInput";
import {states} from '../../dataMocked/states'
import {departments} from '../../dataMocked/departments'
import { useDispatch, useSelector } from "react-redux";
import {createEmployee} from "../../redux/features/employee"
import Modal from "at-modal-package/src/components/Modal";

function CreateEmployee () {

    //redux
    const dispatch = useDispatch()
    let newIndex = useSelector((state)=> state.employee.length)
    // states
    const [postIsReady, setPostIsReady] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [startDate, setStartDate] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [stateLocation, setStateLocation] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [department, setDepartment] = useState(''); 

    //state for the modal 
    const [isDisplayed, setModalDisplay] = useState(false)
    // final employee object to send to the backend 

    const [finaleEmployeeObject, setFinaleEmployeeObject] = useState();

    // handle change functions 

    function handleChangeValue (e, stateToChange) {
        stateToChange(e.target.value)
    }
    function handleChangeDate (date, stateToChange) {
        stateToChange(date.toLocaleDateString("fr"))
    }
 
    // submit 

    function handleSubmit (e) {
        e.preventDefault()
        setModalDisplay(true)
        if (firstName !== '' && lastName !== '' && birthDate !== '' && startDate !== '' && street !== '' && city !== '' && zipCode !== '' && department !== '' && stateLocation !== '') {
            const createdEmployee = {
                id : newIndex+=2,
                firstName : firstName,
                lastName : lastName,
                dateOfBirth : birthDate, 
                startDate : startDate,
                street : street,
                city : city,
                zipCode : zipCode,
                state : stateLocation, 
                department : department
            }
            console.log(createdEmployee)
            dispatch(createEmployee(createdEmployee))

            

        } else {
            setPostIsReady(false)
        }
    }


    return (
        <div className="createEmployee">
                <Form onSubmit={handleSubmit}>
                    <Input 
                    htmlfor='firstname' 
                    onChange={(e) => handleChangeValue(e, setFirstName)}
                    type='text'
                    labelText='First Name' 
                    name='firstname' 
                    id='firstname' 
                    errorText='Please enter a valid firstname'
                    validation="([A-Z][a-zA-Z])"
                    />
                    <Input 
                    htmlfor='lastname' 
                    onChange={(e) => handleChangeValue(e, setLastName)} 
                    type='text' 
                    labelText='Last Name'
                    name='lastname' 
                    id='lastname' 
                    errorText='Please enter a valid lastname'
                    validation="([A-Z][a-zA-Z])"
                    />
                    <GenericDatePicker
                    id="dateOfBirth"
                    onChange={(date) => handleChangeDate(date, setBirthDate)}
                    className='dateOfBirth'
                    htmlFor="dateOfBirth"
                    label="Date of birth"
                    />
                    <GenericDatePicker 
                    id="startDate"  
                    onChange={(date) => handleChangeDate(date, setStartDate)} 
                    className='startDate' 
                    htmlFor="startDate" 
                    label="Start date"
                    />
                    <div className="adressContainer">
                        <h2>Address</h2>
                        <Input 
                        htmlfor='street' 
                        onChange={(e) => handleChangeValue(e, setStreet)} 
                        type='text' 
                        labelText='Street' 
                        name='street' 
                        id='street'
                        validation="([0-9]*[a-zA-Z])"
                        errorText='Please enter a valid street' 
                        />
                        <Input 
                        htmlfor='city' 
                        onChange={(e) => handleChangeValue(e, setCity)} 
                        type='text' 
                        labelText='City' 
                        name='city' 
                        id='city' 
                        validation="([a-zA-Z])"
                        errorText='Please enter a valid city' 
                        />
                        <SelectInput 
                        htmlFor="state"  
                        onChange={(e) => handleChangeValue(e, setStateLocation)} 
                        labelText="State" 
                        optionList={states} 
                        subject='state' 
                        id="stateSelect"
                        />
                        <Input 
                        htmlfor='zipCode' 
                        onChange={(e) => handleChangeValue(e, setZipCode)} 
                        type='text' 
                        labelText='Zip Code' 
                        name='zipCode' 
                        id='zipCode' 
                        validation='(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)'
                        errorText='Please enter a valid zip Code' 
                        />
                    </div>
                    <SelectInput 
                    htmlFor="department" 
                    onChange={(e) => handleChangeValue(e, setDepartment)} 
                    labelText="Department" 
                    optionList={departments} 
                    subject='department' 
                    id="departmentSelect"
                    />
                    <span className="divider"></span>
                {!postIsReady ? (<p className="error-message">Please complete all information</p>) : null}
                </Form>
                {isDisplayed ? (<Modal setModalState={setModalDisplay} title='je suis la modale'><p>je suis la modale </p></Modal>) : null}
            </div>
    )
}
export default CreateEmployee