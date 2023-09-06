import { paginateCountriesByCount } from '../helpers';

describe('paginateCountriesByCount', () => {
    it('should paginate countries by count', () => {
        const countries = [
            { name: 'Country 1' },
            { name: 'Country 2' },
            { name: 'Country 3' },
        ];

        const limit = 2;

        const paginatedCountries = paginateCountriesByCount(limit, countries);

        expect(paginatedCountries).toHaveLength(2);
        expect(paginatedCountries[0].name).toBe('Country 1');
        expect(paginatedCountries[1].name).toBe('Country 2');
    });

    it('should handle limit <= 0', () => {
        const countries = [
            { name: 'Country 1' },
            { name: 'Country 2' },
            { name: 'Country 3' },
        ];

        const limit = 0;

        const paginatedCountries = paginateCountriesByCount(limit, countries);

        expect(paginatedCountries).toHaveLength(0);
    });

});
