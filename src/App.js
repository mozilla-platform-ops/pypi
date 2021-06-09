import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';

function App() {
  const [packageUrls, setPackageUrls] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/mozilla-platform-ops/pypi/main/packageUrls.json')
      .then(response => response.json())
      .then(content => setPackageUrls(content))
      .catch(e => console.error(e))
  }, []);

  return (
    <Container>
      <ul>
        {
          packageUrls.map((packageUrl) => (
            <li key={packageUrl}>
              <a href={packageUrl}>{packageUrl.split('/').pop()}</a>
            </li>
          ))
        }      
      </ul>
    </Container>
  );
}

export default App;
