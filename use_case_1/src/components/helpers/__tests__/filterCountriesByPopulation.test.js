import { filterCountriesByPopulation } from '../helpers';

describe('filterCountriesByPopulation', () => {
    it('should filter countries by population', () => {
        const countries = [
            { population: 380 },
            { population: 328 },
            { population: 126 },
        ];

        const maxPopulationMillions = 200;

        const filteredCountries = filterCountriesByPopulation(maxPopulationMillions, countries);

        expect(filteredCountries).toHaveLength(1);
        expect(filteredCountries[0].population).toBe(126);
    });

});
