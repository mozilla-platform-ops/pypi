import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import ReactMarkdown from 'react-markdown';

function App() {
  const [readme, setReadme] = useState('');
  const [packageUrls, setPackageUrls] = useState([]);
  useEffect(() => {
    fetch('readme.md')
      .then(response => response.text())
      .then(content => setReadme(content))
      .catch(e => console.error(e));
    fetch('https://raw.githubusercontent.com/mozilla-platform-ops/pypi/main/packageUrls.json')
      .then(response => response.json())
      .then(content => {
        content.sort((a, b) => {
          if (a.split('/').pop() < b.split('/').pop()) {
            return -1;
          }
          if (a.split('/').pop() > b.split('/').pop()) {
            return 1;
          }
          return 0;
        });
        setPackageUrls(content);
      })
      .catch(e => console.error(e));
  }, []);

  return (
    <Container>
      <ReactMarkdown>{readme}</ReactMarkdown>
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
