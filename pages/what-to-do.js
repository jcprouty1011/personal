import React from "react";
import PageWrapper from "../lib/components/page-wrapper";
import NewItemBar from "../lib/components/new-item-bar";
import ActivityTable from "../lib/components/activity-table";
import { useActivities } from "../lib/utils";

function WhatToDo() {
  const { activities, errorGettingActivities } = useActivities();
  return (
    <PageWrapper>
      <h1>Things I might do</h1>
      {errorGettingActivities && <span>Error Loading Data</span>}
      {!activities && <span>Loading...</span>}
      {activities && <NewItemBar />}
      {activities && <ActivityTable />}
    </PageWrapper>
  );
}

export default WhatToDo;
