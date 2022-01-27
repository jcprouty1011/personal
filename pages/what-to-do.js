import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import Immutable from "immutable";
import PageWrapper from "../lib/components/page-wrapper";
import NewItemBar from "../lib/components/new-item-bar";
import ActivityTable from "../lib/components/activity-table";
import { fetcher } from "../lib/utils";

function WhatToDo() {
  const router = useRouter();
  const { data, error } = useSWR(["/api/activities", router.query.mode], fetcher);
  // TODO use hook in both children instead of parent
  return (
    <PageWrapper>
      <h1>Things I might do</h1>
      <NewItemBar activities={data} />
      {!data ? <span>Loading...</span> : <ActivityTable activities={data} />}
    </PageWrapper>
  );
}

export default WhatToDo;
