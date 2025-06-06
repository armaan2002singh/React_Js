#### InterView prospective
### React specific 
- Increment or decrement, code.?
- Answer in 02counter Project.


#### HOOKS
### 🔹 1. Basic (Built-in) Hooks

| Hook                  | Purpose                                                                 |
|-----------------------|-------------------------------------------------------------------------|
| `useState`            | Adds state to a functional component.                                   |
| `useEffect`           | Handles side effects (like API calls, timers, subscriptions).           |
| `useContext`          | Accesses the value from a React context.                                |
| `useRef`              | Provides a mutable ref object, often used to access DOM nodes.          |
| `useCallback`         | Memoizes a function to avoid re-creating it unnecessarily.              |
| `useMemo`             | Memoizes a computed value to optimize performance.                      |
| `useReducer`          | Manages complex state logic as an alternative to `useState`.            |
| `useLayoutEffect`     | Like `useEffect`, but fires synchronously after all DOM mutations.      |
| `useImperativeHandle` | Customizes the value exposed to parent when using `ref` with `forwardRef`. |
| `useDebugValue`       | Used for debugging custom hooks (visible in React DevTools).            |
| `useId`               | Generates a stable unique ID for accessibility and keys.                |



### 🔹 2. Additional Hooks (React 18+)

| Hook                   | Purpose                                                                 |
|------------------------|-------------------------------------------------------------------------|
| `useSyncExternalStore` | Subscribes to external stores consistently across server and client.    |
| `useDeferredValue`     | Defers re-rendering to improve performance of slow components.          |
| `useTransition`        | Marks updates as non-urgent for concurrent rendering.                   |
| `useInsertionEffect`   | Runs before `useLayoutEffect`, mainly used by CSS-in-JS libraries.      |


### 🔹 3. Custom Hooks

You can create your own custom hooks by combining built-in ones:

```js
function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const increment = () => setCount(c => c + 1);
  return [count, increment];
}
