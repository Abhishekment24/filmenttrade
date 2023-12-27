function formatMetamaskAddress(address) {
    if (address?.length >= 10) {
        return `${address?.slice(0, 10)}....${address?.slice(-5)}`;
    } else {
        return null
    }
}

const COMMON_FUNCTIONS = {
    formatMetamaskAddress
}
export default COMMON_FUNCTIONS