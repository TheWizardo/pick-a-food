class RandomService {
    public randomNumberFromArray(arr: boolean[]) {
        const indexes = arr.map((e, i) => e ? -1 : i).filter(e => e !== -1);
        return indexes[Math.floor(Math.random() * indexes.length)];
    }
}

const randomService = new RandomService();
export default randomService;