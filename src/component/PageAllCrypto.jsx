import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import { Avatar, Button, List } from 'antd';
import { addCoinAction } from '../redux/Reducers/coinReducer';
import { useDispatch } from 'react-redux';


const PageAllCrypto = () => {
    const [arrCrypto, setArrCrypto] = useState([])
    const dispatch = useDispatch()

    const getAllCoinApi = async () => {
        const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
            params: {
                vs_currency: "usd",
                order: "market_cap_desc",
                per_page: 50,
                page: 1,
                sparkline: false
            }
        });
        console.log(res.data)
        setArrCrypto(res.data)
    }

    useEffect(() => {
        getAllCoinApi()
    }, [])

    return (
        <div className='container mt-5'>
            <div className="title">
                <div className="row">
                    <div className="col-6">
                        <h1>Crypto Portfolio</h1>
                    </div>
                    <div className="col-6">
                        <input type="text" placeholder='search' className='form-control' />
                    </div>
                </div>
            </div>
            <div className="body mt-5 bg-body-secondary">
                <div className="row">
                    <div className="col-6">
                        <h3>All Cryptocurrencies</h3>
                        <List
                            itemLayout="horizontal"
                            dataSource={arrCrypto}
                            renderItem={(item) => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.image} />}
                                        title={item.name}
                                        description={`USD ${item.current_price}`}
                                    />
                                    <Button type='primary' onClick={() => {
                                        
                                        console.log(item.id)
                                        const action = addCoinAction({ ...item, quantity: 1 })
                                        dispatch(action)
                                    }} >
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