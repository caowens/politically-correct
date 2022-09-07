import React from 'react';

export default function BiasNavBar() {
    return (
        <ul class="nav nav-pills justify-content-center">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Left</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Center</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Right</a>
            </li>
        </ul>
    )
}