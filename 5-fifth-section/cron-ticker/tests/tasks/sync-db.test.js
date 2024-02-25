const { syncDB } = require("../../tasks/sync-db");

describe(' Pruebas de syncDB', () => {
    test('should execute twice the function', () => { 
        syncDB();
        const times = syncDB();
        expect(times).toBe(2);
    });
});