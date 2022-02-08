
export default function useFetch() {

    function fetchCoin(data, userInput) {
        console.log('data in isCoin', typeof data, userInput)
        for (let key in data) {
            // console.log('keys', key, data[key])
            if (Object.hasOwnProperty.call(data, key)) {
                const e = data[key];
                if (e['symbol'].toUpperCase() == userInput.toUpperCase()) {
                    return data;
                }
            }
        }
        return false;
    }
    return { fetchCoin }
}