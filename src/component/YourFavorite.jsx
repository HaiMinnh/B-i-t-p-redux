import { Button, List, Avatar } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCoinAction } from '../redux/Reducers/coinReducer';

const YourFavorite = () => {
  const coinList = useSelector(state => state.coinSliceReducer.coin)
  const dispatch = useDispatch();
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={coinList}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.image} />}
              title={item.name}
              description={`USD ${item.current_price}`}
            />
            <Button type='link' danger onClick={(e) => {
              console.log(item.id)
              const action = deleteCoinAction(item.id);
              dispatch(action)
            }}>
              Remove
            </Button>
          </List.Item>
        )}
      />
    </div>
  )
}

export default YourFavorite