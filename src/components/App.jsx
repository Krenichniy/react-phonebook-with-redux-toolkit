import React from 'react';
import Form from './Form';
import Filter from './Filter';
import ContactsList from './ContactsList';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/reducer';
import { getFiltredList } from 'redux/selectors';

const App = () => {
      const contacts = useSelector(getFiltredList)
      const dispatch = useDispatch();
      const onAddContact = (newContact) => {
        const isExist = Object.keys(newContact).find(key => {
        const subString = newContact[key].toLocaleUpperCase();
        const contact = contacts.find(el => el[key].toLocaleUpperCase().includes(subString));
        if (contact) return !Notify.warning(`${contact[key]} is already in contacts`);
        else return false
        })
        if (isExist) return true;
        dispatch(addContact(newContact));
    }




        return (
          <Container>
            <Form onSubmit={onAddContact} />
            <Filter   />
            <ContactsList  />
      </Container>
    );
};


const Container = styled.div`
          height: 100vh;
          color: #010101;
          text-align:center;
`

export default App;