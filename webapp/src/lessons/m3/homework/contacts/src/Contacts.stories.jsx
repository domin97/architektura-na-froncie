/* eslint-disable import/first, import/no-anonymous-default-export */
import React from 'react';

import contacts from './contacts.json';
import { ContactsContainer } from './ContactsContainer';
import { ContactsService } from './contacts.service';

const svc = new ContactsService(contacts);


export default {
  title: 'Lessons/M3 React/HOMEWORK',
  argTypes: {
  },
};

export const Contacts = () => {
  return <>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
    <ContactsContainer service={svc} />
  </>
}
