

export const getItem = (key: string): boolean => {
    const item = window.localStorage.getItem(key);
    if (item !== null) {
      return JSON.parse(item) as boolean;
    }
    return false;
  };
  
  export const setItem = (key: string, data: boolean):void => {
      window.localStorage.setItem(key, JSON.stringify(data));
  }

  export const setRemoveItem = (key:string):void => {
    window.localStorage.removeItem(key);
  }