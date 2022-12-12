// 金額計算API
export const getAmount = async (req: {price: number; rate: number}) => {
  return new Promise<number>(resolve => {
    setTimeout(() => resolve(Math.round(req.price * (1 - req.rate))), 1000);
  });
};
