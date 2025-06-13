import React from 'react';

export default function PlayfairCipher() {
  return (
    <div>
      <h5>Playfair Cipher</h5>
      <p>The Playfair Cipher is a digraph substitution cipher, where each pair of letters is replaced by another pair of letters using a key square.</p>
      <h6>Steps to Encrypt:</h6>
      <p>1. Construct a 5x5 matrix using a key phrase.</p>
      <p>2. Divide the message into digraphs (pairs of letters). If there is an odd number of characters, append a filler letter (usually 'X').</p>
      <p>3. For each digraph, find the letters in the key square and apply the Playfair cipher rules.</p>
      <h6>Example:</h6>
      <p>For the plaintext "HELLO", we use the key matrix and apply the rules to encrypt it.</p>
      <p>Steps to solve:
        <ul>
          <li>Construct the 5x5 matrix with a key phrase (e.g., 'KEYWORD').</li>
          <li>Replace each pair of letters in the plaintext using the matrix.</li>
        </ul>
      </p>
      {/* You can add further visualizations or steps here */}
    </div>
  );
}
