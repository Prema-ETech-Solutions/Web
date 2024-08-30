type Dev = {
    name: string;
    age: number;
    ph: number;
    branch: string;
    carInfo: {
        model: string;
        color: string;
    };
    bikeInfo?: {
        model: string;
        color?: string;
    };
};

const dev: Dev = {
    name: 'Prem',
    age: 10,
    ph: 1234567890,
    branch: 'Mumbai',
    carInfo: { model: 'MK4', color: 'Orange' }
};

console.log(dev);
console.log(dev.bikeInfo?.model ?? '');
