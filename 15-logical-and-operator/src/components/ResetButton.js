function ResetButton({ onClick }) {
  const buttonStyle = { backgroundColor: 'red' };
  return (
    <div>
      <button style={buttonStyle} onClick={onClick}>
        Reset
      </button>
    </div>
  );
}

export default ResetButton;
