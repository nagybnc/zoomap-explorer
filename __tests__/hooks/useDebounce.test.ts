import { renderHook, act } from "@testing-library/react";
import useDebounce from "../../hooks/useDebounce";

describe("useDebounce", () => {
  test("should delay the execution of the callback", async () => {
    jest.useFakeTimers();
    const callback = jest.fn();
    const { result } = renderHook(() => useDebounce(callback, "test", 1000));

    expect(callback).not.toBeCalled();
    await act(async () => {
      jest.advanceTimersByTime(500);
    });
    expect(callback).not.toBeCalled();
    await act(async () => {
      jest.advanceTimersByTime(500);
    });
    expect(callback).toBeCalled();
  });

  test("should reset the delay timer when the text changes", async () => {
    jest.useFakeTimers();
    const callback = jest.fn();
    const { result, rerender } = renderHook(
      ({ text }) => useDebounce(callback, text, 1000),
      { initialProps: { text: "test" } }
    );

    expect(callback).not.toBeCalled();
    await act(async () => {
      jest.advanceTimersByTime(500);
    });
    expect(callback).not.toBeCalled();
    rerender({ text: "changed" });
    await act(async () => {
      jest.advanceTimersByTime(500);
    });
    expect(callback).not.toBeCalled();
    await act(async () => {
      jest.advanceTimersByTime(500);
    });
    expect(callback).toBeCalled();
  });

  test("should cleanup the timer when the component unmounts", async () => {
    jest.useFakeTimers();
    const callback = jest.fn();
    const { result, unmount } = renderHook(() =>
      useDebounce(callback, "test", 1000)
    );

    expect(callback).not.toBeCalled();
    unmount();
    await act(async () => {
      jest.advanceTimersByTime(1000);
    });
    expect(callback).not.toBeCalled();
  });
});
