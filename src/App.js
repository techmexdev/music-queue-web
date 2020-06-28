import React from 'react';
import { useState, useEffect } from 'react'
import { PageHeader, List, Card } from 'antd'
import './App.css';
import 'antd/dist/antd.css'

function App() {
  const [tndAlbums, setTNDAlbums] = useState([])
  const [subMuCoreAlbums, setSubMuCoreAlbums] = useState([])
  useEffect(() => 
    fetch('http://localhost:8080/tnd')
    .then(res => res.json())
    .then(albums => setTNDAlbums(albums)
    ), [])

  useEffect(() => 
    fetch('http://localhost:8080/sub-mu-core')
    .then(res => res.json())
    .then(albums => setSubMuCoreAlbums(albums)
    ), [])

  return (
    <div className="App">
      <header>
      </header>
      <PageHeader
        className="site-page-header"
        title="Music Queue"
        subTitle="Organize the music you should listen to"
      />
      <div>
        <h1>sub-/mu/core</h1>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={subMuCoreAlbums}
          renderItem={ ({ title, artist, rating, artwork_url }) => (
            <List.Item>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt={title} src={artwork_url} />}
                >
                  <Card.Meta title={title} description={artist}/>
                </Card>
            </List.Item>
          )}
        />
        <h1>Melonhead's love list</h1>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={tndAlbums}
          renderItem={ ({ title, artist, rating, artwork_url }) => (
            <List.Item>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt={title} src={artwork_url} />}
                >
                  <Card.Meta title={title} description={artist}/>
                </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default App;
