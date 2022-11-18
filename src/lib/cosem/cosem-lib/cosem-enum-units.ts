

export interface CosemEnumUnit {
	enum: number,
	unit: string,
	quantity: string,
	unitName: string,
	siDefinition: string,
	comment: string
}
// Cosem Blue Book Edition 14 Chapter 4.3.2 Table 4
export const cosemEnumUnitMap = new Map<number, CosemEnumUnit>([
	[ 1, { enum: 1, unit: 'a', quantity: 'time', unitName: 'year ', siDefinition: '', comment: '' }],
	[ 2, { enum: 2, unit: 'mo', quantity: 'time', unitName: 'month ', siDefinition: '', comment: '' }],
	[ 3, { enum: 3, unit: 'wk', quantity: 'time', unitName: 'week', siDefinition: '7*24*60*60 s ', comment: '' }],
	[ 4, { enum: 4, unit: 'd', quantity: 'time', unitName: 'day', siDefinition: '24*60*60 s ', comment: '' }],
	[ 5, { enum: 5, unit: 'h', quantity: 'time', unitName: 'hour', siDefinition: '60*60 s ', comment: '' }],
	[ 6, { enum: 6, unit: 'min', quantity: 'time', unitName: 'minute', siDefinition: '60 s ', comment: '' }],
	[ 7, { enum: 7, unit: 's', quantity: 'time (t)', unitName: 'second', siDefinition: 's ', comment: '' }],
	[ 8, { enum: 8, unit: '°', quantity: '(phase) angle', unitName: 'degree', siDefinition: 'rad*180/π ', comment: '' }],
	[ 9, { enum: 9, unit: '°C', quantity: 'temperature (T)', unitName: 'degree-celsius', siDefinition: 'K-273.15 ', comment: '' }],
	[ 10, { enum: 10, unit: 'currency', quantity: '(local) currency ', unitName: '', siDefinition: '', comment: '' }],
	[ 11, { enum: 11, unit: 'm', quantity: 'length (l)', unitName: 'metre', siDefinition: 'm ', comment: '' }],
	[ 12, { enum: 12, unit: 'm/s', quantity: 'speed (v)', unitName: 'metre per second', siDefinition: 'ms-1 ', comment: '' }],
	[ 13, { enum: 13, unit: 'm3', quantity: 'volume (V) rV, meter constant or pulse value (volume) ', unitName: 'cubic metre', siDefinition: 'm3 ', comment: '' }],
	[ 14, { enum: 14, unit: 'm3', quantity: 'corrected volume a', unitName: 'cubic metre', siDefinition: 'm3 ', comment: '' }],
	[ 15, { enum: 15, unit: 'm3/h', quantity: 'volume flux', unitName: 'cubic metre per hour', siDefinition: 'm3s-1/(60*60) ', comment: '' }],
	[ 16, { enum: 16, unit: 'm3/h', quantity: 'corrected volume flux a', unitName: 'cubic metre per hour', siDefinition: 'm3s-1/(60*60) ', comment: '' }],
	[ 17, { enum: 17, unit: 'm3/d', quantity: 'volume flux', unitName: 'cubic metre per day', siDefinition: 'm3s-1/(24*60*60) ', comment: '' }],
	[ 18, { enum: 18, unit: 'm3/d', quantity: 'corrected volume flux a', unitName: 'cubic metre per day', siDefinition: 'm3s-1/(60*60) ', comment: '' }],
	[ 19, { enum: 19, unit: 'l', quantity: 'volume', unitName: 'litre', siDefinition: '10-3 m3 ', comment: '' }],
	[ 20, { enum: 20, unit: 'kg', quantity: 'mass (m)', unitName: 'kilogram ', siDefinition: '', comment: '' }],
	[ 21, { enum: 21, unit: 'N', quantity: 'force (F)', unitName: 'newton', siDefinition: 'N = kg.m.s-2 ', comment: '' }],
	[ 22, { enum: 22, unit: 'Nm', quantity: 'energy', unitName: 'newton meter', siDefinition: 'J = Nm = Ws ', comment: '' }],
	[ 23, { enum: 23, unit: 'Pa', quantity: 'pressure (p)', unitName: 'pascal', siDefinition: 'N/m2 ', comment: '' }],
	[ 24, { enum: 24, unit: 'bar', quantity: 'pressure (p)', unitName: 'bar', siDefinition: '105 Nm-2 ', comment: '' }],
	[ 25, { enum: 25, unit: 'J', quantity: 'energy', unitName: 'joule', siDefinition: 'J = Nm = Ws ', comment: '' }],
	[ 26, { enum: 26, unit: 'J/h', quantity: 'thermal power, rate of change', unitName: 'joule per hour', siDefinition: 'Js-1/(60*60) ', comment: '' }],
	[ 27, { enum: 27, unit: 'W', quantity: 'active power (P)', unitName: 'watt', siDefinition: 'W = Js-1 ', comment: '' }],
	[ 28, { enum: 28, unit: 'VA', quantity: 'apparent power (S)', unitName: 'volt-ampere ', siDefinition: '', comment: '' }],
	[ 29, { enum: 29, unit: 'var', quantity: 'reactive power (Q)', unitName: 'var ', siDefinition: '', comment: '' }],
	[ 30, { enum: 30, unit: 'Wh', quantity: 'active energy rW, active energy meter constant or pulse value', unitName: 'watt-hour', siDefinition: 'Ws*(60*60) ', comment: '' }],
	[ 31, { enum: 31, unit: 'VAh', quantity: 'apparent energy rS, apparent energy meter constant or pulse value', unitName: 'volt-ampere-hour', siDefinition: 'VAs*(60*60) ', comment: '' }],
	[ 32, { enum: 32, unit: 'varh', quantity: 'reactive energy rB, reactive energy meter constant or pulse value', unitName: 'var-hour', siDefinition: 'var s *(60*60s ', comment: '' }],
	[ 33, { enum: 33, unit: 'A', quantity: 'current (I)', unitName: 'ampere', siDefinition: 'A ', comment: '' }],
	[ 34, { enum: 34, unit: 'C', quantity: 'electrical charge (Q)', unitName: 'coulomb', siDefinition: 'C = As ', comment: '' }],
	[ 35, { enum: 35, unit: 'V', quantity: 'voltage (U)', unitName: 'volt', siDefinition: 'V ', comment: '' }],
	[ 36, { enum: 36, unit: 'V/m', quantity: 'electric field strength (E)', unitName: 'volt per metre', siDefinition: 'Vm-1 ', comment: '' }],
	[ 37, { enum: 37, unit: 'F', quantity: 'capacitance (C)', unitName: 'farad', siDefinition: 'CV-1 = AsV-1 ', comment: '' }],
	[ 38, { enum: 38, unit: 'Ω', quantity: 'resistance (R)', unitName: 'ohm', siDefinition: 'Ω = VA-1 ', comment: '' }],
	[ 39, { enum: 39, unit: 'Ωm2/m', quantity: 'resistivity (ρ)', unitName: 'm ', siDefinition: '', comment: '' }],
	[ 40, { enum: 40, unit: 'Wb', quantity: 'magnetic flux (Φ)', unitName: 'weber', siDefinition: 'Wb = Vs ', comment: '' }],
	[ 41, { enum: 41, unit: 'T', quantity: 'magnetic flux density (B)', unitName: 'tesla', siDefinition: 'Wbm-2 ', comment: '' }],
	[ 42, { enum: 42, unit: 'A/m', quantity: 'magnetic field strength (H)', unitName: 'ampere per metre', siDefinition: 'Am-1 ', comment: '' }],
	[ 43, { enum: 43, unit: 'H', quantity: 'inductance (L)', unitName: 'henry', siDefinition: 'H = WbA-1 ', comment: '' }],
	[ 44, { enum: 44, unit: 'Hz', quantity: 'frequency (f, ω)', unitName: 'hertz', siDefinition: 's-1 ', comment: '' }],
	[ 45, { enum: 45, unit: '1/(Wh)', quantity: 'RW, active energy meter constant or pulse value ', unitName: '', siDefinition: '', comment: '' }],
	[ 46, { enum: 46, unit: '1/(varh)', quantity: 'RB, reactive energy meter constant or pulse value ', unitName: '', siDefinition: '', comment: '' }],
	[ 47, { enum: 47, unit: '1/(VAh)', quantity: 'RS, apparent energy meter constant or pulse value ', unitName: '', siDefinition: '', comment: '' }],
	[ 48, { enum: 48, unit: 'V2h', quantity: 'volt-squared hour, rU2h, volt-squared hour meter constant or pulse value', unitName: 'volt-squared-hours', siDefinition: 'V2s-1 /(60*60) ', comment: '' }],
	[ 49, { enum: 49, unit: 'A2h', quantity: 'ampere-squared hour, rI2h, ampere-squared hour meter constant or pulse value ', unitName: 'ampere-squared hours', siDefinition: 'A2 s-1 /(60*60) ', comment: '' }],
	[ 50, { enum: 50, unit: 'kg/s', quantity: 'mass flux', unitName: 'kilogram per second', siDefinition: 'kg s-1 ', comment: '' }],
	[ 51, { enum: 51, unit: 'S, mho', quantity: 'conductance', unitName: 'siemens', siDefinition: 'Ω-1 ', comment: '' }],
	[ 52, { enum: 52, unit: 'K', quantity: 'temperature (T)', unitName: 'kelvin ', siDefinition: '', comment: '' }],
	[ 53, { enum: 53, unit: '1/(V2h)', quantity: 'RU2h, volt-squared hour meter constant or pulse value ', unitName: '', siDefinition: '', comment: '' }],
	[ 54, { enum: 54, unit: '1/(A2h)', quantity: 'RI2h, ampere-squared hour meter constant or pulse value ', unitName: '', siDefinition: '', comment: '' }],
	[ 55, { enum: 55, unit: '1/m3', quantity: 'RV, meter constant or pulse value (volume) ', unitName: '', siDefinition: '', comment: '' }],
	[ 56, { enum: 56, unit: 'percentage', quantity: '% ', unitName: '', siDefinition: '', comment: '' }],
	[ 57, { enum: 57, unit: 'Ah', quantity: 'ampere-hours', unitName: 'Ampere-hour ', siDefinition: '', comment: '' }],
	[ 60, { enum: 60, unit: 'Wh/m3', quantity: 'energy per volume', unitName: '3,6*103 J/m3 ', siDefinition: '', comment: '' }],
	[ 61, { enum: 61, unit: 'J/m3', quantity: 'calorific value, wobbe ', unitName: '', siDefinition: '', comment: '' }],
	[ 62, { enum: 62, unit: 'Mol %', quantity: 'molar fraction of gas composition', unitName: 'mole percent', siDefinition: '', comment: '' }],
	[ 63, { enum: 63, unit: 'g/m3', quantity: 'mass density, quantity of material', unitName: '', siDefinition: '', comment: '' }],
	[ 64, { enum: 64, unit: 'Pa s', quantity: 'dynamic viscosity', unitName: 'pascal second', siDefinition: '', comment: '' }],
	[ 65, { enum: 65, unit: 'J/kg ', quantity: 'specific energy NOTE The amount of energy per unit of mass of a substance ', unitName: 'Joule / kilogram', siDefinition: 'm2 . kg . s -2 / kg = m2 . s –2 ', comment: '' }],
	[ 66, { enum: 66, unit: 'g/cm²', quantity: 'pressure', unitName: 'gram per square centimeter', siDefinition: '98,066 5 Pa ', comment: '' }],
	[ 67, { enum: 67, unit: 'atm', quantity: 'pressure', unitName: 'atmosphere', siDefinition: '101,325*103 Pa ', comment: '' }],
	[ 70, { enum: 70, unit: 'dBm', quantity: 'signal strength, dB milliwatt (e.g. of GSM radio systems) ', unitName: '', siDefinition: '', comment: '' }],
	[ 71, { enum: 71, unit: 'dbµV', quantity: 'signal strength, dB microvolt ', unitName: '', siDefinition: '', comment: '' }],
	[ 72, { enum: 72, unit: 'dB', quantity: 'logarithmic unit that expresses the ratio between two values of a physical quantity ', unitName: '', siDefinition: '', comment: '' }],
	[ 128, { enum: 128, unit: 'in', quantity: 'length (l)', unitName: 'inch ', siDefinition: '', comment: '' }],
	[ 129, { enum: 129, unit: 'ft', quantity: 'length (l)', unitName: 'foot ', siDefinition: '', comment: '' }],
	[ 130, { enum: 130, unit: 'lb', quantity: 'mass (m)', unitName: 'pound ', siDefinition: '', comment: '' }],
	[ 131, { enum: 131, unit: '°F', quantity: 'temperature', unitName: 'degree Fahrenheit ', siDefinition: '', comment: '' }],
	[ 132, { enum: 132, unit: '°R', quantity: 'temperature', unitName: 'degree Rankine ', siDefinition: '', comment: '' }],
	[ 133, { enum: 133, unit: 'sq. in', quantity: 'area', unitName: 'square inch ', siDefinition: '', comment: '' }],
	[ 134, { enum: 134, unit: 'sq ft', quantity: 'area', unitName: 'square foot ', siDefinition: '', comment: '' }],
	[ 135, { enum: 135, unit: 'ac', quantity: 'area', unitName: 'acre ', siDefinition: '', comment: '' }],
	[ 136, { enum: 136, unit: 'cu in', quantity: 'volume', unitName: 'cubic inch ', siDefinition: '', comment: '' }],
	[ 137, { enum: 137, unit: 'cu ft', quantity: 'volume', unitName: 'cubic foot ', siDefinition: '', comment: '' }],
	[ 138, { enum: 138, unit: 'ac ft', quantity: 'volume', unitName: 'acre-foot ', siDefinition: '', comment: '' }],
	[ 139, { enum: 139, unit: 'gal (imp)', quantity: 'volume', unitName: 'gallon (imperial) ', siDefinition: '', comment: '' }],
	[ 140, { enum: 140, unit: 'gal (US)', quantity: 'volume', unitName: 'gallon (US) ', siDefinition: '', comment: '' }],
	[ 141, { enum: 141, unit: 'lbf', quantity: 'force', unitName: 'pound force ', siDefinition: '', comment: '' }],
	[ 142, { enum: 142, unit: 'psi', quantity: 'pressure (p)', unitName: 'Pound force per square inch ', siDefinition: '', comment: '' }],
	[ 143, { enum: 143, unit: 'lb/cu ft', quantity: 'density', unitName: 'pound per cubic foot ', siDefinition: '', comment: '' }],
	[ 144, { enum: 144, unit: 'lb/(ft .s)', quantity: 'dynamic viscosity', unitName: 'pound per (foot . second) ', siDefinition: '', comment: '' }],
	[ 145, { enum: 145, unit: 'sq ft/s', quantity: 'kinematic viscosity', unitName: 'square foot per second ', siDefinition: '', comment: '' }],
	[ 146, { enum: 146, unit: 'Btu', quantity: 'energy', unitName: 'British thermal unit ', siDefinition: '', comment: '' }],
	[ 147, { enum: 147, unit: 'thm(EC)', quantity: 'energy', unitName: 'Therm(EU) ', siDefinition: '', comment: '' }],
	[ 148, { enum: 148, unit: 'thm(US)', quantity: 'energy', unitName: 'Therm(US) ', siDefinition: '', comment: '' }],
	[ 149, { enum: 149, unit: 'Btu/lb', quantity: 'calorific value of mass, enthalpy', unitName: 'British thermal unit per pound ', siDefinition: '', comment: '' }],
	[ 150, { enum: 150, unit: 'Btu/cu ft', quantity: 'calorific value of volume, wobbe ', unitName: 'British thermal unit per cubic foot ', siDefinition: '', comment: '' }],
	[ 151, { enum: 151, unit: 'cu ft', quantity: 'volume (V) rv, meter constant or pulse value (volume)', unitName: 'cubic feet ', siDefinition: '', comment: '' }],
	[ 152, { enum: 152, unit: 'ft/s', quantity: 'speed (v)', unitName: 'foot per second ', siDefinition: '', comment: '' }],
	[ 153, { enum: 153, unit: 'cu ft/s', quantity: 'volume flux', unitName: 'cubic foot per second ', siDefinition: '', comment: '' }],
	[ 154, { enum: 154, unit: 'cu ft/min', quantity: 'volume flux', unitName: 'cubic foot per min ', siDefinition: '', comment: '' }],
	[ 155, { enum: 155, unit: 'cu ft/h', quantity: 'volume flux', unitName: 'cubic foot per hour ', siDefinition: '', comment: '' }],
	[ 156, { enum: 156, unit: 'cu ft/d', quantity: 'volume flux', unitName: 'cubic foot per day ', siDefinition: '', comment: '' }],
	[ 157, { enum: 157, unit: 'ac ft/s', quantity: 'volume flux', unitName: 'acre foot per second ', siDefinition: '', comment: '' }],
	[ 158, { enum: 158, unit: 'ac ft/min', quantity: 'volume flux', unitName: 'acre foot per min ', siDefinition: '', comment: '' }],
	[ 159, { enum: 159, unit: 'ac ft/h', quantity: 'volume flux', unitName: 'acre foot per hour ', siDefinition: '', comment: '' }],
	[ 160, { enum: 160, unit: 'ac ft/d', quantity: 'volume flux', unitName: 'acre foot per day ', siDefinition: '', comment: '' }],
	[ 161, { enum: 161, unit: 'gal (imp)', quantity: 'volume (V) rv, meter constant or pulse value (volume)', unitName: 'imperial gallon ', siDefinition: '', comment: '' }],
	[ 162, { enum: 162, unit: 'gal (imp) / s', quantity: 'volume flux', unitName: 'imperial gallon per second ', siDefinition: '', comment: '' }],
	[ 163, { enum: 163, unit: 'gal (imp) / min', quantity: 'volume flux', unitName: 'imperial gallon per min ', siDefinition: '', comment: '' }],
	[ 164, { enum: 164, unit: 'gal (imp) / h', quantity: 'volume flux', unitName: 'imperial gallon per hour ', siDefinition: '', comment: '' }],
	[ 165, { enum: 165, unit: 'gal (imp) / d', quantity: 'volume flux', unitName: 'imperial gallon per day ', siDefinition: '', comment: '' }],
	[ 166, { enum: 166, unit: 'gal (US)', quantity: 'volume (V) rv, meter constant or pulse value (volume)', unitName: 'US gallon ', siDefinition: '', comment: '' }],
	[ 167, { enum: 167, unit: 'gal (US) / s', quantity: 'volume flux', unitName: 'US gallon per second ', siDefinition: '', comment: '' }],
	[ 168, { enum: 168, unit: 'gal (US) / min', quantity: 'volume flux', unitName: 'US gallon per min ', siDefinition: '', comment: '' }],
	[ 169, { enum: 169, unit: 'gal (US) / h', quantity: 'volume flux', unitName: 'US gallon per hour ', siDefinition: '', comment: '' }],
	[ 170, { enum: 170, unit: 'gal (US) / d', quantity: 'volume flux', unitName: 'US gallon per day ', siDefinition: '', comment: '' }],
	[ 171, { enum: 171, unit: 'Btu/s', quantity: 'energy flow, heat, power, change rate', unitName: 'British thermal unit per second ', siDefinition: '', comment: '' }],
	[ 172, { enum: 172, unit: 'Btu/min', quantity: 'energy flow, heat, power, change rate', unitName: 'British thermal unit per minute ', siDefinition: '', comment: '' }],
	[ 173, { enum: 173, unit: 'Btu/h', quantity: 'energy flow, heat, power, change rate', unitName: 'British thermal unit per hour ', siDefinition: '', comment: '' }],
	[ 174, { enum: 174, unit: 'Btu/d', quantity: 'energy flow, heat, power, change rate', unitName: 'British thermal unit per day ', siDefinition: '', comment: '' }],
	[ 253, { enum: 253, unit: 'extended table of units ', quantity: '', unitName: '', siDefinition: '', comment: '' }],
	[ 254, { enum: 254, unit: 'other', quantity: 'other unit ', unitName: '', siDefinition: '', comment: '' }],
	[ 255, { enum: 255, unit: 'count', quantity: 'no unit, unitless, count ', unitName: '', siDefinition: '', comment: '' }],
]);

