export const filterCountriesByName = (searchString, countries) => {

    const searchValueToLowerCase = searchString.toLowerCase();

    const filteredCountries = countries.filter((country) => {
        const countryNameToLowerCase = country.name.common.toLowerCase();

        return countryNameToLowerCase.includes(searchValueToLowerCase);
    });

    return filteredCountries;
};

export const filterCountriesByPopulation = (maxPopulationMillions, countries) => {

    const filteredCountries = countries.filter((country) => {
        const populationMillions = country.population / 1e6;

        return populationMillions < maxPopulationMillions;
    });

    return filteredCountries;
};

export const sortCountriesByName = (sortDirection, countries) => {
    const sortedCountries = [...countries];

    sortedCountries.sort(( countryA, countryB ) => {
        const nameOfCountryA  = countryA.name.common.toLowerCase();
        const nameOfCountryB  = countryB.name.common.toLowerCase();

        if (sortDirection === 'ascend') {
            return nameOfCountryA.localeCompare(nameOfCountryB );
        } else if (sortDirection === 'descend') {
            return nameOfCountryB.localeCompare(nameOfCountryA );
        } else {
            return nameOfCountryA.localeCompare(nameOfCountryB );
        }
    });

    return sortedCountries;
};