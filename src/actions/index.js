//複数で使うデータは一箇所で定義する
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

//オブジェクトのこと
//actionを返すものActionCreator

export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});
