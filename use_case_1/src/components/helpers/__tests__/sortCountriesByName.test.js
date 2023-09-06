import { sortCountriesByName } from '../helpers';

describe('sortCountriesByName', () => {
    it('should sort countries in ascending order', () => {
        const countries = [
            { name: { common: 'Canada' } },
            { name: { common: 'United States' } },
            { name: { common: 'Mexico' } },
        ];

        const sortDirection = 'ascend';

        const sortedCountries = sortCountriesByName(sortDirection, countries);

        expect(sortedCountries[0].name.common).toBe('Canada');
        expect(sortedCountries[2].name.common).toBe('United States');
    });

    it('should sort countries in descending order', () => {
        const countries = [
            { name: { common: 'Canada' } },
            { name: { common: 'United States' } },
            { name: { common: 'Mexico' } },
        ];

        const sortDirection = 'descend';

        const sortedCountries = sortCountriesByName(sortDirection, countries);

        expect(sortedCountries[0].name.common).toBe('United States');
        expect(sortedCountries[2].name.common).toBe('Canada');
    });

    it('should handle default sorting', () => {
        const countries = [
            { name: { common: 'Canada' } },
            { name: { common: 'United States' } },
            { name: { common: 'Mexico' } },
        ];

        const sortDirection = 'unknown';

        const sortedCountries = sortCountriesByName(sortDirection, countries);

        expect(sortedCountries[0].name.common).toBe('Canada');
        expect(sortedCountries[2].name.common).toBe('United States');
    });

});
