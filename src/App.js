import './App.css';

function InputBox (props) {

  return (
    <div>
      <input type="text" value={props.value}/>
    </div>
  );  
};

function Button (props) {
  return (
    <div>
      <button type="button" className="btn btn-success">
        {props.value}
      </button>
    </div>
  );  
};

function Main () {

  function renderInput(i) {
    return <InputBox value={i} />;
  }

  function renderButton(i) {
    return <Button value={i} />;
  }

  return (
    <div className="wrapper">
      <div className="left-panel">
        <h1>Lear to code by watching others</h1>
        <p>See how experienced developers solve problems in real-time.
        Watching scripted tutorials is great, but understanding how
        developers think is invaluable.</p>
      </div>
      <div className="right-panel">
        <div className="header">
        Try it free 7 days then $20/mo. thereafter
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
          By clicking the button, you are agreeing to our Terms and Services
        </div>
      </div>
    </div>
  );  
};

export default Main;
