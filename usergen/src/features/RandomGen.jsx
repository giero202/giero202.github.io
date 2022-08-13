import React from "react";

const RandomGen = () => {
  const makeUsername = (length) => {
    function makeText(length) {
      var result = "";
      var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    }

    function makeNumber(length) {
      var result = "";
      var characters = "1234567890";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    }

    return makeText(length) + makeNumber(3);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(makeUsername(11));
  };

  return (
    <>
      <button onClick={handleCopy}>Click me to copy random username</button>
    </>
  );
};

export default RandomGen;
