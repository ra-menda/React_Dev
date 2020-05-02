import React from 'react';
import LoginControl from './sample';
import Toggle from './toggle';
import Clock from './clock';
import Comment from './index';

function App(){
    return (
      <div>
        <LoginControl />
        <hr />
        <Toggle /> <hr />
        <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author}
          />
           <hr />
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