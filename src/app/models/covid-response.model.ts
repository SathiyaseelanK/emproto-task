export interface CovidResponse {
    updated: number;
    cases: number;
    todayCases: number;
    deaths: number;
    todayDeaths: number;
    recovered: number;
    todayRecovered: number;
    active: number;
    critical: number;
    casesPerOneMillion: number;
    deathsPerOneMillion: number;
    tests: number;
    testsPerOneMillion: number;
    population: number;
    continent: string;
    activePerOneMillion: number;
    recoveredPerOneMillion: number;
    criticalPerOneMillion: number;
}

export interface CountryInfo {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
}


export interface Continents extends CovidResponse {
    countries: string[];
}

export interface Countries extends CovidResponse {
    countryInfo: CountryInfo;
    country: string;
}

export enum CountCards {
    Confirmed = 1,
    Death = 2,
    Recovered = 3
}

export interface HistoricalData {
    cases: any;
    deaths: any;
    recovered:any;
}

export interface LastDaysHistory {
    country: 'string';
    province: 'string';
    timeline: HistoricalData
}