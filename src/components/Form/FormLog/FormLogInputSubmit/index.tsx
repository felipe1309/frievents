const FormInputSubmit = () => {
  return (
    <>
      <div className="form-submit">
        <input type="submit" value="create"/>
      </div>
      <style jsx>{`
        .form-submit {
          height: 5rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        input{
            width:160px;
            height:2rem;
            font-size:1.2rem;
            border:2px solid darkblue;
            border-radius:2px;
            background:none
        }
        input:hover{
            border:2px solid red;
        }
      `}</style>
    </>
  );
};

export default FormInputSubmit;
