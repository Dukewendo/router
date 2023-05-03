import React, { useState } from 'react';
import { Navigate } from 'react-router';

export default function About() {

    const [user, setUser] = useState('Timmeh');

    if(!user) {
        return <Navigate to= "/" replace={true}/>
    }
    return (
        <div>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacinia eros. Etiam tincidunt fringilla nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis dignissim malesuada urna, in lacinia est dignissim at. Maecenas massa. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id interdum eros. Sed arcu nisl, semper sit amet porttitor quis, accumsan sed massa. Vivamus viverra et urna nec ultricies. Fusce at lobortis metus. Duis vitae ex interdum, fermentum ligula id, semper leo. Quisque vehicula in felis ut mattis. Aenean leo felis, fringilla non ullamcorper eu, varius eget mauris. Vestibulum vitae eleifend purus. Nulla risus sem, eleifend eget lectus vel, tincidunt venenatis libero. Suspendisse eu erat velit. Donec dolor est, faucibus sit amet nulla in, ullamcorper lacinia arcu. Morbi finibus ac velit ut ullamcorper. Quisque maximus quis orci congue viverra. </p>
            <p>Integer gravida sodales sem, a sagittis est suscipit vel. Donec vulputate ultrices massa, at aliquet dolor volutpat et. Phasellus pharetra eros in velit blandit, eget convallis dolor convallis. Curabitur interdum placerat justo, sed eleifend augue. Curabitur malesuada eros mi. Nullam vitae tempor metus. Nullam ultrices interdum ullamcorper. Phasellus a enim non sem bibendum dictum sit amet vel risus. Quisque semper rutrum sollicitudin. Aliquam efficitur interdum quam, quis ornare dolor commodo vitae. Mauris maximus magna sit amet orci ultrices, vitae laoreet velit molestie. Pellentesque et varius ante. Nam dui nulla, convallis nec pretium a, sagittis in odio. Etiam tempor urna vel fringilla feugiat. In vitae nunc imperdiet, dapibus erat eu, aliquet erat. </p>

            <button onClick={() => setUser(null)} >Logout</button>
        </div>
    )
}