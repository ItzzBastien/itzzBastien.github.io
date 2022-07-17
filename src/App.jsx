import './App.css'
import { Spinner } from '@chakra-ui/react';

export default function App() {

  return (
    <div className="bg">
      <div className="loading-content">
        <a href="https://github.com/itzzbastien">
          <h1>Loading content</h1>
        </a>
        <Spinner size={"xl"} speed="1s" color='#78B2BF'/>
        
      </div>
    </div>
  );
}