
the req here:

IncomingMessage {
  _readableState: 
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: BufferList { head: null, tail: null, length: 0 },
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: null,
     ended: false,
     endEmitted: false,
     reading: false,
     sync: true,
     needReadable: false,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: true,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: {},
  _eventsCount: 0,
  _maxListeners: undefined,
  socket: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: 
      TCP {
        bytesRead: 455,
        _externalStream: [External],
        fd: 15,
        reading: true,
        owner: [Object],
        onread: [Function: onread],
        onconnection: null,
        writeQueueSize: 0,
        _consumed: true },
     _parent: null,
     _host: null,
     _readableState: 
      ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: [Object],
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        destroyed: false,
        defaultEncoding: 'utf8',
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null },
     readable: true,
     domain: null,
     _events: 
      { end: [Array],
        finish: [Function: onSocketFinish],
        _socketEnd: [Function: onSocketEnd],
        drain: [Array],
        timeout: [Function: socketOnTimeout],
        data: [Function: bound socketOnData],
        error: [Function: socketOnError],
        close: [Array],
        resume: [Function: onSocketResume],
        pause: [Function: onSocketPause] },
     _eventsCount: 10,
     _maxListeners: undefined,
     _writableState: 
      WritableState {
        objectMode: false,
        highWaterMark: 16384,
        finalCalled: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        destroyed: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: true,
        bufferProcessing: false,
        onwrite: [Function: bound onwrite],
        writecb: null,
        writelen: 0,
        bufferedRequest: null,
        lastBufferedRequest: null,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        bufferedRequestCount: 0,
        corkedRequestsFree: [Object] },
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: 
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 2,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6::::3000',
        [Symbol(asyncId)]: 6 },
     _server: 
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 2,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6::::3000',
        [Symbol(asyncId)]: 6 },
     _idleTimeout: 120000,
     _idleNext: 
      TimersList {
        _idleNext: [Object],
        _idlePrev: [Object],
        _timer: [Object],
        _unrefed: true,
        msecs: 120000,
        nextTick: false },
     _idlePrev: 
      Socket {
        connecting: false,
        _hadError: false,
        _handle: [Object],
        _parent: null,
        _host: null,
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: [Object],
        _eventsCount: 10,
        _maxListeners: undefined,
        _writableState: [Object],
        writable: true,
        allowHalfOpen: true,
        _bytesDispatched: 0,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Object],
        _server: [Object],
        _idleTimeout: 120000,
        _idleNext: [Object],
        _idlePrev: [Object],
        _idleStart: 2348,
        _destroyed: false,
        parser: [Object],
        on: [Function: socketOnWrap],
        _paused: false,
        read: [Function],
        _consuming: true,
        [Symbol(asyncId)]: 15,
        [Symbol(bytesRead)]: 0,
        [Symbol(asyncId)]: 16,
        [Symbol(triggerAsyncId)]: 6 },
     _idleStart: 2346,
     _destroyed: false,
     parser: 
      HTTPParser {
        '0': [Function: parserOnHeaders],
        '1': [Function: parserOnHeadersComplete],
        '2': [Function: parserOnBody],
        '3': [Function: parserOnMessageComplete],
        '4': [Function: bound onParserExecute],
        _headers: [],
        _url: '',
        _consumed: true,
        socket: [Object],
        incoming: [Object],
        outgoing: null,
        maxHeaderPairs: 2000,
        onIncoming: [Function: bound parserOnIncoming] },
     on: [Function: socketOnWrap],
     _paused: false,
     read: [Function],
     _consuming: true,
     _httpMessage: 
      ServerResponse {
        domain: null,
        _events: [Object],
        _eventsCount: 1,
        _maxListeners: undefined,
        output: [],
        outputEncodings: [],
        outputCallbacks: [],
        outputSize: 0,
        writable: true,
        _last: false,
        upgrading: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        socket: [Object],
        connection: [Object],
        _header: null,
        _onPendingData: [Function: bound updateOutgoingData],
        _sent100: false,
        _expect_continue: false,
        req: [Object],
        locals: {},
        [Symbol(outHeadersKey)]: [Object] },
     [Symbol(asyncId)]: 9,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 11,
     [Symbol(triggerAsyncId)]: 6 },
  connection: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: 
      TCP {
        bytesRead: 455,
        _externalStream: [External],
        fd: 15,
        reading: true,
        owner: [Object],
        onread: [Function: onread],
        onconnection: null,
        writeQueueSize: 0,
        _consumed: true },
     _parent: null,
     _host: null,
     _readableState: 
      ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: [Object],
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        destroyed: false,
        defaultEncoding: 'utf8',
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null },
     readable: true,
     domain: null,
     _events: 
      { end: [Array],
        finish: [Function: onSocketFinish],
        _socketEnd: [Function: onSocketEnd],
        drain: [Array],
        timeout: [Function: socketOnTimeout],
        data: [Function: bound socketOnData],
        error: [Function: socketOnError],
        close: [Array],
        resume: [Function: onSocketResume],
        pause: [Function: onSocketPause] },
     _eventsCount: 10,
     _maxListeners: undefined,
     _writableState: 
      WritableState {
        objectMode: false,
        highWaterMark: 16384,
        finalCalled: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        destroyed: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: true,
        bufferProcessing: false,
        onwrite: [Function: bound onwrite],
        writecb: null,
        writelen: 0,
        bufferedRequest: null,
        lastBufferedRequest: null,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        bufferedRequestCount: 0,
        corkedRequestsFree: [Object] },
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: 
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 2,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6::::3000',
        [Symbol(asyncId)]: 6 },
     _server: 
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 2,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6::::3000',
        [Symbol(asyncId)]: 6 },
     _idleTimeout: 120000,
     _idleNext: 
      TimersList {
        _idleNext: [Object],
        _idlePrev: [Object],
        _timer: [Object],
        _unrefed: true,
        msecs: 120000,
        nextTick: false },
     _idlePrev: 
      Socket {
        connecting: false,
        _hadError: false,
        _handle: [Object],
        _parent: null,
        _host: null,
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: [Object],
        _eventsCount: 10,
        _maxListeners: undefined,
        _writableState: [Object],
        writable: true,
        allowHalfOpen: true,
        _bytesDispatched: 0,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Object],
        _server: [Object],
        _idleTimeout: 120000,
        _idleNext: [Object],
        _idlePrev: [Object],
        _idleStart: 2348,
        _destroyed: false,
        parser: [Object],
        on: [Function: socketOnWrap],
        _paused: false,
        read: [Function],
        _consuming: true,
        [Symbol(asyncId)]: 15,
        [Symbol(bytesRead)]: 0,
        [Symbol(asyncId)]: 16,
        [Symbol(triggerAsyncId)]: 6 },
     _idleStart: 2346,
     _destroyed: false,
     parser: 
      HTTPParser {
        '0': [Function: parserOnHeaders],
        '1': [Function: parserOnHeadersComplete],
        '2': [Function: parserOnBody],
        '3': [Function: parserOnMessageComplete],
        '4': [Function: bound onParserExecute],
        _headers: [],
        _url: '',
        _consumed: true,
        socket: [Object],
        incoming: [Object],
        outgoing: null,
        maxHeaderPairs: 2000,
        onIncoming: [Function: bound parserOnIncoming] },
     on: [Function: socketOnWrap],
     _paused: false,
     read: [Function],
     _consuming: true,
     _httpMessage: 
      ServerResponse {
        domain: null,
        _events: [Object],
        _eventsCount: 1,
        _maxListeners: undefined,
        output: [],
        outputEncodings: [],
        outputCallbacks: [],
        outputSize: 0,
        writable: true,
        _last: false,
        upgrading: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        socket: [Object],
        connection: [Object],
        _header: null,
        _onPendingData: [Function: bound updateOutgoingData],
        _sent100: false,
        _expect_continue: false,
        req: [Object],
        locals: {},
        [Symbol(outHeadersKey)]: [Object] },
     [Symbol(asyncId)]: 9,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 11,
     [Symbol(triggerAsyncId)]: 6 },
  httpVersionMajor: 1,
  httpVersionMinor: 1,
  httpVersion: '1.1',
  complete: false,
  headers: 
   { host: 'localhost:3000',
     connection: 'keep-alive',
     'upgrade-insecure-requests': '1',
     'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
     'accept-encoding': 'gzip, deflate, br',
     'accept-language': 'en-US,en;q=0.9',
     'if-none-match': 'W/"b-VdXFaigy4zgPmSINucfqqumdswA"' },
  rawHeaders: 
   [ 'Host',
     'localhost:3000',
     'Connection',
     'keep-alive',
     'Upgrade-Insecure-Requests',
     '1',
     'User-Agent',
     'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
     'Accept',
     'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
     'Accept-Encoding',
     'gzip, deflate, br',
     'Accept-Language',
     'en-US,en;q=0.9',
     'If-None-Match',
     'W/"b-VdXFaigy4zgPmSINucfqqumdswA"' ],
  trailers: {},
  rawTrailers: [],
  upgrade: false,
  url: '/api/pokemon/',
  method: 'GET',
  statusCode: null,
  statusMessage: null,
  client: 
   Socket {
     connecting: false,
     _hadError: false,
     _handle: 
      TCP {
        bytesRead: 455,
        _externalStream: [External],
        fd: 15,
        reading: true,
        owner: [Object],
        onread: [Function: onread],
        onconnection: null,
        writeQueueSize: 0,
        _consumed: true },
     _parent: null,
     _host: null,
     _readableState: 
      ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: [Object],
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        destroyed: false,
        defaultEncoding: 'utf8',
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null },
     readable: true,
     domain: null,
     _events: 
      { end: [Array],
        finish: [Function: onSocketFinish],
        _socketEnd: [Function: onSocketEnd],
        drain: [Array],
        timeout: [Function: socketOnTimeout],
        data: [Function: bound socketOnData],
        error: [Function: socketOnError],
        close: [Array],
        resume: [Function: onSocketResume],
        pause: [Function: onSocketPause] },
     _eventsCount: 10,
     _maxListeners: undefined,
     _writableState: 
      WritableState {
        objectMode: false,
        highWaterMark: 16384,
        finalCalled: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        destroyed: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: true,
        bufferProcessing: false,
        onwrite: [Function: bound onwrite],
        writecb: null,
        writelen: 0,
        bufferedRequest: null,
        lastBufferedRequest: null,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        bufferedRequestCount: 0,
        corkedRequestsFree: [Object] },
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: 
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 2,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6::::3000',
        [Symbol(asyncId)]: 6 },
     _server: 
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 2,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6::::3000',
        [Symbol(asyncId)]: 6 },
     _idleTimeout: 120000,
     _idleNext: 
      TimersList {
        _idleNext: [Object],
        _idlePrev: [Object],
        _timer: [Object],
        _unrefed: true,
        msecs: 120000,
        nextTick: false },
     _idlePrev: 
      Socket {
        connecting: false,
        _hadError: false,
        _handle: [Object],
        _parent: null,
        _host: null,
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: [Object],
        _eventsCount: 10,
        _maxListeners: undefined,
        _writableState: [Object],
        writable: true,
        allowHalfOpen: true,
        _bytesDispatched: 0,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Object],
        _server: [Object],
        _idleTimeout: 120000,
        _idleNext: [Object],
        _idlePrev: [Object],
        _idleStart: 2348,
        _destroyed: false,
        parser: [Object],
        on: [Function: socketOnWrap],
        _paused: false,
        read: [Function],
        _consuming: true,
        [Symbol(asyncId)]: 15,
        [Symbol(bytesRead)]: 0,
        [Symbol(asyncId)]: 16,
        [Symbol(triggerAsyncId)]: 6 },
     _idleStart: 2346,
     _destroyed: false,
     parser: 
      HTTPParser {
        '0': [Function: parserOnHeaders],
        '1': [Function: parserOnHeadersComplete],
        '2': [Function: parserOnBody],
        '3': [Function: parserOnMessageComplete],
        '4': [Function: bound onParserExecute],
        _headers: [],
        _url: '',
        _consumed: true,
        socket: [Object],
        incoming: [Object],
        outgoing: null,
        maxHeaderPairs: 2000,
        onIncoming: [Function: bound parserOnIncoming] },
     on: [Function: socketOnWrap],
     _paused: false,
     read: [Function],
     _consuming: true,
     _httpMessage: 
      ServerResponse {
        domain: null,
        _events: [Object],
        _eventsCount: 1,
        _maxListeners: undefined,
        output: [],
        outputEncodings: [],
        outputCallbacks: [],
        outputSize: 0,
        writable: true,
        _last: false,
        upgrading: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        socket: [Object],
        connection: [Object],
        _header: null,
        _onPendingData: [Function: bound updateOutgoingData],
        _sent100: false,
        _expect_continue: false,
        req: [Object],
        locals: {},
        [Symbol(outHeadersKey)]: [Object] },
     [Symbol(asyncId)]: 9,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 11,
     [Symbol(triggerAsyncId)]: 6 },
  _consuming: false,
  _dumped: false,
  next: [Function: next],
  baseUrl: '',
  originalUrl: '/api/pokemon/',
  _parsedUrl: 
   Url {
     protocol: null,
     slashes: null,
     auth: null,
     host: null,
     port: null,
     hostname: null,
     hash: null,
     search: null,
     query: null,
     pathname: '/api/pokemon/',
     path: '/api/pokemon/',
     href: '/api/pokemon/',
     _raw: '/api/pokemon/' },
  params: {},
  query: {},
  res: 
   ServerResponse {
     domain: null,
     _events: { finish: [Function: bound resOnFinish] },
     _eventsCount: 1,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: true,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket: 
      Socket {
        connecting: false,
        _hadError: false,
        _handle: [Object],
        _parent: null,
        _host: null,
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: [Object],
        _eventsCount: 10,
        _maxListeners: undefined,
        _writableState: [Object],
        writable: true,
        allowHalfOpen: true,
        _bytesDispatched: 0,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Object],
        _server: [Object],
        _idleTimeout: 120000,
        _idleNext: [Object],
        _idlePrev: [Object],
        _idleStart: 2346,
        _destroyed: false,
        parser: [Object],
        on: [Function: socketOnWrap],
        _paused: false,
        read: [Function],
        _consuming: true,
        _httpMessage: [Object],
        [Symbol(asyncId)]: 9,
        [Symbol(bytesRead)]: 0,
        [Symbol(asyncId)]: 11,
        [Symbol(triggerAsyncId)]: 6 },
     connection: 
      Socket {
        connecting: false,
        _hadError: false,
        _handle: [Object],
        _parent: null,
        _host: null,
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: [Object],
        _eventsCount: 10,
        _maxListeners: undefined,
        _writableState: [Object],
        writable: true,
        allowHalfOpen: true,
        _bytesDispatched: 0,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Object],
        _server: [Object],
        _idleTimeout: 120000,
        _idleNext: [Object],
        _idlePrev: [Object],
        _idleStart: 2346,
        _destroyed: false,
        parser: [Object],
        on: [Function: socketOnWrap],
        _paused: false,
        read: [Function],
        _consuming: true,
        _httpMessage: [Object],
        [Symbol(asyncId)]: 9,
        [Symbol(bytesRead)]: 0,
        [Symbol(asyncId)]: 11,
        [Symbol(triggerAsyncId)]: 6 },
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: {},
     [Symbol(outHeadersKey)]: { 'x-powered-by': [Array] } },
  route: 
   Route {
     path: '/api/pokemon',
     stack: [ [Object] ],
     methods: { get: true } } }