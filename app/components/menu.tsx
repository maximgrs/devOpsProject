import Link from "next/link";
import React from "react";

type Props = {};

function Menu({}: Props) {
  return (
    <div>
      <ul className="flex p-4">
        <li className="p-2 hover:bg-red-400">
          <Link href="/maksim">Maksim</Link>
        </li>

        <li className="p-2 hover:bg-red-400">
          <Link href="/tamir">Tamir</Link>
        </li>

        <li className="p-2 hover:bg-red-400">
          <Link href="/sefa">Sefa</Link>
        </li>

        <li className="p-2 hover:bg-red-400">
          <Link href="/diego">Diego</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
