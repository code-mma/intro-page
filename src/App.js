import './App.css';

function InputBox (props) {

  return (
    <input type="text">
      {props.value}
    </input>
  );  
};

function Button (props) {

  return (
    <button type="button">
      {props.value}
    </button>
  );  
};

function Main () {

  function renderInput(i) {
    <InputBox value={i} />;
  }

  function renderButton(i) {
    <Button value={i} />;
  }

  return (
    <div className="wrapper">
      <div className="left-panel">
        Text
      </div>
      <div className="right-panel">
        <div className="header">
          Header
        </div>
        <div className="form-container">
          <div className="inputs-container">
            {renderInput('First Name')}
            {renderInput('Last Name')}
            {renderInput('Email Address')}
            {renderInput('Password')}
          </div>
          <div className="button-container">
            {renderButton('CLAIM TOUR FREE TRIAL')}
          </div>
          Text
        </div>
      </div>
    </div>
  );  
};

export default Main;
