const routes = (handler) => [
  {
    method: 'GET',
    path: '/',
    handler: () => `
      <html lang="ID">
        <head>
          <title>OpenMusic API Reference</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
          <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"></script>
          <style>
            pre {
                padding: 16px !important;
                border: none !important;
                max-height: 500px;
            }
          </style>
        </head>
      <body>
      <div class="container" style="margin-top: 16px">
      <h2><strong>Add Song</strong></h2>
          <p><em>Menambah data lagu</em></p>
          <ul>
              <li><p><strong>URL</strong></p>
                  <p>/songs</p></li>
              <li><p><strong>Method:</strong></p>
                  <p><code>POST</code></p></li>
              <li><p><strong>Headers</strong></p>
                  <ul>
                      <li>Content-Type: <code>application/x-www-form-urlencoded</code> | <code>application/json</code></li>
                  </ul>
              </li>
              <li><p><strong>Body</strong></p>
                  <ul>
                      <li><p>JSON:
                      <code>
                      {
                        "title": string,
                        "year": number,
                        "performer": string,
                        "genre": string,
                        "duration": number
                      }
                      </code></p></li>
                  </ul>
              </li>
              <li>
                  <p><strong>Response</strong></p>
                  <pre class="prettyprint">
                  {
                    "status": "success",
                    "message": "Lagu berhasil ditambahkan",
                    "data": {
                        "songId": "song-Qbax5Oy7L8WKf74l"
                    }
                  }
                  </pre>
              </li>
          </ul>

          <h2><strong>Get List of Songs</strong></h2>
          <p><em>Menampilkan seluruh lagu</em></p>
          <ul>
              <li><p><strong>URL</strong></p>
                  <p>/songs</p></li>
              <li><p><strong>Method:</strong></p>
                  <p><code>GET</code></p></li>
              <li>
                  <p><strong>Response</strong></p>
                  <pre class="prettyprint">
                  {
                    "status": "success",
                    "data": {
                        "songs": [
                            {
                                "id": "song-Qbax5Oy7L8WKf74l",
                                "title": "Kenangan Mantan",
                                "performer": "Dicoding"
                            },
                            {
                                "id": "song-poax5Oy7L8WKllqw",
                                "title": "Kau Terindah",
                                "performer": "Dicoding"
                            },
                            {
                                "id": "song-Qalokam7L8WKf74l",
                                "title": "Tulus Padamu",
                                "performer": "Dicoding"
                            }
                        ]
                    }
                  }
                  </pre>
              </li>
          </ul>


          <h2><strong>Get Detail of Song</strong></h2>
          <p><em>Mendapatkan detail lagu</em></p>
          <ul>
              <li><p><strong>URL</strong></p>

                  <p>/songs/{songId}</p></li>
              <li><p><strong>Method:</strong></p>

                  <p><code>GET</code></p></li>

              <li>
                  <p><strong>Response</strong></p>
                  <pre class="prettyprint">
                  {
                    "status": "success",
                    "data": {
                        "song": {
                            "id": "song-Qbax5Oy7L8WKf74l",
                            "title": "Kenangan Mantan",
                            "year": 2021,
                            "performer": "Dicoding",
                            "genre": "Indie",
                            "duration": 120,
                            "insertedAt": "2021-03-05T06:14:28.930Z",
                            "updatedAt": "2021-03-05T06:14:30.718Z"
                        }
                    }
                  }
                  </pre>
              </li>
          </ul>

          <h2><strong>Update Song</strong></h2>
          <p><em>Mengubah data lagu</em></p>
          <ul>
              <li><p><strong>URL</strong></p>
                  <p>/songs/{songId}</p></li>
              <li><p><strong>Method:</strong></p>
                  <p><code>PUT</code></p></li>
              <li><p><strong>Headers</strong></p>

                  <ul>
                      <li>Content-Type: <code>application/x-www-form-urlencoded</code> | <code>application/json</code></li>
                  </ul>
              </li>
              <li><p><strong>Body</strong></p>
                  <ul>
                      <li><p>JSON:
                      <code>
                      {
                        "title": string,
                        "year": number,
                        "performer": string,
                        "genre": string,
                        "duration": number
                      }
                      </code></p></li>
                  </ul>
              </li>
              <li>
                  <p><strong>Response</strong></p>
                  <pre class="prettyprint">
                  {
                    "status": "success",
                    "message": "lagu berhasil diperbarui"
                  }
                  </pre>
              </li>
          </ul>

          <h2><strong>Delete Song</strong></h2>
          <p><em>Menghapus data lagu</em></p>
          <ul>
              <li><p><strong>URL</strong></p>

                  <p>/songs/{songId}</p></li>
              <li><p><strong>Method:</strong></p>

                  <p><code>DELETE</code></p></li>

              <li>
                  <p><strong>Response</strong></p>
                  <pre class="prettyprint">
                  {
                    "status": "success",
                    "message": "lagu berhasil dihapus"
                  }
                  </pre>
              </li>
          </ul>
      </div>
      </body>
    </html>
  `,
  },
  {
    method: 'POST',
    path: '/songs',
    handler: handler.postSongHandler,
  },
  {
    method: 'GET',
    path: '/songs',
    handler: handler.getSongsHandler,
  },
  {
    method: 'GET',
    path: '/songs/{id}',
    handler: handler.getSongByIdHandler,
  },
  {
    method: 'PUT',
    path: '/songs/{id}',
    handler: handler.putSongByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/songs/{id}',
    handler: handler.deleteSongByIdHandler,
  },
];

module.exports = routes;
