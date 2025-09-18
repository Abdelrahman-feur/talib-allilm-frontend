import countries from "world-countries";

export const countryList = countries.map((c) => ({
  code: c.cca2,
  name: c.name.common,
}));
countryList.sort((a, b) => a.name.localeCompare(b.name));
