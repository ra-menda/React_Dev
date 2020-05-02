import React from 'react';
import LoginControl from './sample';
import Toggle from './toggle';
import Clock from './clock';
import Comment from './index';
import NameForm from './nameForm'
import FlavorForm from './selectTab'
import Calculator from './waterCheck'
import SignUpDialog from './dialog'


function App(){
    return (
      <div>
          <SignUpDialog /><hr />
          <Calculator /><hr />
          <fieldset>
          <FlavorForm /><hr />
          </fieldset>
           <NameForm /><hr />
        <LoginControl /><hr />        
        <Toggle /> <hr />
        <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author}
          /><hr />           
           <Clock /> <hr />
           <Clock /> <hr />
           <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author}
          /> <hr />
          <button onClick={Clock}>
    Clock
  </button>
      </div>
    );
  }



  export default App;

  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };