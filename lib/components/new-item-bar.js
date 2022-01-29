import React, { useState, useEffect, useRef } from "react";
import { useActivities } from "../utils";

function NewItemBar() {
  const [creating, setCreating] = useState(false);
  const [newItem, setNewItem] = useState("");
  const { activities, mutateActivities } = useActivities();
  async function handleAddClick() {
    mutateActivities(activities.concat({name: newItem}));
    setCreating(false);
    setNewItem("");
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
      <button onClick={() => setCreating(true)} disabled={!activities}>
        New
      </button>
    </div>
  );
}

export default NewItemBar;
