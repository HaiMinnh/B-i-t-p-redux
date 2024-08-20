import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "./Reducers/coinReducer";

const coinDefault = [{
    ath
        :
        73738,
    ath_change_percentage
        :
        -19.79687,
    ath_date
        :
        "2024-03-14T07:10:36.635Z",
    atl
        :
        67.81,
    atl_change_percentage
        :
        87115.76205,
    atl_date
        :
        "2013-07-06T00:00:00.000Z",
    circulating_supply
        :
        19742156,
    current_price
        :
        59085,
    fully_diluted_valuation
        :
        1240026334246,
    high_24h
        :
        59827,
    id
        :
        "bitcoin",
    image
        :
        "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    last_updated
        :
        "2024-08-19T17:50:12.386Z",
    low_24h
        :
        57918,
    market_cap
        :
        1165752063562,
    market_cap_change_24h
        :
        -10945362077.230225,
    market_cap_change_percentage_24h
        :
        -0.93018,
    market_cap_rank
        :
        1,
    max_supply
        :
        21000000,
    name
        :
        "Bitcoin",
    price_change_24h
        :
        -407.62361798914935,
    price_change_percentage_24h
        :
        -0.68517,
    roi
        :
        null,
    symbol
        :
        "btc",
    total_supply
        :
        21000000,
    total_volume
        :
        24427379699
}]

export const store = configureStore({
    reducer: {
        coinSliceReducer: coinReducer
}})