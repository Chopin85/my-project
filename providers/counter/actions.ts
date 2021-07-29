export const INCREMENT_COUNTER = "providers/counter/INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "provider/counter/DECREMENT_COUNTER";
export const RESET_COUNTER = "providers/counter/RESET_COUNTER";

export function incrementCounter() {
  return {
    type: INCREMENT_COUNTER,
  };
}

export function decrementCounter() {
  return {
    type: DECREMENT_COUNTER,
  };
}

export function resetCounter() {
  return {
    type: RESET_COUNTER,
  };
}
