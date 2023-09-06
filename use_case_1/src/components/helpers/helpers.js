export const filterCountriesByName = (searchString, countries) => {

    const searchValueToLowerCase = searchString.toLowerCase();

    const filteredCountries = countries.filter((country) => {
        const countryNameToLowerCase = country.name.common.toLowerCase();

        return countryNameToLowerCase.includes(searchValueToLowerCase);
    });

    return filteredCountries;
};
