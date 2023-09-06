import { useState} from 'react';
import { fetchApiData } from '../../api';

import { InputField } from '../InputField';
import {DataTable} from '../DataTable';

import {
    filterCountriesByName,
    filterCountriesByPopulation,
    sortCountriesByName,
    paginateCountriesByCount
} from '../helpers';

import './UserForm.css';

export const UserForm = () => {
    const [inputValue, setInputValue] = useState({
        countryName: '',
        population: '',
        sortBy: '',
        limitOfRecords: '',
    });
    const [validationMessage, setValidationMessage] = useState('');

    const [data, setData] = useState([]);

    const { countryName, population, sortBy, limitOfRecords } = inputValue;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputValue((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validateSortInput = () => {
        const input = document.getElementById('orderInput').value.trim().toLowerCase();

        const regexPattern = /^(ascend|descend)$/;

        if (input && !regexPattern.test(input)) {
            setValidationMessage("Input is not valid. Please enter 'ascend' or 'descend'.");
            return false;
        } else {
            setValidationMessage('');
            return true;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const isValidSortingInput =  validateSortInput();
        if (!isValidSortingInput) return;

        const apiData = await fetchApiData();

        const filteredDataByCountryName = countryName.length ? filterCountriesByName(countryName, apiData) : apiData;

        const filteredDataByByPopulation = population ? filterCountriesByPopulation(population, filteredDataByCountryName) : filteredDataByCountryName;

        const sortedData = sortBy ? sortCountriesByName(sortBy,filteredDataByByPopulation) : filteredDataByByPopulation;

        const sortedDataByLimitCountriesCount = limitOfRecords ? paginateCountriesByCount(limitOfRecords, sortedData) : sortedData;

        setData(sortedDataByLimitCountriesCount)
    };

    return (
        <div className='container'>
            <div className='form-container' onSubmit={handleSubmit}>
                <form className='user-form' >
                    <InputField
                    id='countryNameInput'
                    type='text'
                    value={countryName}
                    placeholder='Enter country name or common name'
                    label='Country Name'
                    name='countryName'
                    onChange={handleChange}
                />
                    <InputField
                    id='populationCountInput'
                    type='number'
                    value={population}
                    placeholder='Enter maximum population (in millions)'
                    label='Filter by Maximum Population:'
                    name='population'
                    onChange={handleChange}
                />
                    <InputField
                    id='orderInput'
                    type='text'
                    value={sortBy}
                    placeholder='Enter attribute to sort by (ascend or descend)'
                    label='Sort Order:'
                    name='sortBy'
                    onChange={handleChange}
                    validationMessage={validationMessage}
                />
                    <InputField
                    id='limitOfRecordInput'
                    type='number'
                    value={limitOfRecords}
                    placeholder='Enter the maximum number of records'
                    label='Maximum Number of Records:'
                    name='limitOfRecords'
                    onChange={handleChange}
                />
                    <button type='submit' className='submit-button'>
                    Submit
                    </button>
                </form>
            </div>
            {data.length > 1 && (
                <DataTable data={data} />
            )}
        </div>
    );
};