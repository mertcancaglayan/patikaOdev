import getData from './getData.js';

(async () => {
    try {
        const userId = 1;
        const result = await getData(userId);
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
})();
