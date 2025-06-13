import React from 'react';

export default function SubsetSum() {
  return (
    <div>
      <h5>Subset Sum Problem</h5>
      <p>The Subset Sum Problem is a decision problem in which you are given a set of integers, and you need to determine if there is a subset whose sum equals a given target.</p>
      <h6>Example:</h6>
      <p>Given a set: {`[3, 34, 4, 12, 5, 2]`} and a target sum: 9, we need to check if there is a subset of this set that sums up to 9.</p>
      <p>Steps to solve:
        <ul>
          <li>Start with all possible subsets of the set.</li>
          <li>Check if any of the subsets sum up to the target value.</li>
        </ul>
      </p>
      {/* You can add further visualizations or steps here */}
    </div>
  );
}
