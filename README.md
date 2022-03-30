After cloning the repo, install node packages:

    npm install

To start server on localhost:3000 (port may be changed in app.ts):

    npm run serve 

To run tests (note: this will run tests in watch mode):

    npm run test 

Usage:

To see responses from the available API endpoints, use the follow urls with an http client:

    http://localhost:3000/api/v1/unifiedDictionaryEntrySimplified?word=<word>

    http://localhost:3000/api/v1/unifiedDictionaryEntryMerged?word=<word>

The query parameter 'word' in the URL takes the argument for a word that dictionary APIs will return a response to.

Example usage:
    
    http://localhost:3000/api/v1/unifiedDictionaryEntrySimplified?word=deliberate

    http://localhost:3000/api/v1/unifiedDictionaryEntryMerged?word=perimeter
