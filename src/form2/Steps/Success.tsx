import React from 'react';
import {CompleteData} from '../types';

type Props = {
  data: CompleteData;
};

export const Success = ({data}: Props) => {
  return (
    <div>
      <p>firstName : {data.firstName}</p>
      <p>lastName : {data.lastName}</p>
      <p>BirthDay : {data.birthDay}</p>
      <p>Country: {data.country}</p>
      <p>City: {data.city}</p>
      <p>Address: {data.address}</p>
      <p>Postal Code: {data.postalCode}</p>
      <p>Email: {data.email}</p>
      <p>Phone number: {data.phoneNumber}</p>
    </div>
  );
};
