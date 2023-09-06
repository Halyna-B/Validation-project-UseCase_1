
import { filterCountriesByName } from '../helpers';

describe('filterCountriesByName', () => {
    it('should filter countries by name', () => {
        const countries = [
            { name: { common: 'Canada' } },
            { name: { common: 'United States' } },
            { name: { common: 'Mexico' } },
        ];

        const searchString = 'United';

        const filteredCountries = filterCountriesByName(searchString, countries);

        expect(filteredCountries).toHaveLength(1);
        expect(filteredCountries[0].name.common).toBe('United States');
    });

    it('should handle case-insensitive search', () => {
        const countries = [
            { name: { common: 'Canada' } },
            { name: { common: 'United States' } },
            { name: { common: 'Mexico' } },
        ];

        const searchString = 'united';

        const filteredCountries = filterCountriesByName(searchString, countries);

        expect(filteredCountries).toHaveLength(1);
        expect(filteredCountries[0].name.common).toBe('United States');
    });

});
