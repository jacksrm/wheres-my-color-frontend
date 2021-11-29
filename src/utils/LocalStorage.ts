export const save = async (keyName:string, keyValue:string) => {
  localStorage.setItem(keyName, keyValue);
};

export const remove = async (keyValue: string) => {
  localStorage.removeItem(keyValue);
};
