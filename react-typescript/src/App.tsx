import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/typescriptwithprops/Greet';
import Person from './components/typescriptwithprops/Person';
import PersonList from './components/typescriptwithprops/PersonList';
import Status from './components/typescriptwithprops/Status';
import Heading from './components/typescriptwithprops/Heading';
import Oscar from './components/typescriptwithprops/Oscar';
import Button from './components/events/Button';
import Input from './components/events/Input';
import Container from './components/styles/Container';
import Login from './components/hooks/Login';
import CounterWithUserReducer from './components/hooks/CounterWithUserReducer';
import { ThemeContextProvider } from './components/context/ThemeContext';
import Box from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { User as UserC } from './components/context/User';
import { MutableRef } from './components/ref/MutableRef';
import { CounterClass } from './components/class/CounterClass';
import { Private } from './components/auth/private';
import { Profile } from './components/auth/Profile';
import { ListGenetic } from './components/generics/ListGeneric';
import { Toast } from './components/templateliterals/Toast';
import { CustomButton } from './components/html/CustomButton';
import { CustomComponent } from './components/html/CustomeComponent'
import { PolyMorphicComponent } from './components/PolymorphicComponents/PolyMorphicComponent';
function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }
  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princes',
      last: 'Diana'
    }
  ];
  return (
    <div className="App">
      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Greet name="Jayesh" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList nameList={nameList} />
      <Status status='error' />
      <Heading>This is Heading PlaceHolder</Heading>
      <Oscar><Heading>Oscar gose to Leonardo Dicpario!</Heading></Oscar>

  */}
      {/* Event handler*/}
      <Button handleClick={(e, id) => console.log(e, id)} />
      <Input value='' handleChange={(e) => console.log(e)} />
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
      {/* Hooks*/}
      <Login />
      <CounterWithUserReducer />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <UserC />
      </UserContextProvider>
      <MutableRef />
      {/* Class based implementaion */}
      <CounterClass message='The count value is' />
      {/* complex props*/}

      <Private isLoggedIn={true} component={Profile} />
      <ListGenetic items={['Batman', 'Superman', 'Wonder Women']} onClick={(value) => console.log(value)} />
      <ListGenetic items={[1, 2, 3, 4]} onClick={(value) => console.log(value)} />
      {/*<ListGenetic items={nameList} onClick={(value) => console.log(value)} /> */}
      <Toast position='center-bottom' />
      <CustomButton varient='primary' onClick={() => console.log('clicked..')}>Primary Button</CustomButton>
      <CustomComponent isLoggedIn={true} messageCount={10} name="Soham" key={"00x0x"} />
      <PolyMorphicComponent />
    </div>

  );
}

export default App;
