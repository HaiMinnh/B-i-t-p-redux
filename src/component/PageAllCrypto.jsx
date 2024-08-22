import React, { useEffect, useState } from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { Avatar, Button, List } from 'antd';
import { addCoinAction } from '../redux/Reducers/coinReducer';
import { useDispatch } from 'react-redux';


const PageAllCrypto = () => {
    const [arrCrypto, setArrCrypto] = useState([])
    const dispatch = useDispatch()
    const [search, setSearch] = useSearchParams();
    const searchTerm = search.get('search') || '';

    const handleSearch = (value) => {
        setSearch({ search: value });
        console.log(value)
    };

    const getAllCoinApi = async () => {
        try {
            const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
                params: {
                    vs_currency: 'usd',
                    order: 'market_cap_desc',
                    per_page: 50,
                    page: 1,
                    sparkline: false,
                },
            });
            setArrCrypto(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getAllCoinApi()
    }, [])

    const filteredCoins = arrCrypto.filter((coin) =>
        coin.id.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className='container mt-5'>
            <div className="title">
                <div className="row">
                    <div className="col-6">
                        <h1>Crypto Portfolio</h1>
                    </div>
                    <div className="col-6">
                        <input type="text" placeholder='search' className='form-control' value={searchTerm}
                            onChange={(e) => handleSearch(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className="body mt-5 bg-body-secondary">
                <div className="row">
                    <div className="col-6">
                        <h3>All Cryptocurrencies</h3>
                        <List
                            itemLayout="horizontal"
                            dataSource={filteredCoins}
                            renderItem={(item) => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.image} />}
                                        title={item.name}
                                        description={`USD ${item.current_price}`}
                                    />
                                    <Button type='primary' onClick={() => {
                                        const action = addCoinAction({ ...item, quantity: 1 });
                                        dispatch(action);
                                    }}>
                                        Add to Favorites
                                    </Button>
                                </List.Item>
                            )}
                        />
                    </div>
                    <div className="col-6">
                        <h3>Your Favorites</h3>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageAllCrypto