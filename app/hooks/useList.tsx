import * as React from "react";

const placeholder = () => {};

export default function useList(defaultList = []) {
  const [list, setList] = React.useState(defaultList);

  const set = (newList) => {
    setList(newList);
  };

  const push = (item) => {
    setList((list) => [...list, item]);
  };

  const removeAt = (idx) => {
    setList((list) => {
      const newList = [...list];
      newList.splice(idx, 1);
      return newList;
    });
  };

  const insertAt = (idx, ele) => {
    setList((list) => {
      const newList = [...list];
      newList.splice(idx, 0, ele);
      return newList;
    });
  };

  const updateAt = (idx, ele) => {
    setList((list) => {
      let newList = [...list];
      newList[idx] = ele;
      return newList;
    }
  };

  const clear = () => {
    setList([])
  }

  return [list, { set, push, removeAt, insertAt, updateAt, clear }];
}
