import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default function BiasNavBar() {
  return (
    <ul class="nav justify-content-center nav-tabs">
      <li class="nav-item">
        <Link className="nav-link" aria-current="page" to="left">
          Left
        </Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link text-purple" to="center">
          Center
        </Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link text-red" to="right">
          Right
        </Link>
      </li>
    </ul>
  );
}
