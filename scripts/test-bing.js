const { translate } = require('bing-translate-api');

async function test() {
    try {
        const res = await translate('Hello, how are you?', null, 'pt', true);
        console.log('PT:', res.translation);
        
        const res2 = await translate('Hello, how are you?', null, 'es', true);
        console.log('ES:', res2.translation);
    } catch (e) {
        console.error(e);
    }
}
test();
