let logVisibleLightWaves = () => {
const lightWaves = 'Moonlight';
console.log(lightWaves);
};
logVisibleLightWaves();
// this will throw error as we cant print lightwaves outside of its scope
console.log(lightWaves);
