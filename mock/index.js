const Mock = require('better-mock/dist/mock.mp.js')


Mock.mock('http://example.com/path/to', {
    'list|1-10': [{
        'id|+1': 1
    }]
})