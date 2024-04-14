#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.whiteBright.bold("\n \t\t Welcome to Currency-Converter \t \n"));
console.log(chalk.whiteBright.bold("  \t\t  ^_^_^_^_^_^_^_^_^_^_^_^_^_^ \t \n"));
const Currencies = {
    USD: 1, // US Dollar: 1 US Dollar equals itself
    EUR: 0.92, // Euro: 1 Euro equals 0.92 US Dollars
    CAD: 1.36, // Canadian Dollar: 1 Canadian Dollar equals 1.36 US Dollars
    AUD: 1.52, // Australian Dollar: 1 Australian Dollar equals 1.52 US Dollars
    PKR: 278.15, // Pakistani Rupee: 1 Pakistani Rupee equals 278.15 US Dollars
    AED: 3.67, // United Arab Emirates Dirham: 1 AED equals 3.67 US Dollars
    QAR: 3.65, // Qatari Riyal: 1 Qatari Riyal equals 3.65 US Dollars
    OMR: 0.385, // Omani Rial: 1 Omani Rial equals 0.385 US Dollars
    KWD: 0.038, // Kuwaiti Dinar: 1 Kuwaiti Dinar equals 0.038 US Dollars
    INR: 83.31, // Indian Rupee: 1 Indian Rupee equals 83.31 US Dollars
    JPY: 152, // Japanese Yen: 1 Japanese Yen equals 152 US Dollars
    CNY: 7.23, // Chinese Yuan: 1 Chinese Yuan equals 7.23 US Dollars
    TRY: 32.05, // Turkish Lira: 1 Turkish Lira equals 32.05 US Dollars
    GBP: 0.79, // British Pound Sterling: 1 GBP equals 0.79 US Dollars
    MXN: 16.45, // Mexican Peso: 1 Mexican Peso equals 16.45 US Dollars
    HKD: 7.83, // Hong Kong Dollar: 1 Hong Kong Dollar equals 7.83 US Dollars
    SLR: 298, // Sri Lankan Rupee: 1 Sri Lankan Rupee equals 298 US Dollars
    BDT: 109.5, // Bangladeshi Taka: 1 Bangladeshi Taka equals 109.5 US Dollars
    EGP: 47.39, // Egyptian Pound: 1 Egyptian Pound equals 47.39 US Dollars
    MAD: 10.06, // Moroccan Dirham: 1 Moroccan Dirham equals 10.06 US Dollars
    AOA: 694.76, // Angolan Kwanza: 1 Angolan Kwanza equals 694.76 US Dollars
    XCD: 2.7, // East Caribbean Dollar: 1 XCD equals 2.7 US Dollars
    ARS: 98.83, // Argentine Peso: 1 Argentine Peso equals 98.83 US Dollars
    AMD: 540.52, // Armenian Dram: 1 Armenian Dram equals 540.52 US Dollars
    AWG: 1.8, // Aruban Florin: 1 AWG equals 1.8 US Dollars
    BSD: 1.0, // Bahamian Dollar: 1 BSD equals 1 US Dollar
    BHD: 0.38, // Bahraini Dinar: 1 Bahraini Dinar equals 0.38 US Dollars
    BBD: 2.0, // Barbadian Dollar: 1 BBD equals 2 US Dollars
    BYN: 2.53, // Belarusian Ruble: 1 BYN equals 2.53 US Dollars
    BZD: 2.0, // Belize Dollar: 1 BZD equals 2 US Dollars
    BMD: 1.0, // Bermudian Dollar: 1 BMD equals 1 US Dollar
    BTN: 73.83, // Bhutanese Ngultrum: 1 BTN equals 73.83 US Dollars
    BOB: 6.9, // Bolivian Boliviano: 1 BOB equals 6.9 US Dollars
    BAM: 1.63, // Bosnia and Herzegovina Convertible Mark: 1 BAM equals 1.63 US Dollars
    BWP: 11.41, // Botswana Pula: 1 BWP equals 11.41 US Dollars
    BRL: 5.53, // Brazilian Real: 1 BRL equals 5.53 US Dollars
    BND: 1.35, // Brunei Dollar: 1 BND equals 1.35 US Dollars
    BGN: 1.63, // Bulgarian Lev: 1 BGN equals 1.63 US Dollars
    BIF: 1984.68, // Burundian Franc: 1 BIF equals 1984.68 US Dollars
    KHR: 4059.28, // Cambodian Riel: 1 KHR equals 4059.28 US Dollars
    CVE: 93.81, // Cape Verdean Escudo: 1 CVE equals 93.81 US Dollars
    XAF: 548.2, // Central African CFA Franc: 1 XAF equals 548.2 US Dollars
    XPF: 100.74, // CFP Franc: 1 XPF equals 100.74 US Dollars
    CLP: 809.62, // Chilean Peso: 1 CLP equals 809.62 US Dollars
    COP: 4161.75, // Colombian Peso: 1 COP equals 4161.75 US Dollars
    KMF: 424.3, // Comorian Franc: 1 KMF equals 424.3 US Dollars
    CDF: 1989.34, // Congolese Franc: 1 CDF equals 1989.34 US Dollars
    CRC: 621.5, // Costa Rican Colon: 1 CRC equals 621.5 US Dollars
    HRK: 6.44, // Croatian Kuna: 1 HRK equals 6.44 US Dollars
    CUP: 25.0, // Cuban Peso: 1 CUP equals 25 US Dollars
    CZK: 22.01, // Czech Koruna: 1 CZK equals 22.01 US Dollars
    DKK: 6.15, // Danish Krone: 1 DKK equals 6.15 US Dollars
    DJF: 177.72, // Djiboutian Franc: 1 DJF equals 177.72 US Dollars
    DOP: 57.52, // Dominican Peso: 1 DOP equals 57.52 US Dollars
    ERN: 15.0, // Eritrean Nakfa: 1 ERN equals 15 US Dollars
    ETB: 45.04, // Ethiopian Birr: 1 ETB equals 45.04 US Dollars
    FKP: 0.79, // Falkland Islands Pound: 1 FKP equals 0.79 US Dollars
    FJD: 2.02, // Fijian Dollar: 1 FJD equals 2.02 US Dollars
    GMD: 51.84, // Gambian Dalasi: 1 GMD equals 51.84 US Dollars
    GEL: 3.29, // Georgian Lari: 1 GEL equals 3.29 US Dollars
    GHS: 6.11, // Ghanaian Cedi: 1 GHS equals 6.11 US Dollars
    GIP: 0.79, // Gibraltar Pound: 1 GIP equals 0.79 US Dollars
    GTQ: 7.68, // Guatemalan Quetzal: 1 GTQ equals 7.68 US Dollars
    GGP: 0.79, // Guernsey Pound: 1 GGP equals 0.79 US Dollars
    GNF: 9814.58, // Guinean Franc: 1 GNF equals 9814.58 US Dollars
    GYD: 209.21, // Guyanese Dollar: 1 GYD equals 209.21 US Dollars
    HTG: 105.62, // Haitian Gourde: 1 HTG equals 105.62 US Dollars
    HNL: 24.19, // Honduran Lempira: 1 HNL equals 24.19 US Dollars
    HUF: 303.71, // Hungarian Forint: 1 HUF equals 303.71 US Dollars
    ISK: 134.74, // Icelandic Krona: 1 ISK equals 134.74 US Dollars
    IDR: 14286.3, // Indonesian Rupiah: 1 IDR equals 14286.3 US Dollars
    IRR: 42105.0, // Iranian Rial: 1 IRR equals 42105 US Dollars
    IQD: 1460.75, // Iraqi Dinar: 1 IQD equals 1460.75 US Dollars
    IMP: 0.79, // Isle of Man Pound: 1 IMP equals 0.79 US Dollars
    ILS: 3.28, // Israeli New Shekel: 1 ILS equals 3.28 US Dollars
    JMD: 155.27, // Jamaican Dollar: 1 JMD equals 155.27 US Dollars
    JEP: 0.79, // Jersey Pound: 1 JEP equals 0.79 US Dollars
    KZT: 431.67, // Kazakhstani Tenge: 1 KZT equals 431.67 US Dollars
    KES: 113.08, // Kenyan Shilling: 1 KES equals 113.08 US Dollars
    KGS: 84.94, // Kyrgyzstani Som: 1 KGS equals 84.94 US Dollars
    LAK: 9750.0, // Laotian Kip: 1 LAK equals 9750 US Dollars
    LBP: 1507.5, // Lebanese Pound: 1 LBP equals 1507.5 US Dollars
    LSL: 14.9, // Lesotho Loti: 1 LSL equals 14.9 US Dollars
    LRD: 211.94, // Liberian Dollar: 1 LRD equals 211.94 US Dollars
    LYD: 4.51, // Libyan Dinar: 1 LYD equals 4.51 US Dollars
    MOP: 8.02, // Macanese Pataca: 1 MOP equals 8.02 US Dollars
    MKD: 52.05, // Macedonian Denar: 1 MKD equals 52.05 US Dollars
    MGA: 4077.68, // Malagasy Ariary: 1 MGA equals 4077.68 US Dollars
    MWK: 815.25, // Malawian Kwacha: 1 MWK equals 815.25 US Dollars
    MYR: 4.12, // Malaysian Ringgit: 1 MYR equals 4.12 US Dollars
    MVR: 15.4, // Maldivian Rufiyaa: 1 MVR equals 15.4 US Dollars
    MRO: 356.0, // Mauritanian Ouguiya: 1 MRO equals 356 US Dollars
    MUR: 42.21, // Mauritian Rupee: 1 MUR equals 42.21 US Dollars
    MZN: 62.59, // Mozambican Metical: 1 MZN equals 62.59 US Dollars
    MMK: 1669.27, // Burmese Kyat: 1 MMK equals 1669.27 US Dollars
    NAD: 14.88, // Namibian Dollar: 1 NAD equals 14.88 US Dollars
    NPR: 121.83, // Nepalese Rupee: 1 NPR equals 121.83 US Dollars
    NIO: 35.2, // Nicaraguan Córdoba: 1 NIO equals 35.2 US Dollars
    NGN: 413.98, // Nigerian Naira: 1 NGN equals 413.98 US Dollars
    NOK: 8.8, // Norwegian Krone: 1 NOK equals 8.8 US Dollars
    NZD: 1.64, // New Zealand Dollar: 1 NZD equals 1.64 US Dollars
    TWD: 27.86, // New Taiwan Dollar: 1 TWD equals 27.86 US Dollars
    TJS: 11.32, // Tajikistani Somoni: 1 TJS equals 11.32 US Dollars
    TZS: 2319.5, // Tanzanian Shilling: 1 TZS equals 2319.5 US Dollars
    THB: 32.63, // Thai Baht: 1 THB equals 32.63 US Dollars
    TOP: 2.26, // Tongan Pa'anga: 1 TOP equals 2.26 US Dollars
    TTD: 6.77, // Trinidad and Tobago Dollar: 1 TTD equals 6.77 US Dollars
    TND: 2.78, // Tunisian Dinar: 1 TND equals 2.78 US Dollars
    TMT: 3.5, // Turkmenistani Manat: 1 TMT equals 3.5 US Dollars
    UGX: 3593.5, // Ugandan Shilling: 1 UGX equals 3593.5 US Dollars
    UAH: 27.6, // Ukrainian Hryvnia: 1 UAH equals 27.6 US Dollars
    UYU: 44.16, // Uruguayan Peso: 1 UYU equals 44.16 US Dollars
    UZS: 11437.5, // Uzbekistan Som: 1 UZS equals 11437.5 US Dollars
    VUV: 109.46, // Vanuatu Vatu: 1 VUV equals 109.46 US Dollars
    VES: 2693089.79, // Venezuelan Bolívar: 1 VES equals 2693089.79 US Dollars
    VND: 23077.0, // Vietnamese Dong: 1 VND equals 23077 US Dollars
    YER: 250.03, // Yemeni Rial: 1 YER equals 250.03 US Dollars
    ZMW: 21.3, // Zambian Kwacha: 1 ZMW equals 21.3 US Dollars
    ZWL: 322.0, // Zimbabwean Dollar: 1 ZWL equals 322 US Dollars
};
async function startFunc() {
    let userAnswer = await inquirer.prompt([
        {
            name: "from",
            type: "list",
            message: chalk.cyanBright("Enter From Currency:"),
            choices: [
                "USD",
                "EUR",
                "CAD",
                "AUD",
                "PKR",
                "AED",
                "QAR",
                "OMR",
                "KWD",
                "INR",
                "JPY",
                "CNY",
                "TRY",
                "GBP",
                "MXN",
                "HKD",
                "SLR",
                "BDT",
                "EGP",
                "MAD",
                "AOA",
                "XCD",
                "ARS",
                "AMD",
                "AWG",
                "BSD",
                "BHD",
                "BBD",
                "BYN",
                "BZD",
                "BMD",
                "BTN",
                "BOB",
                "BAM",
                "BWP",
                "BRL",
                "BND",
                "BGN",
                "BIF",
                "KHR",
                "CVE",
                "XAF",
                "XPF",
                "CLP",
                "COP",
                "KMF",
                "CDF",
                "CRC",
                "HRK",
                "CUP",
                "CZK",
                "DKK",
                "DJF",
                "DOP",
                "ERN",
                "ETB",
                "FKP",
                "FJD",
                "GMD",
                "GEL",
                "GHS",
                "GIP",
                "GTQ",
                "GGP",
                "GNF",
                "GYD",
                "HTG",
                "HNL",
                "HUF",
                "ISK",
                "IDR",
                "IRR",
                "IQD",
                "IMP",
                "ILS",
                "JMD",
                "JEP",
                "KZT",
                "KES",
                "KGS",
                "LAK",
                "LBP",
                "LSL",
                "LRD",
                "LYD",
                "MOP",
                "MKD",
                "MGA",
                "MWK",
                "MYR",
                "MVR",
                "MRO",
                "MUR",
                "MZN",
                "MMK",
                "NAD",
                "NPR",
                "NIO",
                "NGN",
                "NOK",
                "NZD",
                "TWD",
                "TJS",
                "TZS",
                "THB",
                "TOP",
                "TTD",
                "TND",
                "TMT",
                "UGX",
                "UAH",
                "UYU",
                "UZS",
                "VUV",
                "VES",
                "VND",
                "YER",
                "ZMW",
                "ZWL",
            ],
        },
        {
            name: "to",
            type: "list",
            message: chalk.cyan("Enter To Currency:"),
            choices: [
                "USD",
                "EUR",
                "CAD",
                "AUD",
                "PKR",
                "AED",
                "QAR",
                "OMR",
                "KWD",
                "INR",
                "JPY",
                "CNY",
                "TRY",
                "GBP",
                "MXN",
                "HKD",
                "SLR",
                "BDT",
                "EGP",
                "MAD",
                "AOA",
                "XCD",
                "ARS",
                "AMD",
                "AWG",
                "BSD",
                "BHD",
                "BBD",
                "BYN",
                "BZD",
                "BMD",
                "BTN",
                "BOB",
                "BAM",
                "BWP",
                "BRL",
                "BND",
                "BGN",
                "BIF",
                "KHR",
                "CVE",
                "XAF",
                "XPF",
                "CLP",
                "COP",
                "KMF",
                "CDF",
                "CRC",
                "HRK",
                "CUP",
                "CZK",
                "DKK",
                "DJF",
                "DOP",
                "ERN",
                "ETB",
                "FKP",
                "FJD",
                "GMD",
                "GEL",
                "GHS",
                "GIP",
                "GTQ",
                "GGP",
                "GNF",
                "GYD",
                "HTG",
                "HNL",
                "HUF",
                "ISK",
                "IDR",
                "IRR",
                "IQD",
                "IMP",
                "ILS",
                "JMD",
                "JEP",
                "KZT",
                "KES",
                "KGS",
                "LAK",
                "LBP",
                "LSL",
                "LRD",
                "LYD",
                "MOP",
                "MKD",
                "MGA",
                "MWK",
                "MYR",
                "MVR",
                "MRO",
                "MUR",
                "MZN",
                "MMK",
                "NAD",
                "NPR",
                "NIO",
                "NGN",
                "NOK",
                "NZD",
                "TWD",
                "TJS",
                "TZS",
                "THB",
                "TOP",
                "TTD",
                "TND",
                "TMT",
                "UGX",
                "UAH",
                "UYU",
                "UZS",
                "VUV",
                "VES",
                "VND",
                "YER",
                "ZMW",
                "ZWL",
            ],
        },
        {
            name: "amount",
            type: "number",
            message: chalk.cyan("Enter your Amount you want to Convert:"),
        },
    ]);
    let fromAmount = Currencies[userAnswer.from]; //Exchange Rates
    let toAmount = Currencies[userAnswer.to]; //Exchange Rates
    let Amount = userAnswer.amount;
    let baseAmount = Amount / fromAmount; //Base Currency
    let convertedAmount = chalk.greenBright(Math.round(baseAmount * toAmount));
    console.log(chalk.yellowBright(`\nConverted Amount: ${convertedAmount}`));
    console.log(chalk.blueBright(`From ${userAnswer.from} To ${userAnswer.to} : ${Amount} = ${convertedAmount}`));
}
async function startAgain() {
    do {
        await startFunc();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: chalk.greenBright.bold("Do you want to Continue? Press Y/N :"),
        });
    } while (again.restart === "y" ||
        again.restart === "Y" ||
        again.restart === "yes" ||
        again.restart === "YeS" ||
        again.restart === "yEs" ||
        again.restart === "YES");
}
startAgain();
