"use client";

import { useState } from "react";

import { api } from "~/trpc/react";

export function LatestUser() {
  const { data: latestUser } = api.post.getLatestUser.useQuery();
  return <div className="w-full max-w-xs">LatestUSer : {latestUser?.name}</div>;
}
