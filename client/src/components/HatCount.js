import React, {useState, useEffect} from "react";

const HatCount = () => {

    const [count, setCount] = useState(860);
    
    const getCount = async () => {
      try {
        const response = await fetch("/count");
        const jsonData = await response.json();  
        setCount(jsonData[0].hatcount);

      } catch (err) {
        console.error(err.message);
      }
    };

    useEffect(() => {
      getCount();
    }, []);

  return (
    
    <div className="hatcount highlight">
      <p className="line1">{count} PURPLE HATS</p>
      <p className="line2">HAVE MADE</p>
    </div>
  );
};

// HatCount.defaultProps ={
//   count: "988"
// }

export default HatCount;
