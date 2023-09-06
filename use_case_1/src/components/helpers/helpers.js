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