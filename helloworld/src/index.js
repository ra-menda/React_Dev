import React from 'react';
import ReactDOM from 'react-dom';
import LoginControl from './sample';
import Toggle from './toggle';
import Clock from './clock';


  function formatDate(date) {
    return date.toLocaleDateString();
  }



function Avatar(props){
    return (
        <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
        />
    );
}

function UserInfo(props){
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}

function Comment(props) {
        return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
              {props.text}
            </div>
            <div className="Comment-date">
              {formatDate(props.date)}
            </div>
          </div>
        );

}
const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };
  

function App(){
  return (
    <div>
      <LoginControl />
      <Toggle />
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
        />
         <Clock />
         <Clock />
         <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
        />
        <button onClick={Clock}>
  Clock
</button>
    </div>
  );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);



//setInterval(Comment,1000);
