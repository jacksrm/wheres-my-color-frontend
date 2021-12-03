type TSaveFunc = (keyName: string, keyValue: string) => Promise<void>;
type TRemoveFunc = (keyValue: string) => Promise<void>;

export const save: TSaveFunc = async (keyName: string, keyValue: string) => {
  localStorage.setItem(keyName, keyValue);
};

export const remove: TRemoveFunc = async (keyValue: string) => {
  localStorage.removeItem(keyValue);
};
