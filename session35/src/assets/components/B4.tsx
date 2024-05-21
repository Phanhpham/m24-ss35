import React, { useState } from 'react';

const Toggle = () => {
  const [hidden, setIsHidden] = useState(false);
  const handleToggleClick = () => {
    setIsHidden(!hidden);
  };

  return (
    <div> B4
      {hidden?<button onClick={handleToggleClick}>an</button>:<button>hien</button>}
      <h3>tieu de van ban</h3>
    </div>
  );
};

export default Toggle;

