import React from 'react';

export default function MillerRabin() {
  return (
    <div>
      <h5>Miller-Rabin Primality Test</h5>
      <p>The Miller-Rabin Test is a probabilistic algorithm used to test whether a number is prime. It uses a random base and checks if certain conditions hold to determine primality.</p>
      <h6>Example:</h6>
      <p>Let’s test if 37 is prime. We perform the Miller-Rabin test with random bases and check if 37 satisfies the conditions.</p>

      {/* You can add further visualizations or steps here */}
    </div>
  );
}
