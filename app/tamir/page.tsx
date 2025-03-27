import React from "react";

type Props = {};

export default function page({ }: Props) {
  return (
    <div>
      <h1 className="text-lg">Tamir's page</h1>
      <div className="w-52 p-2 m-5 border-1 border-white hover:bg-gray-800">
        <p>This is a React component created by Tamir, which does nothing</p>
      </div>
      <a href="/" className="border-2 border-white p-2 hover:bg-gray-900">back to homepage</a>
    </div>
  );
}
