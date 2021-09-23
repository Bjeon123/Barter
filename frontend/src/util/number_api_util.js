export const numToDollars = new Intl.NumberFormat('en-US',
    {
        style: 'currency',
        currency: 'USD',
    }
);

export const randomInt = () => Math.floor(1000 + Math.random() * 9000);