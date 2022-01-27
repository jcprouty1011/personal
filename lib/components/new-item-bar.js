import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

function NewItemBar(props) {
  const [creating, setCreating] = useState(false);
  const [newItem, setNewItem] = useState("");
  async function handleAddClick() {
    // TODO generalize for save-to-server case
    localStorage.setItem(
      "/api/activities",
      JSON.stringify(props.activities.concat([{name: newItem}]))
    );
  }
  function handleCancelClick() {
    setCreating(false);
    setNewItem("");
  }
  const newItemRef = useRef();
  useEffect(() => {
    newItemRef.current?.focus();
  }, [creating]);
  if (creating) {
    return (
      <div>
        <input ref={newItemRef}
          value={newItem}
          onChange={e => setNewItem(e.target.value)} />
        <button onClick={handleAddClick}>Add</button>
        <button onClick={handleCancelClick}>Cancel</button>
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => setCreating(true)}>New</button>
    </div>
  );
}

NewItemBar.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.object)
};

export default NewItemBar;
