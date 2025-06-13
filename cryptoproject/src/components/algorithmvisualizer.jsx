import React, { useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import SubsetSum from './algorithms/subset';
import EuclideanAlgorithm from './algorithms/euclideanalgo';
import MillerRabin from './algorithms/millerrabin';
import PlayfairCipher from './algorithms/playfair';

const algorithms = [
  { name: 'Subset Sum', description: 'The Subset Sum Problem is a decision problem in which you are given a set of integers, and you need to determine if there is a subset whose sum equals a given target.' },
  { name: 'Euclidean Algorithm', description: 'The Euclidean Algorithm is a method for computing the greatest common divisor (GCD) of two numbers. It works by repeatedly replacing the larger number with the remainder of dividing the larger by the smaller.' },
  { name: 'Miller-Rabin Test', description: 'The Miller-Rabin Test is a probabilistic algorithm used to test whether a number is prime. It uses a random base and checks if certain conditions hold to determine primality.' },
  { name: 'Playfair Cipher', description: 'The Playfair Cipher is a digraph substitution cipher, where each pair of letters is replaced by another pair of letters using a key square.' }
];

export default function AlgorithmVisualizer() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('');
  const [algorithmDescription, setAlgorithmDescription] = useState('');

  const handleSelectAlgorithm = (algoName) => {
    const algorithm = algorithms.find(algo => algo.name === algoName);
    setSelectedAlgorithm(algoName);
    setAlgorithmDescription(algorithm ? algorithm.description : '');
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <h4>Select Algorithm</h4>
              <select
                className="form-select"
                value={selectedAlgorithm}
                onChange={(e) => handleSelectAlgorithm(e.target.value)}
              >
                <option value="">-- Select an Algorithm --</option>
                {algorithms.map((algo) => (
                  <option key={algo.name} value={algo.name}>{algo.name}</option>
                ))}
              </select>
            </Card.Body>
          </Card>
          
          <Card>
            <Card.Body>
              <h4>Algorithm Theory</h4>
              <p>{algorithmDescription}</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={8}>
          <Card>
            <Card.Body>
              <h4>Algorithm Visualization</h4>
              {/* Render selected algorithm here */}
              {selectedAlgorithm === 'Subset Sum' && <SubsetSum />}
              {selectedAlgorithm === 'Euclidean Algorithm' && <EuclideanAlgorithm />}
              {selectedAlgorithm === 'Miller-Rabin Test' && <MillerRabin />}
              {selectedAlgorithm === 'Playfair Cipher' && <PlayfairCipher />}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
