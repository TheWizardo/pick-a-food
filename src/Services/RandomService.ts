import { Type } from "typescript";

class RandomService {
    public randomInt(max: number, min = 0): number {
        let true_max = max;
        let true_min = min;
        if (max < min) {
            true_max = min;
            true_min = max;
        }
        return Math.floor(Math.random() * (true_max - true_min)) + true_min;
    }

    public randomNumberFromArray(arr: boolean[]): number {
        const indexes = arr.map((e, i) => e ? -1 : i).filter(e => e !== -1);
        return indexes[this.randomInt(indexes.length)];
    }

    public randomElementsFromArray<T>(arr: T[], amount: number): T[] {
        if (amount >= arr.length) {
            return arr;
        }
        const rand_arr: T[] = [];
        let index = this.randomInt(arr.length);
        while (rand_arr.length < 4) {
            if (!rand_arr.includes(arr[index]))
            {
                rand_arr.push(arr[index]);
            }
            index = this.randomInt(arr.length);
        }
        return rand_arr;
    }
}

const randomService = new RandomService();
export default randomService;