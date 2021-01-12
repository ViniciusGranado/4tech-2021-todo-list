import React, { Fragment } from 'react';
import styled from 'styled-components';

import {Avatar} from 'antd';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';



import Avatar1 from '../../../assets/avatar1.png'
import Avatar2 from '../../../assets/avatar2.png'
import Avatar3 from '../../../assets/avatar3.png'
import Avatar4 from '../../../assets/avatar4.png'

export const Who = () => {
  const completeWhoList = [
    {
      idx: 1,
      avatarSource: Avatar1,
    },
    {
      idx: 2,
      avatarSource: Avatar2,
    },
    {
      idx: 3,
      avatarSource: Avatar3,
    },
    {
      idx: 4,
      avatarSource: Avatar4,
    },
  ];

  const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    padding-left: 1rem;
  `;

  const WhoLabel = styled.div`
    font-size: 30px;
  `;

  const WhoSelectionArea = styled.div`
    display: flex;
    height: 5rem;
    background-color: #FFF;
    box-shadow: 5px 5px 10px #A9C4DA;
    border-radius: 5px;
  `;

  const SelectToTheLeftOrRight = styled.div`
    width: 10%;
    align-items: center;
    justify-content: center;
    display: flex;
  `;

  const AvatarArea = styled.div`
    width: 80%;

  `;

  const generateAvatars = () => {
    return completeWhoList.map((item) => {
      return <Avatar icon={
        <img src={item.avatarSource} alt={`Avatar ${item.idx}`}/>
      }/>
    });
  }

  return <FormItem>
    <WhoLabel>Who</WhoLabel>

    <WhoSelectionArea>

      <SelectToTheLeftOrRight>
        <LeftOutlined />
      </SelectToTheLeftOrRight>
      
      <AvatarArea>
        {generateAvatars()};
      </AvatarArea>

      <SelectToTheLeftOrRight>
        <RightOutlined />
      </SelectToTheLeftOrRight>

    </WhoSelectionArea>
  </FormItem>
};