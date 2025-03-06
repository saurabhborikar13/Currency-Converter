const currency = {
   
  AU: 'AUD',
  CN: 'CNY',
  DK: 'DKK',
  GD: 'XCD',
  EG: 'EGP',
  SV: 'SVC',
  FR: 'EUR',
  HU: 'HUF',
  IN: 'INR',
  ID: 'IDR',
  IR: 'IRR',
  IQ: 'IQD',
  IL: 'ILS',
  GS: 'GBP',
  JO: 'JOD',
  KZ: 'KZT',
  MK: 'MKD',
  MG: 'MGF',
  MW: 'MWK',
  MY: 'MYR',
  MZ: 'MZN',
  MM: 'MMK',
  NA: 'NAD',
  NP: 'NPR',
  NZ: 'NZD',
  NU: 'NZD',
  OM: 'OMR',
  PK: 'PKR',
  RS: 'RSD',
  SA: 'SAR',
  SD: 'SDG',
  SC: 'SCR',
  SL: 'SLL',
  SG: 'SGD',
  SB: 'SBD',
  SO: 'SOS',
  ZA: 'ZAR',
  SS: 'SSP',
  LK: 'LKR',
  ST: 'STD',
  UA: 'UAH',
  US: 'USD',
  WS: 'WST',
  EH: 'MAD',
  YE: 'YER',
  ZM: 'ZMW',
  ZW: 'ZWD'
  };
  


//now i have to swap the respective key and the value
const forFlag = {};
for(let [key,value] of Object.entries(currency)){
    forFlag[value]=key;
}
console.log(forFlag)